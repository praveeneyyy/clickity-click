import { useState } from 'react';
import Landing from './components/Landing';
import Instructions from './components/Instructions';
import ThemeSelector from './components/ThemeSelector';
import PhotoStudio from './components/PhotoStudio';
import LayoutSelection from './components/LayoutSelection';
import FrameSelector from './components/FrameSelector';
import CustomCursor from './components/CustomCursor';
import Sparkles from './components/Sparkles';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleStart = () => {
    setCurrentScreen('instructions');
  };

  const handleContinue = () => {
    setCurrentScreen('theme');
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setCurrentScreen('studio');
  };

  const handlePhotosComplete = (photos) => {
    setCapturedPhotos(photos);
    setCurrentScreen('layout');
  };

  const handleLayoutSelect = (layout) => {
    setSelectedLayout(layout);
    setCurrentScreen('frame');
  };

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame);
    // Here you would typically show a final preview/download screen
    // For now, we'll go back to studio
    setCurrentScreen('studio');
  };

  return (
    <div className="app">
      <CustomCursor />
      <Sparkles />
      {currentScreen === 'landing' && <Landing onStart={handleStart} />}
      {currentScreen === 'instructions' && <Instructions onContinue={handleContinue} />}
      {currentScreen === 'theme' && <ThemeSelector onThemeSelect={handleThemeSelect} />}
      {currentScreen === 'studio' && <PhotoStudio onPhotosComplete={handlePhotosComplete} />}
      {currentScreen === 'layout' && (
        <LayoutSelection
          photos={capturedPhotos}
          onLayoutSelect={handleLayoutSelect}
        />
      )}
      {currentScreen === 'frame' && (
        <FrameSelector
          photos={capturedPhotos}
          selectedLayout={selectedLayout}
          onFrameSelect={handleFrameSelect}
        />
      )}
    </div>
  );
}

export default App;
