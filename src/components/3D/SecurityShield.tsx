import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, ShaderMaterial } from 'three';
import { extend } from '@react-three/fiber';

interface SecurityShieldProps {
  size?: number;
  speed?: number;
}

// Custom shader for the shield's metallic surface with circuit patterns
const shieldVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const shieldFragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    // Base metallic color (dark steel/titanium)
    vec3 baseColor = vec3(0.1, 0.12, 0.15);
    
    // Circuit pattern
    float circuitX = sin(vUv.x * 50.0) * 0.5 + 0.5;
    float circuitY = sin(vUv.y * 30.0) * 0.5 + 0.5;
    float circuit = (circuitX + circuitY) * 0.5;
    
    // Glowing blue circuit lines
    vec3 circuitColor = vec3(0.2, 0.6, 1.0); // Electric blue
    float circuitIntensity = smoothstep(0.4, 0.6, circuit) * 0.8;
    
    // Add some variation to circuit pattern
    float noise = sin(vUv.x * 100.0) * sin(vUv.y * 80.0) * 0.1;
    circuitIntensity += noise;
    
    // Metallic reflection
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(vNormal, lightDir), 0.0);
    vec3 metallic = baseColor * (0.3 + diffuse * 0.7);
    
    // Combine base color with circuit patterns
    vec3 finalColor = metallic + circuitColor * circuitIntensity;
    
    // Add some transparency for the glow effect
    float alpha = 0.9 + circuitIntensity * 0.1;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function SecurityShield({ size = 2, speed = 1 }: SecurityShieldProps) {
  const groupRef = useRef<Group>(null);
  const shieldRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 0.3;
      groupRef.current.rotation.x += delta * speed * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Shield */}
      <mesh ref={shieldRef}>
        {/* Custom shield geometry - heater shield shape */}
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={24}
            array={new Float32Array([
              // Shield vertices (heater shield shape)
              0, size * 1.2, 0,           // Top center
              -size * 0.8, size * 0.8, 0,  // Top left
              -size * 0.9, size * 0.4, 0,  // Upper left
              -size * 0.95, 0, 0,          // Middle left
              -size * 0.8, -size * 0.4, 0, // Lower left
              -size * 0.6, -size * 0.8, 0, // Bottom left
              0, -size * 1.0, 0,           // Bottom center
              size * 0.6, -size * 0.8, 0,  // Bottom right
              size * 0.8, -size * 0.4, 0,  // Lower right
              size * 0.95, 0, 0,           // Middle right
              size * 0.9, size * 0.4, 0,   // Upper right
              size * 0.8, size * 0.8, 0,   // Top right
            ])}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-uv"
            count={24}
            array={new Float32Array([
              0.5, 1.0, 0.0, 0.8, 0.0, 0.6, 0.0, 0.4, 0.0, 0.2, 0.0, 0.0,
              0.5, 1.0, 1.0, 0.8, 1.0, 0.6, 1.0, 0.4, 1.0, 0.2, 1.0, 0.0,
            ])}
            itemSize={2}
          />
          <bufferAttribute
            attach="attributes-normal"
            count={24}
            array={new Float32Array([
              0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
              0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
            ])}
            itemSize={3}
          />
          <bufferAttribute
            attach="index"
            count={36}
            array={new Uint16Array([
              0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 6, 0, 6, 7,
              0, 7, 8, 0, 8, 9, 0, 9, 10, 0, 10, 11, 0, 11, 1,
            ])}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={shieldVertexShader}
          fragmentShader={shieldFragmentShader}
          transparent={true}
          side={2}
        />
      </mesh>

      {/* Padlock */}
      <group position={[0, size * 0.2, size * 0.1]}>
        {/* Padlock body */}
        <mesh>
          <boxGeometry args={[size * 0.3, size * 0.4, size * 0.2]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.9}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Padlock shackle */}
        <mesh position={[0, size * 0.3, 0]}>
          <torusGeometry args={[size * 0.15, size * 0.05, 8, 16]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.9}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Keyhole */}
        <mesh position={[0, 0, size * 0.11]}>
          <cylinderGeometry args={[size * 0.02, size * 0.02, size * 0.05, 8]} />
          <meshStandardMaterial
            color="#000000"
            metalness={0.5}
            roughness={0.8}
          />
        </mesh>
      </group>

      {/* Glowing circuit nodes */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * Math.PI * 2 / 12) * size * 0.7,
            Math.sin(i * Math.PI * 2 / 12) * size * 0.5,
            size * 0.05
          ]}
        >
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial
            color="#4f46e5"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Ambient glow effect */}
      <mesh>
        <sphereGeometry args={[size * 1.5, 32, 32]} />
        <meshBasicMaterial
          color="#1e40af"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Additional security elements */}
      <mesh position={[0, -size * 0.8, size * 0.05]}>
        <boxGeometry args={[size * 0.1, size * 0.05, size * 0.1]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.7}
          roughness={0.3}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}
