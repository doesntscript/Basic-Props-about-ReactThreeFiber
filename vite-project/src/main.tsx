import ReactDOM from "react-dom/client";
import "./style.css";
import { Canvas } from "@react-three/fiber";


const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
<>
 <Canvas>
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
    
 </Canvas>
</> 
 
);