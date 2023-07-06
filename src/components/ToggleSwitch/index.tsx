import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { useTheme } from '../../theme/ThemeModeContext';

function ToggleSwitch() {
  const { theme, colorMode } = useTheme();

  // eslint-disable-next-line react/no-unstable-nested-components
  function ModeIcon() {
    return (
      <Box display="flex" justifyContent="center">
        {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
      </Box>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={theme.palette.mode === 'dark'} onChange={() => colorMode.toggleColorMode()} />}
          label={ModeIcon()}
          sx={{ color: theme.palette.text.primary, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
        />
      </FormGroup>
    </div>
  );
}

export default ToggleSwitch;
