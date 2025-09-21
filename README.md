# ☕ Premium Coffee Website

A beautiful, modern coffee shop landing page built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Stunning Design** - Premium coffee-themed styling with smooth animations
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎬 **Interactive Gallery** - Lightbox photo gallery with smooth transitions
- 🎥 **Video Hero Section** - Beautiful video background with overlay content
- 🔄 **Moving Images** - Animated image carousel with coffee photos
- 🌐 **Arabic Support** - RTL layout and Arabic text support
- ⚡ **Fast Performance** - Built with Vite for optimal loading speed
- 🎭 **Framer Motion** - Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 🛠️ Technologies Used

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router** - Declarative routing for React
- **Lucide React** - Beautiful & consistent icon library

## 📦 Deployment on Vercel

This project is fully optimized for Vercel deployment:

1. **Push to GitHub**: Commit all changes to your repository
2. **Connect to Vercel**: Import your project on [vercel.com](https://vercel.com)
3. **Auto Deploy**: Vercel automatically detects Vite settings and deploys

### Deployment Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- Optimized `vite.config.js` - Build settings for production
- Node.js engine specification in `package.json`

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── HeroSection.jsx         # Hero section with video background
│   ├── InfoSections.jsx        # Feature information sections
│   ├── FeaturesSection.jsx     # Moving images and features
│   ├── GallerySection.jsx      # Interactive photo gallery
│   ├── Navbar.jsx              # Navigation component
│   └── SimpleLoginSection.jsx  # Login/registration section
├── pages/                   # Page components
│   ├── HomePage.jsx            # Main landing page
│   └── RegistrationPage.jsx    # User registration
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  coffee: { /* coffee brown shades */ },
  cream: { /* cream/gold shades */ }
}
```

### Content
- Update component files for text and descriptions
- Replace images in `public/media/` directory
- Modify animations in component files

### Styling
- Global styles in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom CSS classes defined in `index.css`

## 🔧 Build Optimization

- **Code Splitting**: Automatic with Vite
- **Asset Optimization**: Images and assets are optimized
- **Bundle Analysis**: Use `npm run build` to see bundle size
- **Performance**: Lazy loading for images and components

---

**Enjoy your premium coffee experience!** ☕

Made with ❤️ for coffee lovers