/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['26px', '44px'],
        'home-heading-small': ['28px', '34px'], // Sửa lỗi trùng key
        'home-heading-large': ['48px', '56px'], // Đổi tên để tránh trùng
        'default': ['15px', '21px'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))', // Giá trị hợp lệ
      },
    },
  },
  plugins: [],
};
