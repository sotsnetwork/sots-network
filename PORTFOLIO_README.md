# 3D Portfolio Website

A modern, responsive 3D portfolio website built with React, Three.js, and Tailwind CSS. Features smooth animations, 3D rotating objects, and a clean design system.

## 🚀 Features

- **3D Hero Section**: Interactive 3D rotating objects using Three.js
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Interactive Elements**: Hover effects, 3D depth, and smooth transitions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Grid layout with category filtering
- **Dark/Light Mode**: Built-in theme support

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **UI Components**: Custom components with shadcn/ui styling

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/
│   │   └── RotatingObject.tsx      # 3D rotating geometry
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section with 3D object
│   │   ├── About.tsx               # About me section
│   │   ├── Projects.tsx            # Projects showcase
│   │   └── Contact.tsx             # Contact form and info
│   ├── Navigation.tsx              # Navigation component
│   └── Footer.tsx                  # Footer component
├── pages/
│   └── Portfolio.tsx               # Main portfolio page
├── design.json                     # Design system configuration
└── App.tsx                         # Main app with routing
```

## 🎨 Customization

### 1. Personal Information

Edit `src/pages/Portfolio.tsx` to update your personal information:

```typescript
const portfolioData = {
  name: "Your Name",
  tagline: "Your Professional Tagline",
  subtitle: "Your brief description",
  
  about: {
    bio: "Your bio text...",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    experience: "Your experience description"
  },
  
  projects: [
    {
      id: "1",
      title: "Project Title",
      description: "Project description...",
      technologies: ["Tech 1", "Tech 2"],
      category: "category-name",
      liveUrl: "https://your-project.com",
      githubUrl: "https://github.com/your-repo"
    }
    // Add more projects...
  ],
  
  contact: {
    email: "your@email.com",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: "🐙" // You can use emojis or custom icons
      }
      // Add more social links...
    ]
  }
};
```

### 2. 3D Objects

Customize the 3D rotating object in the Hero section by editing `src/components/3D/RotatingObject.tsx`:

```typescript
<RotatingObject 
  geometry="octahedron"    // Options: 'box', 'sphere', 'torus', 'octahedron'
  color="#0ea5e9"          // Custom color
  speed={1.5}              // Rotation speed
  size={2}                 // Object size
/>
```

### 3. Colors and Styling

The design system is defined in `design.json` and integrated with Tailwind CSS. You can:

- Update colors in the design.json file
- Modify Tailwind classes in components
- Add custom CSS in `src/index.css`

### 4. Adding New Sections

To add new sections:

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Portfolio.tsx`
3. Update the navigation sections array

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:8080/portfolio`

### Building for Production

```bash
npm run build
```

## 🎯 Key Components

### Hero Section
- Large, bold name display with gradient text
- Professional tagline and subtitle
- Interactive 3D rotating object
- Call-to-action buttons

### About Section
- Professional photo/avatar (or placeholder)
- Expandable bio text
- Skills and experience display
- Download resume button

### Projects Section
- Grid layout with hover animations
- Category filtering
- Technology tags
- Live demo and GitHub links
- 3D depth effects on hover

### Contact Section
- Contact form with validation
- Email and social media links
- Professional contact information
- Quick response guarantee

## 🔧 Advanced Customization

### Adding Custom 3D Models

1. Import your 3D model (GLTF/GLB format)
2. Use `useGLTF` from `@react-three/drei`
3. Replace the `RotatingObject` component

### Custom Animations

- Modify Framer Motion animations in components
- Add custom keyframes in `tailwind.config.ts`
- Create custom CSS animations

### Performance Optimization

- Lazy load 3D components
- Optimize images and assets
- Use React.memo for expensive components

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized 3D rendering for mobile

## 🌙 Theme Support

Built-in dark/light mode support through the existing ThemeProvider. The design automatically adapts to theme changes.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Set base path
3. Build and deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- React Three Fiber for React integration

## 📞 Support

If you need help customizing your portfolio:
1. Check the code comments
2. Review the design.json file
3. Modify the sample data in Portfolio.tsx
4. Customize the styling with Tailwind classes

---

**Happy coding! 🎉**
