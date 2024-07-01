import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeModeContext';
import ToggleSwitch from '../ToggleSwitch';
import SearchBar from '../SearchBar';

function NavBar() {
  const { theme } = useTheme();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: { xs: 1, md: 2 }, px: { xs: 2, md: 3 } }}
    >
      <Grid item xs={12} md={3}>
        <Link to="/">
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color={theme.palette.text.primary}
            sx={{ textTransform: 'uppercase' }}
          >
            MovieApp
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={6}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} md={3}>
        <ToggleSwitch />
      </Grid>
    </Grid>
  );
}

export default NavBar;
