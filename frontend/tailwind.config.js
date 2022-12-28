/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    fontFamily: {
      
      'barlow': ['Barlow', 'sans-serif']
    },
    extend: {
      colors: {
        'prim1': '#3AAFA9',
        'prim2': '#2B7A78',
        'prim3': '#17252A',
        'prim4': '#DEF2F1',
        'prim5': '#FEFFFF',
      },

      backgroundImage: {
        'img1': "url('https://images.pexels.com/photos/10923070/pexels-photo-10923070.jpeg')",
        'img2': "url('https://images.unsplash.com/photo-1597274505794-5033ff555933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')",
        'img3': "url('https://images.pexels.com/photos/10923069/pexels-photo-10923069.jpeg')",
        'img4': "url('https://images.pexels.com/photos/10923062/pexels-photo-10923062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'img5': "url('https://images.pexels.com/photos/7271269/pexels-photo-7271269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
   
  },
  plugins: [],
}
