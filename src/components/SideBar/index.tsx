import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import StarIcon from '@mui/icons-material/Star';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { setSelectedItem } from '../../store/slices/selectedOptions.slice';

function SideBar() {
  const { selectedItem } = useAppSelector((state: RootState) => state.selectedOptions);
  const dispatch = useAppDispatch();

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        // overflowX: { xs: 'scroll', md: 'unset' },
      }}
      component="nav"
    >
      <ListItemButton selected={selectedItem === 'top_rated'} onClick={() => dispatch(setSelectedItem('top_rated'))}>
        <ListItemIcon>
          <CameraIndoorIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemButton>
      <ListItemButton selected={selectedItem === 'popular'} onClick={() => dispatch(setSelectedItem('popular'))}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Popular" />
      </ListItemButton>
    </List>
  );
}
export default SideBar;
