import { AppProps } from 'next/app';
import './globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/rootReducer';

import Footer from '../components/Footer';
import Header from '../components/Header';

const store = configureStore({
  reducer: rootReducer,
});

type MyAppProps = AppProps & {
  Component: React.ComponentType;
};

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <Provider store={store}>
    
      <div className="flex flex-col min-h-screen bg-gray-200">
      <Header  />
      <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      
    </Provider>
  );
};

export default App;

