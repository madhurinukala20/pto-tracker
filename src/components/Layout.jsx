import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="main__container">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
