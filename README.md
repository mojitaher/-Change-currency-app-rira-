# Currency Converter 💱

A **responsive currency converter** built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**.  
Supports **English and Persian** languages with automatic **text direction switching (LTR/RTL)**.

---

## 🌟 Features

- Convert between **Dollar and Rial** dynamically
- Display results formatted with **commas**
- Show **validation warnings** for invalid inputs (zero or empty)
- **Bilingual support**: English & Persian
- Fully **responsive design** for desktop and mobile

---

## 🛠 Technologies

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- React-i18next

---

## 📂 Project Structure

├── app/
│ ├── page.tsx # Main page
│ └── layout.tsx # Root layout with LangProvider
├── context/
│ └── LanguageContext.tsx # Language management
├── i18n.ts # i18next configuration
├── public/locales/ # Translation files
└── components/ # React components (Currency Converter, Language Switcher)

yaml
Copy code

---

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
Run in development mode:

bash
Copy code
npm run dev
# or
yarn dev
Open your browser at http://localhost:3000

🎨 Design
Clean and modern UI using Tailwind CSS

Responsive layout for desktop and mobile

📌 Notes
All text is loaded from JSON translation files

Calculation results are formatted with commas

All components are client components for i18next integration

yaml
Copy code
```
