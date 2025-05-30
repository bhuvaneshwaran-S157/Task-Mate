// /** @type {import('postcss').Config} */
// export default {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// }
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // 👈 updated plugin usage
    require('autoprefixer'),
  ],
}
