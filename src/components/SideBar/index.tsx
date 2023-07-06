import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

function SideBar() {
  const [selectedItem, setSelectedItem] = useState<string>('now_playing');
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
      <ListItemButton selected={selectedItem === 'now_playing'} onClick={() => setSelectedItem('now_playing')}>
        <ListItemIcon>
          <CameraIndoorIcon />
        </ListItemIcon>
        <ListItemText primary="Now" />
      </ListItemButton>
      <ListItemButton selected={selectedItem === 'popular'} onClick={() => setSelectedItem('popular')}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Popular" />
      </ListItemButton>
    </List>
  );
}
export default SideBar;
