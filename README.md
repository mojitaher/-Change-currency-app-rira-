# 💱 Currency Converter

A **responsive currency converter** built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**.  
Supports **English and Persian**, with automatic **LTR/RTL** switching.

---

## Features

- Convert between **Dollar and Rial** dynamically
- Display results with **comma formatting**
- Show validation warnings for invalid inputs
- **Bilingual support** (English & Persian)
- Fully **responsive** for mobile & desktop

---

## Technologies

Next.js 13 | React | TypeScript | Tailwind CSS | React-i18next

---

## Quick Start

```bash
npm install
npm run dev
# or
yarn install
yarn dev
Open http://localhost:3000 in your browser.

Project Structure
bash
Copy code
app/           # Main pages & layout
context/       # Language management
components/    # Currency converter & language switcher
i18n.ts        # Translation configuration
public/locales/ # JSON translation files
Notes
All text comes from JSON translation files

Results are formatted with commas

All components are client components for proper i18next integration

yaml
Copy code
```
