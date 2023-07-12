import { PresentationControls, Stage } from '@react-three/drei'
import { MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'
import { PlaneGeometry } from 'three'
import { Transistor } from "./Transistor.jsx"
const Experience = () => {
  return (
    <>
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage intensity={1} contactShadow={false}>
          <mesh rotation={[-0.4, 0.5, 0]} position={[0, 4, -1]}>
            <Transistor />
          </mesh>
        </Stage>
          <mesh rotation={[-Math.PI /2, 0, 0]} position={[-8, -4, 0]}>
            <planeGeometry args={[116, 116]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#010101"
              metalness={0.5}
            />
          </mesh>
      </PresentationControls>
    </>
  )
}

export default Experience
