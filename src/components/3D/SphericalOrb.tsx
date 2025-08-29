import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh, ShaderMaterial, SphereGeometry } from 'three';
import { extend } from '@react-three/fiber';

interface SphericalOrbProps {
  size?: number;
  speed?: number;
}

// Custom shader material for the gradient and light band
const orbVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const orbFragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    // Create gradient from blue to magenta
    vec3 blueColor = vec3(0.2, 0.6, 1.0);  // Electric blue
    vec3 magentaColor = vec3(1.0, 0.2, 0.8); // Magenta
    
    // Gradient based on position
    float gradient = smoothstep(-1.0, 1.0, vPosition.x);
    vec3 baseColor = mix(blueColor, magentaColor, gradient);
    
    // Create the white light band around the equator
    float equator = abs(vPosition.y);
    float bandWidth = 0.3;
    float bandIntensity = smoothstep(bandWidth, 0.0, equator);
    
    // Add some wave/undulation to the band edges
    float wave = sin(vPosition.x * 10.0) * 0.05;
    bandIntensity *= smoothstep(bandWidth + wave, 0.0, equator);
    
    // White light band
    vec3 lightBand = vec3(1.0, 1.0, 1.0) * bandIntensity * 2.0;
    
    // Combine base color with light band
    vec3 finalColor = baseColor + lightBand;
    
    // Add some transparency for the glow effect
    float alpha = 0.9 + bandIntensity * 0.1;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function SphericalOrb({ size = 2, speed = 1 }: SphericalOrbProps) {
  const groupRef = useRef<Group>(null);
  const orbRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 0.5;
      groupRef.current.rotation.x += delta * speed * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main spherical orb */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <shaderMaterial
          vertexShader={orbVertexShader}
          fragmentShader={orbFragmentShader}
          transparent={true}
          side={2} // DoubleSide for better visibility
        />
      </mesh>

      {/* Outer glow effect */}
      <mesh>
        <sphereGeometry args={[size * 1.2, 32, 32]} />
        <meshBasicMaterial
          color="#4f46e5"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Additional ambient glow layers */}
      <mesh>
        <sphereGeometry args={[size * 1.5, 24, 24]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Floating particles around the orb */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * Math.PI * 2 / 8) * size * 2.5,
            Math.sin(i * Math.PI * 2 / 8) * size * 0.5,
            Math.sin(i * Math.PI * 2 / 8) * size * 2.5
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
