import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import cultureData from '../data/culture.json';

function Header({ toggleTheme, themeMode, toggleLanguage, language }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { to: '/', text_ua: 'Головна', text_en: 'Home' },
    ...cultureData.sections.map((section) => ({
      to: `/${section.id}`,
      text_ua: section.title_ua,
      text_en: section.title_en,
    })),
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          component={Link}
          to="/"
          onClick={closeMenu}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Typography variant="h6" color="#fff">
              🇺🇦 UCS
            </Typography>
          </motion.div>
        </Box>

        {/* Десктопне меню */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.slice(1).map((item) => (
            <Button
              key={item.to}
              color="inherit"
              component={Link}
              to={item.to}
              onClick={closeMenu}
              sx={{ mx: 1 }}
            >
              {language === 'ua' ? item.text_ua : item.text_en}
            </Button>
          ))}
          <Button color="inherit" onClick={toggleTheme} sx={{ mx: 1 }}>
            {themeMode === 'light' ? '🌙' : '☀️'}
          </Button>
          <Button color="inherit" onClick={toggleLanguage} sx={{ mx: 1 }}>
            {language === 'ua' ? 'EN' : 'UA'}
          </Button>
        </Box>

        {/* Бургер-кнопка */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Мобільне меню */}
        <Drawer anchor="right" open={isMenuOpen} onClose={closeMenu}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.to}
                component={Link}
                to={item.to}
                onClick={closeMenu}
              >
                <ListItemText
                  primary={language === 'ua' ? item.text_ua : item.text_en}
                />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
            >
              <ListItemText
                primary={themeMode === 'light' ? '🌙 Dark' : '☀️ Light'}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
            >
              <ListItemText primary={language === 'ua' ? 'EN' : 'UA'} />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
