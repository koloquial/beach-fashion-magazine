import { useState, useEffect } from 'react';

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

const FullPageWebDesign = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fadeIndex, setFadeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    // Section 1
    (
      <section className="section section-1">
        <div className="title-container">
          <h1
            className="title"
            style={{
              backgroundImage: `url(${backgrounds[fadeIndex]})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            BEACH<br />FASHION<br />MAGAZINE
          </h1>
        </div>
        <video className="background-video" autoPlay muted loop>
          <source src="/videos/january_2025_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div style={{ backgroundColor: 'black', position: 'absolute', bottom: '0', textAlign: 'center', width: '100%' }}>
        <h2
            style={{color: 'white', fontSize: '20px'}}
          >
            January MMXXV
          </h2>
        </div>
      </section>
    ),
    // Section 2
    (
      <section className="section section-2">
        <h2>About Us</h2>
        <p>Learn more about what we do and how we can help you.</p>
      </section>
    ),
    // Section 3
    (
      <section className="section section-3">
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information.</p>
      </section>
    )
  ];

  const nextSection = () => {
    setCurrentPage((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const prevSection = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      nextSection();
    } else if (event.key === "ArrowUp") {
      prevSection();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fullpage-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`fullpage ${index === currentPage ? "active" : "hidden"}`}
          style={{ transform: `translateY(${(index - currentPage) * 100}%)` }}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default FullPageWebDesign;
