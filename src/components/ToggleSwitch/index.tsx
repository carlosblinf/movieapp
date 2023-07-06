import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useTheme } from '../../theme/ThemeModeContext';

function ToggleSwitch() {
  const { theme, colorMode } = useTheme();
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
          label="Dark Mode"
          sx={{ color: theme.palette.text.primary }}
        />
      </FormGroup>
    </div>
  );
}

export default ToggleSwitch;
