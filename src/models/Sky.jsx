import { useGLTF } from "@react-three/drei"
import skyScene from '../assets/3d/sky.glb'

// El cielo sera un tipo de dato primitivo
// No será una imagen, porque se podrá rotar alrededor de la isla, y las nubes deben rotar también

const Sky = () => {

    const sky = useGLTF(skyScene)

  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky