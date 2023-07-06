import { Box, Typography } from '@mui/material';
import Videos from '../../../../components/Videos';
import { useGetVideosQuery } from '../../../../store/services/video';
import { useAppSelector } from '../../../../store/hooks';
import { RootState } from '../../../../store';
import Spinner from '../../../../components/Spinner';

function Content() {
  const { isLoading } = useGetVideosQuery('now_playing');

  const { videos } = useAppSelector((state: RootState) => state.videosResult);

  return (
    <Box px={2}>
      <Typography variant="h5" sx={{ ml: { md: 2 }, mb: 4 }}>
        Videos
      </Typography>
      {isLoading ? <Spinner /> : <Videos videos={videos} />}
    </Box>
  );
}

export default Content;
