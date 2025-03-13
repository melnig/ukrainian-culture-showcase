import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cultureData from '../data/culture.json';

function ItemPage({ language }) {
  const { sectionId, itemId } = useParams();
  const navigate = useNavigate(); // Для навігації назад
  const section = cultureData.sections.find((s) => s.id === sectionId);
  const item = section?.items.find((i) => i.id === itemId);

  if (!section || !item) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4">
          {language === 'ua' ? 'Елемент не знайдено' : 'Item not found'}
        </Typography>
      </Container>
    );
  }

  const handleBack = () => {
    navigate(`/${sectionId}`);
  };

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 2 }}
      >
        {language === 'ua' ? 'Назад' : 'Back'}
      </Button>
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardMedia
          component="img"
          sx={{ height: 300, objectFit: 'cover' }}
          image={`/images/${item.image}`}
          alt={language === 'ua' ? item.title_ua : item.title_en}
          onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
        />
        <CardContent>
          <Typography variant="h3" gutterBottom>
            {language === 'ua' ? item.title_ua : item.title_en}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {language === 'ua' ? item.description_ua : item.description_en}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ItemPage;
