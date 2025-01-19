'use client'
import Head from 'next/head';
import './styles.css';
import Magazine from '@/components/Magazine'


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
