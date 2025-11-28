import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import graphicsList from "../data/graphicsList.json";

// ============================================
// 🌐 WEBSITE DESIGNS DATA
// ============================================
const websiteDesigns = [
  {
    url: "https://www.rishikayoga.com/",
    title: "Rishika Yoga",
  },
  {
    url: "https://blazonion.wixsite.com/ayapapaya",
    title: "Ayapapaya",
  },
  {
    url: "https://blazonion.wixsite.com/my-site-7",
    title: "Momoz",
  },
  {
    url: "https://amisha1602.wixsite.com/mysite-10",
    title: "Rhuhee by Amisha",
  },
  {
    url: "https://www.suco.in/",
    title: "Suco",
  },
  {
    url: "https://vishupsalian.wixsite.com/lifemuses",
    title: "Life Muses",
  },
  {
    url: "https://blazonion.wixsite.com/selective-pro-in",
    title: "Selective Pro - In",
  },
  {
    url: "https://kashayn2001.wixsite.com/hattells",
    title: "Hattells",
  },
  {
    url: "https://kashayn2001.wixsite.com/kerala-cafe",
    title: "Kerala Cafe",
  },
  {
    url: "https://kashayn2001.wixsite.com/99-productions",
    title: "99 Productions",
  },
  {
    url: "https://kashayn2001.wixstudio.com/studioninenine",
    title: "Studio Nine Nine",
  },
  {
    url: "https://siddhantjk.wixsite.com/petrix",
    title: "Petrix",
  },
  {
    url: "https://blazonion.wixsite.com/goodtime",
    title: "Good Time Caterers",
  },
  {
    url: "https://kashayn2001.wixsite.com/trikuta-oils-jammu/home",
    title: "Trikuta Oils Jammu",
  },
  {
    url: "https://blazonion.wixsite.com/goodtme",
    title: "Good Time Caterers",
  },
  {
    url: "https://blazonion.wixsite.com/goodtimecaterers",
    title: "Good Time Caterers",
  },
  {
    url: "https://blazonion.wixsite.com/my-site-8",
    title: "Momoz",
  },
  {
    url: "https://blazonion.wixsite.com/goodtime-c1",
    title: "Good Time Caterers",
  },
  {
    url: "https://blazonion.wixsite.com/safe2greet",
    title: "Safe2Greet",
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [shuffledGraphics, setShuffledGraphics] = useState([]);

  // Shuffle graphics on mount
  useEffect(() => {
    const shuffled = [...graphicsList].sort(() => Math.random() - 0.5);
    setShuffledGraphics(shuffled);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header />
      <main>
        {/* Full width container for portfolio */}
        <div style={{ width: '100%', maxWidth: '100vw', padding: 0 }}>
          {/* Hero Section - Keep normal width */}
          <div className="container">
            <section className="hero">
              <h1>Portfolio</h1>
              <p>Showcasing my creative design work in UI/UX, graphics, and web design</p>

              {/* Navigation Buttons */}
              <div style={{ 
                display: 'flex', 
                gap: 'var(--space-md)', 
                justifyContent: 'center',
                marginTop: 'var(--space-xl)',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={() => scrollToSection("graphic-designs")}
                  className={`btn ${activeSection === "graphic-designs" ? "btn-primary" : "btn-secondary"}`}
                >
                  Graphic Designs
                </button>
                <button
                  onClick={() => scrollToSection("website-designs")}
                  className={`btn ${activeSection === "website-designs" ? "btn-primary" : "btn-secondary"}`}
                >
                  Website Designs
                </button>
              </div>
            </section>
          </div>

          {/* Graphic Designs Section - Full Width Tight Masonry */}
          <section id="graphic-designs" style={{ 
            padding: 'var(--space-2xl) var(--space-md)',
            background: 'rgba(0,0,0,0.2)'
          }}>
            <div className="container">
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>🎨 Graphic Designs</h2>
            </div>
            
            {shuffledGraphics.length === 0 ? (
              <div className="container">
                <div style={{
                  textAlign: "center",
                  padding: "var(--space-2xl)",
                  background: "var(--surface-bg)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-default)"
                }}>
                  <p style={{ color: "var(--text-muted)" }}>
                    No images found. Add images to <code>public/portfolio/graphics/</code> and run <code>npm run scan-portfolio</code>
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ 
                maxWidth: '1600px',
                margin: '0 auto',
                padding: '0 var(--space-md)',
                columnCount: 'auto',
                columnWidth: '250px',
                columnGap: 'var(--space-sm)',
              }}>
                {shuffledGraphics.map((imagePath, index) => (
                  <div
                    key={index}
                    style={{
                      breakInside: 'avoid',
                      marginBottom: 'var(--space-sm)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: '1px solid transparent',
                    }}
                    onClick={() => openLightbox(imagePath)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(88, 166, 255, 0.4)';
                      e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{
                      width: '100%',
                      overflow: 'hidden',
                      position: 'relative',
                      background: 'var(--surface-bg)'
                    }}>
                      <img
                        src={imagePath}
                        alt={`Design ${index + 1}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onError={(e) => {
                          console.error(`Failed to load: ${imagePath}`);
                          e.currentTarget.parentElement.parentElement.style.display = 'none';
                        }}
                      />
                      {/* Minimal hover overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                      >
                        <span style={{
                          color: 'white',
                          fontSize: 'var(--font-size-base)',
                          fontWeight: '600',
                          textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                        }}>
                          🔍
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Website Designs Section - Full Width Grid, Just Images */}
          <section id="website-designs" style={{ 
            padding: 'var(--space-2xl) var(--space-md)',
          }}>
            <div className="container">
              <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>🌐 Website Designs</h2>
            </div>
            
            <div style={{ 
              maxWidth: '1600px',
              margin: '0 auto',
              padding: '0 var(--space-md)',
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: 'var(--space-md)',
            }}>
              {websiteDesigns.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'block',
                    border: '2px solid var(--border-default)',
                    position: 'relative',
                    background: 'var(--surface-bg)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(88, 166, 255, 0.5)';
                    e.currentTarget.style.borderColor = '#58a6ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border-default)';
                  }}
                >
                  {/* Website iframe preview */}
                  <div style={{
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <iframe
                      src={site.url}
                      title={site.title}
                      style={{
                        width: '1280px',
                        height: '960px',
                        border: 'none',
                        transform: 'scale(0.25)',
                        transformOrigin: '0 0',
                        pointerEvents: 'none'
                      }}
                      scrolling="no"
                    />
                    {/* Hover overlay with title - only shows on hover */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                      padding: 'var(--space-md) var(--space-sm) var(--space-sm) var(--space-sm)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <div style={{
                        color: 'white',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600',
                        textAlign: 'center'
                      }}>
                        {site.title} ↗
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="container">
            <section style={{ 
              marginTop: 'var(--space-2xl)', 
              marginBottom: 'var(--space-2xl)',
              textAlign: 'center',
              padding: 'var(--space-xl)',
              background: 'rgba(248, 81, 73, 0.05)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(248, 81, 73, 0.2)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>
                Looking for UI/UX Design Services?
              </h3>
              <p style={{ 
                maxWidth: '600px', 
                margin: '0 auto var(--space-lg) auto',
                color: 'var(--text-secondary)'
              }}>
                I create beautiful, user-centered designs that combine aesthetics with functionality. 
                Let's collaborate on your next design project!
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="https://calendly.com/kashayn-2001/15min" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Schedule a Call
                </a>
                <a 
                  href="https://linkedin.com/in/kashish-shah-2804" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-md)',
            cursor: 'zoom-out'
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: 'var(--space-lg)',
              right: 'var(--space-lg)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: 'var(--font-size-xl)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          {/* Image */}
          <img
            src={lightboxImage}
            alt="Expanded view"
            style={{
              maxWidth: '95%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Instructions */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--space-lg)',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 'var(--font-size-sm)',
            textAlign: 'center'
          }}>
            Click outside or press × to close
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}