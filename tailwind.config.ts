
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
				// Custom colors for Syrian restaurant theme with enhanced Middle Eastern vibes
				'spice': {
					50: '#FDF5EF',
					100: '#FAEAD9',
					200: '#F5D0B3',
					300: '#EFB78D',
					400: '#E99D67',
					500: '#E38341', // Enhanced cinnamon/spice main - more vibrant
					600: '#C96830',
					700: '#A85227',
					800: '#86411F',
					900: '#6D3519',
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
					500: '#FFDC3F', // Saffron main - brighter
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
				'turquoise': {
					50: '#F0FDFA',
					100: '#CCFBF1',
					200: '#99F6E4',
					300: '#5EEAD4',
					400: '#2DD4BF',
					500: '#14B8A6', // Turquoise main (new)
					600: '#0D9488',
					700: '#0F766E',
					800: '#115E59',
					900: '#134E4A',
				},
				'henna': {
					50: '#FFF1F0',
					100: '#FFE2DF',
					200: '#FFC5BF',
					300: '#FFA49E',
					400: '#FF7A71',
					500: '#FF5449', // Henna red (new)
					600: '#ED3C32',
					700: '#C52A22',
					800: '#9E211B',
					900: '#7E1D18',
				},
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
				'arabic': ['Scheherazade New', 'serif'], // Adding Arabic font
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
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiLz48cGF0aCBkPSJNNTAgMjVjMCAxMy44MDctMTEuMTkzIDI1LTI1IDI1UzAgMzguODA3IDAgMjUgMTEuMTkzIDAgMjUgMHMyNSAxMS4xOTMgMjUgMjV6IiBzdHJva2U9IiNCQUE4OEMiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMjVjMCAyLjc2MS0yLjIzOSA1LTUgNXMtNS0yLjIzOS01LTUgMi4yMzktNSA1LTUgNSAyLjIzOSA1IDV6IiBzdHJva2U9IiNCQUE4OEMiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')",
				'pattern-arabic': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNTB2NTBIMHoiLz48cGF0aCBkPSJNMjUgNDNjMS42NTcgMCAzLTEuMzQzIDMtM3MtMS4zNDMtMy0zLTMtMyAxLjM0My0zIDMgMS4zNDMgMyAzIDN6bTAgMmMtMi43NjEgMC01LTIuMjM5LTUtNXMyLjIzOS01IDUtNSA1IDIuMjM5IDUgNS0yLjIzOSA1LTUgNXptMC0yOGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptMCAyYy0yLjc2MSAwLTUtMi4yMzktNS01czIuMjM5LTUgNS01IDUgMi4yMzktNSA1LTIuMjM5IDUtNSA1em0tMSAxMHYtMTJoMnYxMmgtMnptLTkgOGMxLjY1NyAwIDMtMS4zNDMgMy0zcy0xLjM0My0zLTMtMy0zIDEuMzQzLTMgMyAxLjM0MyAzIDMgM3ptMCAyYy0yLjc2MSAwLTUtMi4yMzktNS01czIuMjM5LTUgNS01IDUgMi4yMzktNSA1LTIuMjM5IDUtNSA1em0yMC0yYzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0wIDJjLTIuNzYxIDAtNS0yLjIzOS01LTVzMi4yMzktNSA1LTUgNSAyLjIzOSA1IDUtMi4yMzktNS01IDV6TTggMjR2LTJoMzR2MkgzNHptLTMgMTBsNi02IDYgNkgzbDYtNnoiIGZpbGw9IiNCQUE4OEMiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')",
				'pattern-geometric': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBMMTUgNTJoMzBMMzAgMzB6TTMwIDMwTDE1IDhsMTUgMjJ6TTMwIDMwbDE1LTIyLTE1IDIyek0zMCAzMGwxNSAyMkgxNWwxNS0yMnoiIHN0cm9rZT0iI0JBQTg4QyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
