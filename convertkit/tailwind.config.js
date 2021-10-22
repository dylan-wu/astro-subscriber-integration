module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
              DEFAULT: '#0FDD61'
            },
            secondary: {
              DEFAULT: '#FFFFFF'
            },
            tertiary: {
              DEFAULT: '#2DF07B'
            }
          }
        }
      },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};