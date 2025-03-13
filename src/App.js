import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Home from './components/Home';
import SectionPage from './components/SectionPage';
import ItemPage from './components/ItemPage';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [language, setLanguage] = useState('ua');

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: { main: '#005BBB' }, // Синій UA
      secondary: { main: '#FFD500' }, // Жовтий UA
    },
  });

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    // Додано функцію toggleLanguage
    setLanguage(language === 'ua' ? 'en' : 'ua');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Header
            toggleTheme={toggleTheme}
            themeMode={themeMode}
            toggleLanguage={toggleLanguage}
            language={language}
          />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home language={language} />} />
              <Route
                path="/:sectionId"
                element={<SectionPage language={language} />}
              />
              <Route
                path="/:sectionId/:itemId"
                element={<ItemPage language={language} />}
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
