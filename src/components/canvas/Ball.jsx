import React , { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal , Float , OrbitControls , Preload , useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0 , 0 , 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1 , 1]} />

      </mesh>

    </Float>
  )
}

const BallCanvas = ( {icon} ) =>{
  return(
        <Canvas 
        frameloop="demand" 
      
         
        gl={{preserveDrawingBuffer:true}} className="relative z-0">
    
          {/* ######## very important#########!!!!!! Suspense is rom react  , eta loader pete help korbe jokhn model ta loading hote thakbe */}
           
          <Suspense fallback={ <CanvasLoader/>}> 
           
    
           {/* OrbitControls model ta k left and right e move korte help korbe || enableZoom er value false hbe karon amra eta k zoom korbo na.. ||       maxPolarAngle and minPolarAngle -> eigulo use kora hocche jno model ta sob jayga the rotate na kora jay, infact specific angle or axis thei rotate kora jno jay etai target*/}
    
          <OrbitControls enableZoom={false}/>

          <Ball imgUrl={icon}/>
    
          </Suspense>
          <Preload all />
    
        </Canvas>
  )
}
 export default BallCanvas;