import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://hotelsaregama.in"),

  title: {
    default:
      "Saregama Family Restaurant & Bar | Best Highway Restaurant Near Ghoti Nashik",
    template: "%s | Saregama Restaurant Nashik",
  },

  description:
    "Saregama Family Restaurant & Bar is a top-rated restaurant on Mumbai–Nashik Expressway near Ghoti. Famous for butter chicken, biryani, bar, rooms, and family dining. Open till late night.",

  keywords: [
    "Saregama Restaurant Nashik",
    "Hotel Saregama Ghoti",
    "Best restaurant near Ghoti Nashik",
    "Mumbai Nashik highway restaurant",
    "Family restaurant Nashik highway",
    "Bar near Ghoti Nashik",
    "Biryani in Nashik highway",
    "Butter chicken Nashik",
    "Restaurant with rooms Nashik highway",
    "Late night restaurant Nashik",
    "Food stop Mumbai to Nashik",
    "Best food on Mumbai Nashik Expressway",
    "Highway restaurant with bar Nashik",
    "Restaurants near Igatpuri highway",
  ],

  authors: [{ name: "Saregama Restaurant Team" }],
  creator: "Saregama Restaurant",
  publisher: "Saregama Restaurant",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://hotelsaregama.in",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "Saregama Family Restaurant & Bar | Mumbai–Nashik Highway, Ghoti",
    description:
      "Top-rated highway restaurant near Ghoti Nashik. Premium food, drinks, rooms, and family dining experience.",
    url: "https://hotelsaregama.in",
    siteName: "Saregama Restaurant",
    images: [
      {
        url: "https://hotelsaregama.in/images/hero/saregama-restaurant-highway.jpg",
        width: 1200,
        height: 630,
        alt: "Saregama Restaurant Nashik Highway",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saregama Restaurant Nashik",
    description:
      "Best highway restaurant near Ghoti Nashik. Food, drinks, rooms & family dining.",
    images: [
      "https://hotelsaregama.in/images/hero/saregama-restaurant-highway.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        {/* 🔥 ADVANCED STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Saregama Family Restaurant & Bar",
              image:
                "https://hotelsaregama.in/images/hero/saregama-restaurant-highway.jpg",
              "@id": "https://hotelsaregama.in",
              url: "https://hotelsaregama.in",
              telephone: "+91-9373545169",
              priceRange: "₹₹",
              servesCuisine: [
                "Indian",
                "Chinese",
                "Biryani",
                "Bar Food",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mumbai–Nashik Expressway, Ghoti",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                postalCode: "422402",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.7278837,
                longitude: 73.6320107,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "11:00",
                  closes: "01:30",
                },
              ],
              sameAs: [
                "https://www.instagram.com/hotelsaregama_nsk",
                "https://www.google.com/maps/place/Saregama+Family+Restaurant+and+Bar",
              ],
              hasMap:
                "https://www.google.com/maps/place/Saregama+Family+Restaurant+and+Bar",
            }),
          }}
        />
      </body>
    </html>
  );
}