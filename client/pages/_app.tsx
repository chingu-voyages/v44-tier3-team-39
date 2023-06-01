import { AppProps } from 'next/app';
import './globals.css';

type MyAppProps = AppProps & {
  Component: React.ComponentType;
};

export default function App({ Component, pageProps }: MyAppProps) {
  return (
    <div className="bg-gray-200">
      <Component {...pageProps} />
    </div>
  );
}
