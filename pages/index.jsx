import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import ContentBanner from '../components/homepage/ContentBanner';
import CatalogPreviews from '../components/homepage/CatalogPreviews';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <header className="content-header mb-lg-5">
          <ContentBanner></ContentBanner>
        </header>

        <section className="content-main">
          <CatalogPreviews></CatalogPreviews>

          <HomeNewsletter></HomeNewsletter>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
