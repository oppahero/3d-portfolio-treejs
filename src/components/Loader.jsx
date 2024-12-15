import { Html } from "@react-three/drei";

// Cuando se renderiza en un canvas, tiene que se una propiedad 3D
// El loader no lo es. Para convertirlo a 3D se usará react three drei

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div
          className="w-20 h-20 bottom-2 border-opacity-20 border-blue-500 border-t-blue-500
          rounded-full animate-spin"
        />
      </div>
    </Html>
  );
};

export default Loader;
