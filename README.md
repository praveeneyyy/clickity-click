# 📸 Clickity Click - Interactive Photo Booth

A modern, interactive photo booth web application with stunning UI, multiple themes, layouts, and filters. Built with React, Vite, and Framer Motion.

![Clickity Click Banner](https://img.shields.io/badge/Clickity%20Click-Photo%20Booth-FF8B94?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 **Beautiful UI/UX**
- **Animated Gradient Background** - Dynamic color-shifting background that smoothly transitions between pastel colors
- **Custom Hello Kitty Cursor** - Adorable themed cursor with hover effects
- **Sparkle Effects** - Magical twinkling particles for ambient atmosphere
- **Glassmorphism Design** - Modern semi-transparent cards with backdrop blur
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### 📷 **Photo Capture**
- **Live Webcam Preview** - Real-time camera feed
- **7 Creative Filters**:
  - 90s Retro
  - 2000s Vibrant
  - Noir (Black & White)
  - Fisheye
  - Rainbow
  - Glitch
  - Crosshatch
- **3-Photo Sequence** - Automatic countdown and capture
- **Instant Preview** - See your photos immediately

### 🎭 **Customization Options**

#### **6 Color Themes**
- Pastel Dreams (Default)
- Sunset Vibes
- Ocean Breeze
- Lavender Fields
- Mint Fresh
- Peachy Keen

#### **7 Photo Strip Layouts**
- Classic Vertical
- Classic Horizontal
- Grid 2×2
- Mini Strip
- Wide Panorama
- Mixed Collage
- Polaroid Style

#### **8 Decorative Frames**
- No Frame
- Classic White
- Polaroid
- Film Strip
- Dashed Fun
- Rounded
- Double Border
- Gradient Glow

### 💾 **Export & Share**
- Download photo strips as high-quality JPG
- Branded with "Clickity Click" watermark
- Date stamped for memories

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/clickity-click.git
cd clickity-click/vite-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🎯 User Flow

1. **Landing Page** - Welcome screen with feature highlights
2. **Instructions** - Learn how to use the photo booth
3. **Theme Selection** - Choose your preferred color theme
4. **Photo Studio** - Capture photos with filters
5. **Layout Selection** - Pick your photo strip arrangement
6. **Frame Selection** - Add decorative frames
7. **Download** - Save and share your creation

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Animations**: Framer Motion 12.23.0
- **Camera Access**: react-webcam 7.2.0
- **Screenshot Export**: html2canvas 1.4.1
- **Styling**: Vanilla CSS with CSS Variables
- **Fonts**: Google Fonts (Poppins, Pacifico)

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── Landing.jsx          # Welcome screen
│   │   ├── Instructions.jsx     # How-to guide
│   │   ├── ThemeSelector.jsx    # Theme picker
│   │   ├── PhotoStudio.jsx      # Camera & capture
│   │   ├── LayoutSelection.jsx  # Layout picker
│   │   ├── FrameSelector.jsx    # Frame picker
│   │   ├── CustomCursor.jsx     # Hello Kitty cursor
│   │   └── Sparkles.jsx         # Particle effects
│   ├── assets/                  # Images & cursors
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Change Color Theme
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-sky-blue: #A8D8EA;
  --color-pastel-pink: #FFB6C1;
  --color-pastel-yellow: #FFF4A3;
  /* ... more colors */
}
```

### Add New Filters
Add filter configurations in `src/components/PhotoStudio.jsx`:
```javascript
const filters = [
  "90s",
  "2000s",
  "Noir",
  // Add your filter name here
];
```

### Modify Layouts
Update layout options in `src/components/LayoutSelection.jsx`

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Requires camera permissions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Hello Kitty cursor design from Sweezy Cursors
- Flower emoji decorations
- Inspired by classic photo booth experiences

---

Made with ❤️ and ✨ sparkles
