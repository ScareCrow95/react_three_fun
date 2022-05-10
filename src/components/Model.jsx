import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cart.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder000.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0.8, 1.55, 1.56]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.08, 1, 0.08]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[-0.82, 1.55, 1.56]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.08, 1, 0.08]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[-1.27, 0.92, -0.17]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.86, 0.11, 0.86]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[1.22, 0.92, -0.17]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.86, 0.11, 0.86]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 0.91, -0.17]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.13, 1.35, 0.13]}
      />
      <mesh
        geometry={nodes.Plane013.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle011.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle015.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle008.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle014.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane010.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle009.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane009.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane004.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle006.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle010.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle013.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle012.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane011.geometry}
        castShadow
        receiveShadow
        material={materials.Material}
        position={[0, 1.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
