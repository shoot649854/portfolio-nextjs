import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PostMeta } from '@/Type';

type Props = {
    data: PostMeta;
  };

const ArticleCard = ({ data }: Props) => {
  const { title } = data;

  return (
    <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
      <CardMedia
        component="img"
        height="140"
        // image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
