"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Html, ContactShadows } from "@react-three/drei"
import { useRef } from "react"
import type { Group, Mesh } from "three"
import { Code, Smartphone, Palette, TrendingUp, type LucideIcon } from "lucide-react"

interface ServiceIconProps {
  position: [number, number, number]
  icon: LucideIcon
  title: string
  description: string
  color: string
}

function ServiceIcon({ position, icon: Icon, title, description, color }: ServiceIconProps) {
  const ref = useRef<Group>(null)
  const sphereRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.15
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.5
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh ref={sphereRef} castShadow receiveShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} emissive={color} emissiveIntensity={0.05} />
      </mesh>
      <Html distanceFactor={8} position={[0, 0, 0.6]}>
        <div className="flex flex-col items-center text-center bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl min-w-[140px] border border-gray-200">
          <Icon className="w-7 h-7 mb-2" style={{ color }} />
          <h3 className="font-bold text-sm text-gray-800">{title}</h3>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{description}</p>
        </div>
      </Html>
    </group>
  )
}

function RotatingRing() {
  const ringRef = useRef<Group>(null)
  const innerRingRef = useRef<Group>(null)
  const outerRingRef = useRef<Group>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.4
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -state.clock.elapsedTime * 0.6
      innerRingRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.2
      outerRingRef.current.rotation.x = -state.clock.elapsedTime * 0.1
    }
  })

  return (
    <>
      <group ref={outerRingRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[2.8, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#169fda"
            metalness={0.8}
            roughness={0.2}
            emissive="#169fda"
            emissiveIntensity={0.03}
          />
        </mesh>
      </group>
      <group ref={ringRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[2.2, 0.06, 16, 100]} />
          <meshStandardMaterial
            color="#0d597d"
            metalness={0.7}
            roughness={0.3}
            emissive="#0d597d"
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>
      <group ref={innerRingRef}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.6, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#169fda"
            metalness={0.6}
            roughness={0.4}
            emissive="#169fda"
            emissiveIntensity={0.04}
          />
        </mesh>
      </group>
    </>
  )
}

function FloatingServices() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern websites & web apps",
      color: "#0d597d",
      position: [3.5, 0, 0] as [number, number, number],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Mobile & desktop apps",
      color: "#169fda",
      position: [0, 0, 3.5] as [number, number, number],
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "UI/UX & branding",
      color: "#0d597d",
      position: [-3.5, 0, 0] as [number, number, number],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO & social media",
      color: "#169fda",
      position: [0, 0, -3.5] as [number, number, number],
    },
  ]

  return (
    <group ref={groupRef}>
      {services.map((service, index) => (
        <ServiceIcon
          key={index}
          position={service.position}
          icon={service.icon}
          title={service.title}
          description={service.description}
          color={service.color}
        />
      ))}
    </group>
  )
}

function CenterLogo() {
  const logoRef = useRef<Group>(null)
  const cylinderRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08
    }
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={logoRef}>
      <mesh ref={cylinderRef} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial color="#0d597d" metalness={0.5} roughness={0.4} />
      </mesh>
      <Text position={[0, 0.05, 0.16]} fontSize={0.18} color="white" anchorX="center" anchorY="middle">
        YOUR
      </Text>
      <Text position={[0, -0.1, 0.16]} fontSize={0.12} color="#169fda" anchorX="center" anchorY="middle">
        COMPANY
      </Text>
    </group>
  )
}

function GroundPlane() {
  return (
    <mesh receiveShadow position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#f8fafc" metalness={0.1} roughness={0.9} transparent opacity={0.3} />
    </mesh>
  )
}

export default function ServicesShowcase() {
  return (
    <div className="w-full h-screen relative" style={{ backgroundColor: "#ffffff" }}>
      <Canvas camera={{ position: [6, 4, 8], fov: 50 }} shadows gl={{ antialias: true }}>
        {/* Enhanced Lighting Setup for white background */}
        <ambientLight intensity={0.4} />

        {/* Main directional light with shadows */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* Accent lights with your brand colors */}
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#169fda" castShadow />
        <pointLight position={[-5, 3, -5]} intensity={0.4} color="#0d597d" />
        <spotLight position={[0, 8, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow color="#169fda" />

        {/* Ground plane for shadows */}
        <GroundPlane />

        {/* Contact shadows for better ground contact */}
        <ContactShadows position={[0, -3.9, 0]} opacity={0.2} scale={15} blur={2} far={4} color="#0d597d" />

        <RotatingRing />
        <FloatingServices />
        <CenterLogo />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={20}
          minDistance={4}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="absolute top-8 left-8">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#0d597d" }}>
          Our Services
        </h1>
        <p className="text-xl max-w-md leading-relaxed" style={{ color: "#169fda" }}>
          Comprehensive digital solutions with cutting-edge technology
        </p>
      </div>

      <div className="absolute bottom-8 right-8 text-right">
        <p className="text-sm mb-1" style={{ color: "#0d597d" }}>
          Interactive 3D Experience
        </p>
        <p className="text-xs opacity-60" style={{ color: "#169fda" }}>
          Drag to explore • Scroll to zoom
        </p>
      </div>

      {/* Decorative elements with brand colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-20 right-20 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: "#169fda" }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-1 h-1 rounded-full animate-pulse delay-1000"
          style={{ backgroundColor: "#0d597d" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-1.5 h-1.5 rounded-full animate-pulse delay-500"
          style={{ backgroundColor: "#169fda" }}
        ></div>
      </div>
    </div>
  )
}
