# Personal Blog/Portfolio

This project is a personal blog and portfolio website built with [Astro](https://astro.build/), featuring multi-language support, CMS integration, and a collection of interactive components.

## 🚀 Features

- Multi-language support (English, Portuguese)
- Integrated CMS for content management
- Custom post categories and filtering
- Projects showcase
- Dark/light theme support

## 💻 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **CMS**: [Decap CMS](https://decapcms.org/)
- **Styling**: SCSS/Sass
- **Languages**: TypeScript, JavaScript
- **Build Tools**: PostCSS, Autoprefixer, CSSnano
- **UI Components**: Custom Astro components and Web Components (Lit)
- **Content**: Markdown
- **Deployment**: Static site generation

## 📋 Requirements

- Node.js 20 or higher
- npm or yarn

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Timfts/blog.git
cd blog
npm install
```

## 🏃‍♂️ Running Locally

To run the development server with CMS:

```bash
npm start
```

This will:
- Start the Decap CMS server
- Launch Astro's development server with host access

The site should be available at `http://localhost:4321`

## 📦 Building for Production

To build the site for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔧 Project Structure

- `src/` - Main source code
  - `components/` - Reusable Astro components
  - `content/` - Blog posts, projects, and other content
  - `pages/` - Astro pages and routes
  - `templates/` - Page templates
  - `scss/` - Styling
- `public/` - Static assets
- `plugins/` - Custom plugins

## 📝 License

MIT License - See [LICENSE](./LICENSE) for details.

© 2025 Timfts
