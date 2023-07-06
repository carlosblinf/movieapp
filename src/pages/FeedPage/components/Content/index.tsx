import { Box, Typography } from '@mui/material';
import Videos from '../../../../components/Videos';
import { videoNow } from '../../../../utils/VideoData';

function Content() {
  const { results: videos } = videoNow;

  return (
    <Box px={2}>
      <Typography variant="h5" sx={{ ml: { md: 4 }, mb: 2 }}>
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default Content;
