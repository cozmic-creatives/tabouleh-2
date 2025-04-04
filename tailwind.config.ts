
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
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
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
				},
				// Custom colors for Syrian restaurant theme
				'spice': {
					50: '#FDF8F3',
					100: '#F9EBE0',
					200: '#F2D5BD',
					300: '#EBBD97',
					400: '#E3A571',
					500: '#D9874B', // Cinnamon/spice main
					600: '#C26A34',
					700: '#A1522A',
					800: '#804123',
					900: '#66341D',
				},
				'olive': {
					50: '#F7F9F3',
					100: '#EFF2E6',
					200: '#D8E0C8',
					300: '#BDCAA6',
					400: '#A3B585',
					500: '#869F63', // Olive main
					600: '#6B8048',
					700: '#536138',
					800: '#3F492A',
					900: '#2F3720',
				},
				'saffron': {
					50: '#FFFDF5',
					100: '#FFFBE6',
					200: '#FFF5BF',
					300: '#FFEE99',
					400: '#FFE670',
					500: '#FFDC3F', // Saffron main
					600: '#F7CA00',
					700: '#C5A100',
					800: '#937A00',
					900: '#766200',
				},
				'clay': {
					50: '#FBFAF8',
					100: '#F6F4F0',
					200: '#EBE6DB',
					300: '#DDD4C5',
					400: '#CCBFA9', // Clay/sand main
					500: '#BAA88C',
					600: '#A89274',
					700: '#8C7A60',
					800: '#70624C',
					900: '#5C503F',
				},
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			backgroundImage: {
				'pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiLz48cGF0aCBkPSJNNTAgMjVjMCAxMy44MDctMTEuMTkzIDI1LTI1IDI1UzAgMzguODA3IDAgMjUgMTEuMTkzIDAgMjUgMHMyNSAxMS4xOTMgMjUgMjV6IiBzdHJva2U9IiNCQUE4OEMiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMjVjMCAyLjc2MS0yLjIzOSA1LTUgNXMtNS0yLjIzOS01LTUgMi4yMzktNSA1LTUgNSAyLjIzOSA1IDV6IiBzdHJva2U9IiNCQUE4OEMiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
