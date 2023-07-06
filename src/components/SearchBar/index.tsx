import { Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '../../theme/ThemeModeContext';

function SearchBar() {
  const { theme } = useTheme();
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ boxShadow: 'none', borderRadius: 20, border: `1px solid ${theme.palette.divider}`, px: 1, display: 'flex' }}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="searchBar"
        style={{ backgroundColor: theme.palette.background.default }}
        onChange={() => {}}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
