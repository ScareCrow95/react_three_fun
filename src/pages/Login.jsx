import { Button, Circle, Flex, IconButton } from '@chakra-ui/react'
import { Canvas, useLoader } from '@react-three/fiber'
import { observer } from 'mobx-react-lite'
import {
  Cylinder,
  Float,
  OrbitControls,
  PerspectiveCamera,
  softShadows,
  SpotLight,
} from '@react-three/drei'
import { Suspense, useState } from 'react'
import { Model } from '../components/Model'
import { MdOutlineRotate90DegreesCcw } from 'react-icons/md'
import { CgDarkMode } from 'react-icons/cg'
import { BiColorFill } from 'react-icons/bi'
import { GiDungeonLight } from 'react-icons/gi'
import { SwatchesPicker } from 'react-color'
import { useStores } from '../store/rootStore'

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 16,
  rings: 11, // Rings (default: 11) must be a int
})

const Login = observer(() => {
  const { uiStore } = useStores()
  const [autoRotate, setAutoRotate] = useState(false)
  const [dark, setDark] = useState(false)
  const [color, setColor] = useState(false)
  const [spot, setSpot] = useState(false)
  return (
    <Flex w='100vw' h='100vh' justify='center' bg={dark ? '#222' : '#dadada'}>
      <Canvas shadows>
        <ambientLight intensity={0.05} />
        <PerspectiveCamera makeDefault position={[0, 8, 10]} />
        <directionalLight
          castShadow
          position={[5, 5, -5]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight intensity={0.35} position={[-4, 4, -8]} color='#DFC4B0' />
        {spot && (
          <SpotLight
            distance={8.2}
            angle={0.35}
            attenuation={6.9}
            anglePower={7} // Diffuse-cone anglePower (default: 5)
            position={[4, 8, 0]}
          />
        )}
        <pointLight intensity={0.7} position={[4, 8, 3]} color='#74a1c4' />
        <Cylinder position={[0, 0, 0]} args={[100, 100, 0.1, 64]} receiveShadow>
          <meshStandardMaterial color={dark ? '#444' : '#bbb'} />
        </Cylinder>
        <fog attach='fog' color={dark ? '#666' : '#eee'} near={1} far={35} />
        <Suspense>
          <Float
            speed={uiStore.models[uiStore.selected].float ? 4 : 0} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={3} // Up/down float intensity, defaults to 1
          >
            <Model />
          </Float>
        </Suspense>
        <OrbitControls
          autoRotate={autoRotate}
          minPolarAngle={0}
          maxPolarAngle={1.47079}
          maxDistance={13}
        />
      </Canvas>
      <Flex position='absolute' bottom='0px' mb={28}>
        {Object.keys(uiStore.models).map((id) => {
          return (
            <Circle
              boxSize={4}
              borderWidth='2px'
              borderColor='grey.100'
              bg={uiStore.selected === id ? 'grey.100' : 'transparent'}
              cursor='pointer'
              onClick={() => {
                uiStore.selected = id
              }}
              key={id}
              mr={3}
            />
          )
        })}
      </Flex>

      <Flex position='absolute' bottom='0px' mb={12}>
        <IconButton
          icon={<MdOutlineRotate90DegreesCcw />}
          mr={2}
          size='lg'
          bg={autoRotate ? 'grey.300' : 'secondary.100'}
          color={autoRotate ? 'secondary.100' : 'grey.300'}
          onClick={() => setAutoRotate(!autoRotate)}
        />
        <IconButton
          icon={<CgDarkMode />}
          size='lg'
          bg={dark ? 'grey.300' : 'secondary.100'}
          color={dark ? 'secondary.100' : 'grey.300'}
          mr={2}
          onClick={() => setDark(!dark)}
        />
        <IconButton
          icon={<BiColorFill />}
          size='lg'
          mr={2}
          onClick={() => setColor(!color)}
        />
        <IconButton
          icon={<GiDungeonLight />}
          size='lg'
          bg={spot ? 'grey.300' : 'secondary.100'}
          color={spot ? 'secondary.100' : 'grey.300'}
          mr={2}
          onClick={() => setSpot(!spot)}
        />
        {color && (
          <Flex position='relative'>
            <Flex position='absolute' mt='-247px' ml='-48px'>
              <SwatchesPicker
                onChange={(color) => {
                  uiStore.material.color.r = color.rgb.r / 255
                  uiStore.material.color.g = color.rgb.g / 255
                  uiStore.material.color.b = color.rgb.b / 255
                  setColor(false)
                }}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
})

export default Login
