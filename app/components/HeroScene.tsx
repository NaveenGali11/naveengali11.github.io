"use client";

import {Canvas, useFrame} from "@react-three/fiber";
import {Icosahedron, MeshDistortMaterial} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from 'three';

const WarpingShape = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const lightRef = useRef<THREE.PointLight>(null!);

    // This hook runs on every frame to update the object
    useFrame((state) => {
        if (meshRef.current) {
            // Slowly rotate the shape on its own
            meshRef.current.rotation.x += 0.001;
            meshRef.current.rotation.y += 0.002;

            // Make the light follow the mouse
            lightRef.current?.position.lerp(new THREE.Vector3(state.pointer.x * 5, state.pointer.y * 5, 2), 0.1);
        }
    });

    return (
        <>
            <pointLight ref={lightRef} intensity={100} color="#6366f1"/>
            <Icosahedron ref={meshRef} args={[1.8, 4]}>
                <MeshDistortMaterial
                    attach="material"
                    distort={0.5}
                    speed={2}
                    color="#1e293b"
                    roughness={0.1}
                />
            </Icosahedron>
        </>
    );
};

export const HeroScene = () => {
    return (
        <Canvas camera={{position: [0, 0, 8], fov: 50}}>
            <ambientLight intensity={0.2}/>
            <WarpingShape/>
        </Canvas>
    );
};