const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
        fontSize: {
            heading1: ['64px', '77.45px'],
            heading2: ['48px', '58px'],
            heading3: ['40px', '63.61px'],
            heading4: ['36px', 'auto'],
            heading5: ['32px', '50px'],
            heading6: ['20px', '22px'],
            large: ['24px', '38.17px'],
            medium: ['18px', '25.2px'],
            normal: ['16px', '22.4px'],
            small: ['12px', '19.08px'],
        },
        colors: {
            primary: {
                cream: '#F7CCAC',
                coffee: '#C69B7B',
                white: '#FFFFFF',
                black: '#1F2937',
                red: '#EF4444',
                green: '#3CCC18',
                cultured: '#F6F4F2',
            },
            secondary: {
                onyx: '#3A3845',
                mocha: '#826F66',
                white: '#F3F4F6',
                gray1: '#A2A9B4',
                gray2: '#6B7280',
            },
        },
        boxShadow: {
            btnShadow: '4px 4px 10px rgba(130, 111, 102, 0.35)',
        },
    },
    plugins: [],
}
