import { Box, Stack } from '@mui/material';
import SideBar from '../../components/SideBar';
import Content from './components/Content';

function FeedPage() {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, px: 1 }}>
      <Box sx={{ height: { xs: 'auto', md: '92vh' } }}>
        <SideBar />
      </Box>
      <Box sx={{ ml: { xs: 0, md: 2 } }}>
        <Content />
      </Box>
    </Stack>
  );
}

export default FeedPage;
