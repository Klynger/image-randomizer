module.exports = {
  ...require('@kiwi/prettier-config/semi-less'),
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
}
