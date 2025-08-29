import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface AdvancedRotatingObjectProps {
  color?: string;
  speed?: number;
  size?: number;
}

export default function AdvancedRotatingObject({ 
  color = '#f97316', 
  speed = 1, 
  size = 1 
}: AdvancedRotatingObjectProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * speed * 0.3;
      groupRef.current.rotation.y += delta * speed * 0.5;
      groupRef.current.rotation.z += delta * speed * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main layered structure */}
      <group position={[0, 0, 0]}>
        {/* Top layer - solid cube */}
        <mesh position={[0, size * 0.3, 0]}>
          <boxGeometry args={[size * 0.8, size * 0.1, size * 0.8]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.9}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Middle layers with patterns */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[size * 1.2, size * 0.05, size * 1.2]} />
          <meshStandardMaterial 
            color="#d4af37"
            metalness={0.8}
            roughness={0.2}
            emissive="#d4af37"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Base layer with star pattern */}
        <mesh position={[0, -size * 0.3, 0]}>
          <cylinderGeometry args={[size * 0.8, size * 1.2, size * 0.1, 8]} />
          <meshStandardMaterial 
            color="#b8860b"
            metalness={0.9}
            roughness={0.15}
            emissive="#b8860b"
            emissiveIntensity={0.08}
          />
        </mesh>

        {/* Decorative geometric elements */}
        <mesh position={[size * 0.4, 0, size * 0.4]}>
          <octahedronGeometry args={[size * 0.15, 0]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.7}
            roughness={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>

        <mesh position={[-size * 0.4, 0, -size * 0.4]}>
          <octahedronGeometry args={[size * 0.15, 0]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.7}
            roughness={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Floating accent elements */}
        <mesh position={[0, size * 0.6, 0]}>
          <sphereGeometry args={[size * 0.08, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff"
            metalness={0.5}
            roughness={0.4}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Ambient glow effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[size * 2, 32, 32]} />
        <meshBasicMaterial 
          color={color}
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}
