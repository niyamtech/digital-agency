import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { cardData } from './Blogs';



export default function Article() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ maxWidth: 700, textAlign: 'left', mb: 2 }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ color: '#242424', textAlign: 'left', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          {cardData[0].title}
        </Typography>
        <Typography
          sx={{ color: '#6B6B6B', textAlign: 'left', fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400 }}
        >
          Stay in the loop with the latest about our products
        </Typography>
      </Box>


      {/* Image, author, and date displayed nicely above the article body */}
      <Box sx={{ width: '100%', mb: 2 }}>
        <CardMedia
          component="img"
          alt={cardData[0].title}
          image={cardData[0].img}
          sx={{
            aspectRatio: '16 / 9',
            borderRadius: 2,
            mb: 2,
            boxShadow: 2,
            maxWidth: '100%',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar src={cardData[0].authors[0].avatar} alt={cardData[0].authors[0].name} sx={{ width: 40, height: 40 }} />
          <Typography variant="subtitle2" color="text.primary">
            {cardData[0].authors[0].name}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
            July 14, 2021
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: '21px', whiteSpace: 'pre-line', lineHeight: 1.7, textAlign: 'left' }}
        >
          {cardData[0].longDescription}
        </Typography>
      </Box>
    </Box>
  );
}
