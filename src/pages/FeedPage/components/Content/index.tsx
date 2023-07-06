import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import Videos from '../../../../components/Videos';
import { useGetVideosQuery } from '../../../../store/services/video';
import { useAppSelector } from '../../../../store/hooks';
import { RootState } from '../../../../store';
import Spinner from '../../../../components/Spinner';

function Content() {
  const { selectedItem } = useAppSelector((state: RootState) => state.selectedOptions);
  const { isLoading, refetch, isFetching } = useGetVideosQuery(selectedItem);

  useEffect(() => {
    if (selectedItem && !isFetching) {
      refetch();
    }
  }, [selectedItem]);

  const { videos } = useAppSelector((state: RootState) => state.videosResult);

  return (
    <Box px={2}>
      <Typography variant="h5" sx={{ ml: { md: 2 }, mb: 4 }}>
        Videos {selectedItem}
      </Typography>
      {isLoading ? <Spinner /> : <Videos videos={videos} />}
    </Box>
  );
}

export default Content;
