
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#bae6fd',
					'300': '#7dd3fc',
					'400': '#38bdf8',
					'500': '#0ea5e9',
					'600': '#0284c7',
					'700': '#0369a1',
					'800': '#075985',
					'900': '#0c4a6e',
					'950': '#082f49'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					'50': '#fdf4ff',
					'100': '#fae8ff',
					'200': '#f5d0fe',
					'300': '#f0abfc',
					'400': '#e879f9',
					'500': '#d946ef',
					'600': '#c026d3',
					'700': '#a21caf',
					'800': '#86198f',
					'900': '#701a75',
					'950': '#4a044e'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					'50': '#fff7ed',
					'100': '#ffedd5',
					'200': '#fed7aa',
					'300': '#fdba74',
					'400': '#fb923c',
					'500': '#f97316',
					'600': '#ea580c',
					'700': '#c2410c',
					'800': '#9a3412',
					'900': '#7c2d12',
					'950': '#431407'
				},
				neutral: {
					'50': '#fafafa',
					'100': '#f5f5f5',
					'200': '#e5e5e5',
					'300': '#d4d4d4',
					'400': '#a3a3a3',
					'500': '#737373',
					'600': '#525252',
					'700': '#404040',
					'800': '#262626',
					'900': '#171717',
					'950': '#0a0a0a'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
						'background-size': '200% 200%'
					},
					'50%': {
						'background-position': '100% 50%',
						'background-size': '200% 200%'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'gradient-x': 'gradient-x 15s ease infinite',
				'shimmer': 'shimmer 2s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
