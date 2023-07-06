import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '../../theme/ThemeModeContext';
import ToggleSwitch from '../ToggleSwitch';
import SearchBar from '../SearchBar';

function NavBar() {
  const { theme } = useTheme();
  return (
    <Stack p={2} direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Link to="/">
          <Typography variant="h5" component="h1" color={theme.palette.text.primary} sx={{ textTransform: 'uppercase' }}>
            MovieApp
          </Typography>
        </Link>
      </Box>
      <Box>
        <SearchBar />
      </Box>
      <Box>
        <ToggleSwitch />
      </Box>
    </Stack>
  );
}

export default NavBar;
