import { Box, Stack } from '@mui/material';
import SideBar from '../../components/SideBar';
import Content from './components/Content';

function FeedPage() {
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, px: 1 }}>
      <Box sx={{ height: { xs: 'auto' } }}>
        <SideBar />
      </Box>
      <Box sx={{ height: '85vh', width: '100%', overflowY: 'scroll' }}>
        <Content />
      </Box>
    </Stack>
  );
}

export default FeedPage;
