import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Karizma | Ihr Friseur in Aachen</title>
        <meta
          name="description"
          content="Besuchen Sie den Friseursalon Karizma in Aachen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Erleben Sie professionelles Handwerk. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseur, Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Aachen"
        />
        <link rel="canonical" href="https://friseursalon-karizma.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseursalon Karizma | Premium Friseur & Barber Aachen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Look im Friseursalon Karizma in Aachen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://friseursalon-karizma.de" />
        <meta property="og:image" content="https://friseursalon-karizma.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseursalon Karizma | Premium Friseur Aachen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege im Friseursalon Karizma."
        />
        <meta name="twitter:image" content="https://friseursalon-karizma.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Friseursalon Karizma",
            "image": "https://friseursalon-karizma.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alexanderstraße 69",
              "addressLocality": "Aachen",
              "postalCode": "52062",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7753",
              "longitude": "6.0839"
            },
            "url": "https://friseursalon-karizma.de",
            "telephone": "+49 176 29151040",
            "openingHours": "Di-Fr 09:00-19:00, Sa 09:00-16:00",
            "priceRange": "€€",
            "servesCuisine": "Friseur & Barber Services",
            "sameAs": [
              "https://www.facebook.com/friseursalonkarizma",
              "https://www.instagram.com/friseursalonkarizma"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

