import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect, act } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  // Moverlo por la isla
  useFrame(({ clock, camera })=> {
    // Update y position to simulate the flight moving in a sin wave
    // Se movera mientras vaya pasando el tiempo
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2 ;

    // Para moverlo alrededor de la isla (x)
    // Si el pajaro se ha salido de la camara se quiere que de la vuelta 180°
    if(birdRef.current.position.x > camera.position.x + 10){
      birdRef.current.rotation.y = Math.PI
    }else if(birdRef.current.position.x < camera.position.x - 10){
      // si no ha llegado al final
      birdRef.current.rotation.y = 0
    }

    if(birdRef.current.rotation.y === 0){
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    }else{
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

  })

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
