import React from 'react'
import AnimationOfTransistor from './AnimationOfTransistor'
import { PresentationControls, Stage } from '@react-three/drei'

const AnimationBacking = () => {
  return (
    <>
      <PresentationControls speed={1.5} global zoom={0.4} polar={[-0.1, Math.PI / 4]}>
        <Stage intensity={1} contactShadow={false}>
          <mesh position={[0.8, -2, 4]} >
            <AnimationOfTransistor />
          </mesh> 
        </Stage>
      </PresentationControls>
    </>
  )
}

export default AnimationBacking
