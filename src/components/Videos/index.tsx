import { Grid } from '@mui/material';
import VideoCard from '../VideoCard';
import { Video } from '../../utils/types';

type VideosProps = {
  videos: Video[];
};

function Videos({ videos }: VideosProps) {
  return (
    <Grid alignItems="center" container spacing={2} sx={{ gap: { md: 4 }, justifyContent: 'space-between' }}>
      {videos.map((video) => (
        <Grid item xs={6} md={2} key={video.id} p={0} ml="auto" sx={{}}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;
