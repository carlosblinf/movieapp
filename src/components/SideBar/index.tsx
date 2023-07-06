import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

function SideBar() {
  const [selectedItem, setSelectedItem] = useState(1);
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
      <ListItemButton selected={selectedItem === 1} onClick={() => setSelectedItem(1)}>
        <ListItemIcon>
          <CameraIndoorIcon />
        </ListItemIcon>
        <ListItemText primary="All" />
      </ListItemButton>
      <ListItemButton selected={selectedItem === 2} onClick={() => setSelectedItem(2)}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Popular" />
      </ListItemButton>
    </List>
  );
}
export default SideBar;
