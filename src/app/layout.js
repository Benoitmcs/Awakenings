import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ClientScripts from '@/components/ClientScripts';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Awakenings Mental Health',
  description: 'Mental health services in Boise, Idaho. Medication management, psychiatric care, and compassionate treatment from experienced providers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* AOS CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
      </head>
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <ClientScripts />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H94E9VMQ1Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H94E9VMQ1Z');
          `}
        </Script>

        {/* AOS Library */}
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
        />
        <Script id="aos-init" strategy="afterInteractive">
          {`
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 600,
                once: true,
                disable: function() { return window.matchMedia('(max-width: 600px)').matches; }
              });
              window.addEventListener('load', function() {
                setTimeout(function() { AOS.refreshHard(); }, 1200);
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
