import ReactDOM from "react-dom/client";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./scene";




const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
<>
 <Canvas 
 camera={{
    fov: 75,
    near: 0.1,
    far: 100,
    position: [2, 2, 10],
 }}
 >
    {/* <group position={0}>
        <mesh position={[-2, 0 ,0 ]} rotation-x={Math.PI * 0.5} >
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
        <mesh position={[4, 0 ,0]} scale={1.5}>
            <torusKnotGeometry />
            <meshNormalMaterial />
        </mesh>
    </group> */}

    <Scene />

 </Canvas>
</> 
 
);