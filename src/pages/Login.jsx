import { Button, Flex } from '@chakra-ui/react'
import { Canvas, useLoader } from '@react-three/fiber'
import { observer } from 'mobx-react-lite'
import {
  ContactShadows,
  Cylinder,
  OrbitControls,
  PerspectiveCamera,
  softShadows,
} from '@react-three/drei'
import { Suspense, useMemo, useState } from 'react'
import Model from '../components/Model'
softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 64,
  rings: 11, // Rings (default: 11) must be a int
})

const Login = observer(() => {
  const [autoRotate, setAutoRotate] = useState(false)
  return (
    <Flex w='100vw' h='100vh' justify='center' bg='#DADADA'>
      <Canvas shadows>
        <ambientLight intensity={0.1} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight intensity={0.25} position={[-4, -5, -8]} color='#DFC4B0' />
        <pointLight intensity={0.4} position={[4, 8, 3]} color='#74a1c4' />
        <Cylinder position={[0, 0, 0]} args={[100, 100, 0.1, 64]} receiveShadow>
          <meshStandardMaterial color='#bbb' />
        </Cylinder>
        <fog attach='fog' color='#eee' near={1} far={25} />
        <Suspense>
          <Model />
        </Suspense>
        <OrbitControls autoRotate={autoRotate} />
      </Canvas>
      <Flex position='absolute' bottom='0px' mb={12}>
        <Button
          bg={autoRotate ? 'secondary.300' : 'border.100'}
          _hover={{ bg: 'secondary.200' }}
          onClick={() => setAutoRotate(!autoRotate)}>
          Turntable {autoRotate ? 'On' : 'Off'}
        </Button>
      </Flex>
    </Flex>
  )
})

export default Login
