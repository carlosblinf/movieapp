import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return <h1>Hello World</h1>;
}

function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default WrappedApp;
