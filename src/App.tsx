import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { store } from './store';

import routes from './routes';
import { ThemeContextProvider } from './theme/ThemeModeContext';

function App() {
  return <RouterProvider router={routes} />;
}

function WrappedApp() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CssBaseline />
        <App />
      </ThemeContextProvider>
    </Provider>
  );
}

export default WrappedApp;
