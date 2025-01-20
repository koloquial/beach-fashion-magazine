'use client'
import Head from 'next/head';
import './styles.css';
import Magazine from '@/components/Magazine'

const backgrounds = [
  '/backgrounds/bg1.webp',
  '/backgrounds/bg2.webp',
  '/backgrounds/bg3.webp',
  '/backgrounds/bg4.webp',
  '/backgrounds/bg5.webp',
  '/backgrounds/bg6.webp',
  '/backgrounds/bg7.webp',
  '/backgrounds/bg8.webp',
  '/backgrounds/bg9.webp',
  '/backgrounds/bg10.webp',
  '/backgrounds/bg11.webp',
  '/backgrounds/bg12.webp',
  '/backgrounds/bg13.webp',
  '/backgrounds/bg14.webp',
];

export default function Home() {


  return (
    <>
      <Head>
        <title>Beach Fashion Magazine</title>
        <meta name="description" content="Official website for Beach Fashion Magazine." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="page-container">
        <Magazine />
      </div>
    </>
  );
}
