import { Box, Typography } from '@mui/material';
import Videos from '../../components/Videos';
import { useGetVideosQuery } from '../../store/services/video';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import Spinner from '../../components/Spinner';

function SearchPage() {
  const { isLoading } = useGetVideosQuery('now_playing');

  const { videos } = useAppSelector((state: RootState) => state.videosResult);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box mx={2}>
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
        Videos Finded
      </Typography>
      {/* {isLoading ? <Spinner /> : <Videos videos={videos} />} */}
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchPage;
