import React , { Suspense , useState , useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls , Preload , useGLTF , Html } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("/public/desktop_pc/scene.gltf");
  
  return (
    // three js create create er jonno mesh tag use korte hbe

    <mesh>
      {/* light create korte hobe, jeta chara kichu dekha jabe na  hemisphereLight ta pc er desk k enlighten korbe*/}
    
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* point light create korte hbe -- eta pc er screen erupor dekha jabe just like room er light er reflection ta pc te porche */}
      <pointLight intensity={1} />


      {/* postion: This sets the position of the spotlight in 3D space || angle: This defines the angle (in radians) of the spotlight's beam panumbra: This controls the softness of the edges of the spotlight's beam.
      A value of 0 means the beam has a hard edge, while a value of 1 means the edges are very soft. penumbra={1} gives the spotlight a soft, gradual fade at the edges. || intensity: This sets the brightness of the spotlight. castShadow: This enables shadow casting for the spotlight.When castShadow is true, objects illuminated by the spotlight will cast shadows.shadow-mapSize: This sets the resolution of the shadow map used by the spotlight */}
      <spotLight position={[-20 , 50 , 10]} angle={0.12} panumbra={1} intensity={1} castShadow shadow-mapSize={1024} />


      {/* object pass korar jnno primitive use korte hbe */}
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ?[0 , -3 , -2.2] : [0 , -3.25 , -1.5]} rotation={[-0.01 , -0.2 , -0.1]} />

    </mesh>
  )
};

// camera - kothay theke amra model ta dekhbo setar way ..fov(field of view) is how wide the object is || {preserveDrawingBuffer:true = to render the model properly


const ComputersCanvas = () =>{
  const [isMobile , setIsMobile] = useState(false);

  // useEffect diye isMobile er value change kora hocche
  useEffect(()=>{
    // add eventListner for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);

      // need to add a eventListner and after that remove it 
      mediaQuery.addEventListener('change' , handleMediaQueryChange);
      return() =>{
        mediaQuery.removeEventListener('change' , handleMediaQueryChange);
      }
    };

  }, []);

  return(
    <Canvas 
    frameloop="demand" 
    shadows
     camera={{position:[20 , 3 , 5] , fov: 25 }}
    gl={{preserveDrawingBuffer:true}} className="relative z-0">

      {/* ######## very important#########!!!!!! Suspense is rom react  , eta loader pete help korbe jokhn model ta loading hote thakbe */}
       
      <Suspense fallback={ <CanvasLoader/>}> 
       

       {/* OrbitControls model ta k left and right e move korte help korbe || enableZoom er value false hbe karon amra eta k zoom korbo na.. ||       maxPolarAngle and minPolarAngle -> eigulo use kora hocche jno model ta sob jayga the rotate na kora jay, infact specific angle or axis thei rotate kora jno jay etai target*/}

      <OrbitControls enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}/>

      <Computers isMobile={isMobile} />

      </Suspense>
      <Preload all />

    </Canvas>
    
  )

};

export default ComputersCanvas;