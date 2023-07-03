import ContextProvider from '@/context/user';
import data from '@/data';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    const getUser = localStorage.getItem('register');
    const ptoData = localStorage.getItem('ptoData');
    if (!getUser) {
      localStorage.setItem('register', JSON.stringify(data));
    }
    if (!ptoData) {
      localStorage.setItem('ptoData', JSON.stringify([]));
    }
  }

  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
