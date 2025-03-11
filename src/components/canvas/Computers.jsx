import React , { Suspense , useState , useEffect } from "react";
import { Canvas , extend } from "@react-three/fiber";
import { OrbitControls , Preload , useGLTF , Html } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const Computers = () => {
  const computer = useGLTF("/public/desktop_pc/scene.gltf");
  console.log(computer);
  return (
    // three js create create er jonno mesh tag use korte hbe

    <mesh>
      {/* light create korte hobe, jeta chara kichu dekha jabe na */}
    
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* point light create korte hbe -- eta pc er screen erupor dekha jabe just like room er light er reflection ta pc te porche */}
      <pointLight intensity={1} />

      {/* object pass korar jnno primitive use korte hbe */}
      <primitive object={computer.scene} />

    </mesh>
  )
};

// camera - kothay theke amra model ta dekhbo setar way ..fov(field of view) is how wide the object is || {preserveDrawingBuffer:true = to render the model properly


const ComputersCanvas = () =>{
  return(
    <Canvas 
    frameloop="demand" 
    shadows
     camera={{position:[20 , 3 , 5] , fov: 25 }}
    gl={{preserveDrawingBuffer:true}}>

      {/* Suspense is rom react  , eta loader pete help korbe jokhn model ta loading hote thakbe */}
      <Suspense fallback={<CanvasLoader/>}>
       

       {/* OrbitControls model ta k left and right e move korte help korbe || enableZoom er value false hbe karon amra eta k zoom korbo na.. ||       maxPolarAngle and minPolarAngle -> eigulo use kora hocche jno model ta sob jayga the rotate na kora jay, infact specific angle or axis thei rotate kora jno jay etai target*/}

      <OrbitControls enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}/>

      <Computers/>

      </Suspense>
      <Preload all />

    </Canvas>
    
  )

};

export default ComputersCanvas;