import { useParams } from 'react-router-dom';
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
import cultureData from '../data/culture.json';

function SectionPage({ language }) {
  const { sectionId } = useParams();
  const section = cultureData.sections.find((s) => s.id === sectionId);

  if (!section) {
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4">
          {language === 'ua' ? 'Розділ не знайдено' : 'Section not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Typography variant="h2" gutterBottom>
        {language === 'ua' ? section.title_ua : section.title_en}
      </Typography>
      <Grid container spacing={3}>
        {section.items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardActionArea component={Link} to={`/${sectionId}/${item.id}`}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: 'cover' }}
                  image={`/images/${item.image}`}
                  alt={language === 'ua' ? item.title_ua : item.title_en}
                  onError={(e) =>
                    (e.target.src = 'https://via.placeholder.com/200')
                  }
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div">
                    {language === 'ua' ? item.title_ua : item.title_en}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {language === 'ua'
                      ? item.description_title_ua
                      : item.description_title_en}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SectionPage;
