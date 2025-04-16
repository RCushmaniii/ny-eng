Great call! Here's the updated `README.md` with **PowerShell**-friendly commands and syntax, so it’s smooth for Windows users:

---

```markdown
# NY English Teacher – Website Redesign

Welcome to the codebase for the **NYEnglishTeacher.com** website redesign project. This site is built using the [Astro](https://astro.build) framework with the [Titan theme](https://themes.astro.build/titan). It's designed to be fast, modern, and content-focused.

## 🚀 Project Overview

This is the new version of NYEnglishTeacher.com, redesigned to provide a better user experience, responsive layout, and a clean, professional look. Built with Astro, this project emphasizes performance and simplicity.

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TypeScript](https://www.typescriptlang.org/)
- HTML/CSS
- Markdown (for content)
- Optional: Integrations/plugins via Astro ecosystem

## 📦 Getting Started (Windows / PowerShell)

### 1. Clone the repository

```powershell
git clone https://github.com/your-username/ny-english-teacher.git
Set-Location ny-english-teacher
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Run the development server

```powershell
npm run dev
```

Then open your browser and go to: `http://localhost:4321`

### 4. Build for production

```powershell
npm run build
```

This will generate a `dist/` folder with your production-ready static files.

## 📁 Project Structure

```plaintext
.vscode/             # VSCode workspace settings
public/              # Static assets (images, fonts, etc.)
src/                 # Main source files
  └── pages/         # Page content
  └── components/    # Reusable UI components
  └── layouts/       # Page layouts
astro.config.mjs     # Astro configuration
tsconfig.json        # TypeScript configuration
package.json         # Project metadata and scripts
```

## 📌 Notes

- This project uses the **Titan Astro theme** as the foundation.
- Customize `astro.config.mjs` and `tsconfig.json` as needed.

## 📫 Contact

For questions or collaboration, visit [nyenglishteacher.com](https://nyenglishteacher.com).

---

```

Let me know if you're using Git Bash or WSL too — I can include optional notes for those setups as well!