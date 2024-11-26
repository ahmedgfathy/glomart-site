/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			spacing: {
				50: "12.5rem", // Add this if `px-50` isn't predefined
			},
			grayscale: {
				50: '50%',
				75: '75%',
			},
			colors: {
				"text-color": "#1e4164",
				cardbgDark: '#1c252e',
				Lightbg: '#fff',
				lightBlue: "rgb(228, 235, 242)",
				borderSearchInputLight: '#F6F7F8',
				borderSearchInputDark: '#28333c',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				dark_link_active: '#5f942e14',
				text_link_active: '#5be49b',
				text_link_active_l: '#5f942e',
				black: {
					'100': '#000000',
					'200': '#000000',
					'300': '#000000',
					'400': '#000000',
					'500': '#000000',
					'600': '#333333',
					'700': '#666666',
					'800': '#999999',
					'900': '#cccccc',
					DEFAULT: '#000000'
				},
				midnight_green: {
					'100': '#000f10',
					'200': '#001e21',
					'300': '#002e31',
					'400': '#003d41',
					'500': '#004b50',
					'600': '#009ca7',
					'700': '#00ecfd',
					'800': '#54f4ff',
					'900': '#a9f9ff',
					DEFAULT: '#004b50'
				},
				tea_green: {
					'100': '#08521d',
					'200': '#0fa439',
					'300': '#23eb5b',
					'400': '#75f298',
					'500': '#c8fad6',
					'600': '#d2fbde',
					'700': '#ddfce6',
					'800': '#e9fdee',
					'900': '#f4fef7',
					DEFAULT: '#c8fad6'
				},
				celeste: {
					'100': '#03584b',
					'200': '#06af96',
					'300': '#1af7d6',
					'400': '#71fae5',
					'500': '#cafdf5',
					'600': '#d4fdf7',
					'700': '#dffef9',
					'800': '#e9fefb',
					'900': '#f4fffd',
					DEFAULT: '#cafdf5'
				},
				'anti-flash_white': {
					'100': '#293137',
					'200': '#51636e',
					'300': '#7f93a0',
					'400': '#b6c2c9',
					'500': '#eceff1',
					'600': '#f1f3f5',
					'700': '#f4f6f7',
					'800': '#f8f9fa',
					'900': '#fbfcfc',
					DEFAULT: '#eceff1'
				},
				blue: {
					'100': '#000030',
					'200': '#000060',
					'300': '#000090',
					'400': '#0000c0',
					'500': '#0000ee',
					'600': '#2727ff',
					'700': '#5d5dff',
					'800': '#9393ff',
					'900': '#c9c9ff',
					DEFAULT: '#0000ee'
				},
				pine_green: {
					'100': '#001815',
					'200': '#00312a',
					'300': '#004940',
					'400': '#006255',
					'500': '#007867',
					'600': '#00c8ad',
					'700': '#16ffe0',
					'800': '#64ffea',
					'900': '#b1fff5',
					DEFAULT: '#007867'
				},
				aero: {
					'100': '#00252c',
					'200': '#004b58',
					'300': '#007084',
					'400': '#0095af',
					'500': '#00b8d9',
					'600': '#16dcff',
					'700': '#51e5ff',
					'800': '#8beeff',
					'900': '#c5f6ff',
					DEFAULT: '#00b8d9'
				},
				yale_blue: {
					'100': '#000b14',
					'200': '#001629',
					'300': '#00213d',
					'400': '#002c52',
					'500': '#003768',
					'600': '#0062b8',
					'700': '#0a8dff',
					'800': '#5cb3ff',
					'900': '#add9ff',
					DEFAULT: '#003768'
				},
				white: {
					'100': '#333333',
					'200': '#666666',
					'300': '#999999',
					'400': '#cccccc',
					'500': '#ffffff',
					'600': '#ffffff',
					'700': '#ffffff',
					'800': '#ffffff',
					'900': '#ffffff',
					DEFAULT: '#ffffff'
				},
				gunmetal: {
					'100': '#060809',
					'200': '#0c0f13',
					'300': '#11171c',
					'400': '#171f26',
					'500': '#1c252e',
					'600': '#3e5265',
					'700': '#5f7d9b',
					'800': '#93a8bd',
					'900': '#c9d4de',
					DEFAULT: '#1c252e'
				},
				avocado: {
					'100': '#131e09',
					'200': '#263b12',
					'300': '#39591b',
					'400': '#4c7724',
					'500': '#5f942e',
					'600': '#7ec43d',
					'700': '#9ed26e',
					'800': '#bfe19e',
					'900': '#dff0cf',
					DEFAULT: '#5f942e'
				},
				payne_gray: {
					'100': '#14171a',
					'200': '#282e34',
					'300': '#3c454e',
					'400': '#505d68',
					'500': '#637381',
					'600': '#80909d',
					'700': '#a0acb6',
					'800': '#c0c7ce',
					'900': '#dfe3e7',
					DEFAULT: '#637381'
				},
				light_green: {
					'100': '#09371f',
					'200': '#126f3d',
					'300': '#1ba65c',
					'400': '#25dc7a',
					'500': '#5be49b',
					'600': '#7deab0',
					'700': '#9eefc4',
					'800': '#bef4d7',
					'900': '#dffaeb',
					DEFAULT: '#5be49b'
				},
				dark_pastel_green: {
					'100': '#072713',
					'200': '#0d4e25',
					'300': '#147638',
					'400': '#1b9d4a',
					'500': '#22c55e',
					'600': '#3fde7a',
					'700': '#6fe79b',
					'800': '#9fefbc',
					'900': '#cff7de',
					DEFAULT: '#22c55e'
				},
				onyx: {
					'100': '#0b0c0d',
					'200': '#161819',
					'300': '#212426',
					'400': '#2c3132',
					'500': '#373d3f',
					'600': '#5b6569',
					'700': '#818d91',
					'800': '#abb3b6',
					'900': '#d5d9da',
					DEFAULT: '#373d3f'
				},
				tomato: {
					'100': '#3c0b00',
					'200': '#781600',
					'300': '#b52100',
					'400': '#f12c00',
					'500': '#ff5630',
					'600': '#ff7658',
					'700': '#ff9982',
					'800': '#ffbbab',
					'900': '#ffddd5',
					DEFAULT: '#ff5630'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				dark: '#222831',
				dark2: '#393E46',
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
				screens: {
					'1400': '1400px'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
