import { GeneralLayout } from '@components/layouts/GeneralLayout';
import './styles/styles.css';
export default function App({ Component, pageProps }) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />;
    </GeneralLayout>
  );
}
