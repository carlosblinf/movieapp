import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';
import NavBar from '../NavBar';
import Spinner from '../Spinner';

function Layout() {
  return (
    <Paper sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </Paper>
  );
}

export default Layout;
