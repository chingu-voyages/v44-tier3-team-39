import { AppProps } from 'next/app';
import './globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

type MyAppProps = AppProps & {
  Component: React.ComponentType;
};

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <Provider store={store}>
      <div className="bg-gray-200">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default App;
