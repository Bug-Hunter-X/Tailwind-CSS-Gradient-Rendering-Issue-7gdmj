```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-gradient'), //Ensure this is present
  ],
};

<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Content -->
</div>
```