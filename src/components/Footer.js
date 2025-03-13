import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Ukrainian Culture Showcase. All rights
            reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
