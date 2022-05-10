import { useGLTF } from '@react-three/drei'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { useStores } from '../store/rootStore'

export const Model = observer(() => {
  const group = useRef()
  const { uiStore } = useStores()
  const { nodes, materials } = useGLTF(`/${uiStore.selected}.glb`)
  useEffect(() => {
    uiStore.material = materials.Material
  }, [uiStore.selected])
  useEffect(() => {
    materials.Material.color = uiStore.material.color
  }, [uiStore.material])
  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={1}
      />
    </group>
  )
})
