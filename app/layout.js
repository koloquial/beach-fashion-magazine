import './styles.css';
import '@/styles/index.css';

export const metadata = {
  title: "BEACH FASHION MAGAZINE",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>BEACH FASHION MAGAZINE</title>
      <meta name="description" content="Official website for Beach Fashion Magazine." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />
<link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
