import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RotatingObjectProps {
  geometry?: 'box' | 'sphere' | 'torus' | 'octahedron';
  color?: string;
  speed?: number;
  size?: number;
}

export default function RotatingObject({ 
  geometry = 'octahedron', 
  color = '#0ea5e9', 
  speed = 1, 
  size = 1 
}: RotatingObjectProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.5;
      meshRef.current.rotation.y += delta * speed;
      meshRef.current.rotation.z += delta * speed * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'sphere':
        return <sphereGeometry args={[size * 0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[size * 0.5, size * 0.2, 16, 100]} />;
      case 'octahedron':
      default:
        return <octahedronGeometry args={[size * 0.5, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}
