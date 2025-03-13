import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cultureData from '../data/culture.json';

function Home({ language }) {
  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Typography variant="h2" gutterBottom align="center">
        {language === 'ua'
          ? 'Ласкаво просимо до Ukrainian Culture Showcase!'
          : 'Welcome to Ukrainian Culture Showcase!'}
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        {language === 'ua'
          ? 'Дізнайтесь більше про багатство української культури.'
          : 'Discover the richness of Ukrainian culture.'}
      </Typography>
      <Grid container spacing={3}>
        {cultureData.sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={section.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardActionArea component={Link} to={`/${section.id}`}>
                  <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: 'cover' }}
                    image={`/images/home-preview/${
                      section.previewImage || 'placeholder.jpg'
                    }`}
                    alt={
                      language === 'ua' ? section.title_ua : section.title_en
                    }
                    onError={(e) =>
                      (e.target.src = 'https://via.placeholder.com/140')
                    }
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {language === 'ua' ? section.title_ua : section.title_en}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {language === 'ua'
                        ? `${section.title_ua} України`
                        : `${section.title_en} of Ukraine`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
