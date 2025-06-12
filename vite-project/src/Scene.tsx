import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/Addons.js";




extend({ OrbitControls:OrbitControls });


const Scene = () => {
    const cubeRef = useRef();
    const planeRef = useRef();
    const {gl, camera} = useThree(); 
    

    useFrame((state, delta) => {
        // cubeRef.current.rotation.x += 0.01; 
        // planeRef.current.rotation.y += delta; 
        state.camera.position.x = Math.sin(state.clock.elapsedTime);
    });
    

    return (
        <>
        <orbitControls args={[camera, gl.domElement]} />
        {/* <OrbitControls /> */}

        <mesh ref={planeRef} position-x={-1} >
        {/* <torusKnotGeometry />
        <meshNormalMaterial /> */}
        <planeGeometry args={[2,2]}/>
        <meshBasicMaterial color='#267aaa' side={THREE.DoubleSide} />
        </mesh>

        <mesh ref={cubeRef} position-x={3} >
        <boxGeometry />
        <meshBasicMaterial color='#e94560' wireframe={false} />
        </mesh>
        </>
        
);
};

export default Scene; 