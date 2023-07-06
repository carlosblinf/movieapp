import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Video } from '../../utils/types';
import { useTheme } from '../../theme/ThemeModeContext';
import { transformDate } from '../../utils/parser';

function VideoCard({ video }: { video: Video }) {
  const { theme } = useTheme();

  return (
    <Card sx={{ width: 170, mx: { md: 'auto' } }}>
      <Link to={`/videos/1${video.id}`}>
        <CardMedia
          title={video.title}
          image={`https://www.themoviedb.org/t/p/w220_and_h330_face${video.poster_path}`}
          sx={{ height: 254 }}
        />
      </Link>
      <CardContent sx={{ height: 98 }}>
        <Link to={`/videos/1${video.id}`}>
          <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.primary.main}>
            {video.title.slice(0, 60)}
          </Typography>
          <Typography color={theme.palette.grey[500]}>{transformDate(video.release_date)}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
