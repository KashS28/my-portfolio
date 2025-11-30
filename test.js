import React, { useState, useRef } from 'react';

export default function MoodBoardGenerator() {
  const [selectedSite, setSelectedSite] = useState('rishikayoga');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0, status: '' });
  const paletteRef = useRef(null);
  const moodboardRef = useRef(null);

  const websites = {
    rishikayoga: {
      name: 'Rishika Yoga',
      tagline: 'Learn, Practise & Master Yoga Online',
      colors: ['#FF8C42', '#2C5F7C', '#F4E4D7', '#8B7D6B', '#FFFFFF'],
      vibe: ['Wellness', 'Peaceful', 'Holistic', 'Natural', 'Mindful'],
      keywords: ['Yoga', 'Meditation', 'Wellness', 'Mindfulness', 'Health'],
      fonts: ['Elegant Serif', 'Clean Sans'],
      mood: 'Serene wellness journey with authentic yoga teachings'
    },
    ayapapaya: {
      name: 'Ayapapaya',
      tagline: 'Fun Kids Brand',
      colors: ['#FF6B9D', '#FFC107', '#4CAF50', '#29B6F6', '#9C27B0'],
      vibe: ['Fun', 'Creative', 'Bright', 'Playful', 'Joyful'],
      keywords: ['Kids', 'Fun', 'Creative', 'Colorful', 'Playful'],
      fonts: ['Playful Rounded', 'Fun Sans'],
      mood: 'Bright and joyful kids brand with creative playful energy'
    },
    momoz: {
      name: 'Momoz',
      tagline: 'Creative Platform',
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
      vibe: ['Playful', 'Creative', 'Colorful', 'Fun', 'Dynamic'],
      keywords: ['Creative', 'Vibrant', 'Modern', 'Engaging'],
      fonts: ['Playful Sans', 'Friendly'],
      mood: 'Vibrant creative energy with playful personality'
    },
    rhuhee: {
      name: 'Rhuhee by Amisha',
      tagline: 'Fashion & Lifestyle Brand',
      colors: ['#D4AF37', '#2C2C2C', '#F5F5F5', '#C19A6B', '#8B7355'],
      vibe: ['Elegant', 'Luxury', 'Fashion', 'Sophisticated', 'Feminine'],
      keywords: ['Fashion', 'Luxury', 'Style', 'Elegant', 'Boutique'],
      fonts: ['Elegant Serif', 'Fashion Sans'],
      mood: 'Sophisticated fashion with luxury elegance'
    },
    suco: {
      name: 'Suco',
      tagline: 'Premium Meat Exporter',
      colors: ['#1E3A5F', '#FFFFFF', '#D4AF37', '#8B4513', '#2C3E50'],
      vibe: ['Corporate', 'Professional', 'Trust', 'Quality', 'Global'],
      keywords: ['Export', 'Quality', 'Trust', 'Professional', 'Global'],
      fonts: ['Corporate Sans', 'Clean'],
      mood: 'Corporate professionalism with quality assurance'
    },
    lifemuses: {
      name: 'Life Muses',
      tagline: 'Inspiration & Lifestyle',
      colors: ['#E8B4B8', '#5D4E6D', '#F7E7CE', '#A8DADC', '#FFFFFF'],
      vibe: ['Inspiring', 'Creative', 'Personal', 'Artistic', 'Thoughtful'],
      keywords: ['Inspiration', 'Life', 'Stories', 'Creative', 'Personal'],
      fonts: ['Artistic Script', 'Modern Sans'],
      mood: 'Inspirational lifestyle with creative storytelling'
    },
    selectivepro: {
      name: 'Selective Pro - In',
      tagline: 'Professional Services',
      colors: ['#1A237E', '#FFFFFF', '#3F51B5', '#E8EAF6', '#5C6BC0'],
      vibe: ['Professional', 'Corporate', 'Strategic', 'Expert', 'Reliable'],
      keywords: ['Professional', 'Services', 'Consulting', 'Expert', 'Strategic'],
      fonts: ['Business Sans', 'Professional'],
      mood: 'Expert professional services with strategic approach'
    },
    hattells: {
      name: 'Hattells',
      tagline: 'Custom T-Shirt Design & Printing',
      colors: ['#000000', '#FFFFFF', '#8B4513', '#D2691E', '#F5DEB3'],
      vibe: ['Modern', 'Urban', 'Streetwear', 'Custom', 'Bold'],
      keywords: ['Hats', 'Fashion', 'Leather', 'Custom', 'Signature'],
      fonts: ['Modern Sans', 'Bold Headlines'],
      mood: 'Edgy urban fashion with customization focus'
    },
    keralacafe: {
      name: 'Kerala Cafe',
      tagline: 'Authentic Kerala Cuisine',
      colors: ['#8B4513', '#D2691E', '#F4A460', '#228B22', '#FFFACD'],
      vibe: ['Warm', 'Authentic', 'Traditional', 'Welcoming', 'Cozy'],
      keywords: ['Food', 'Indian', 'Authentic', 'Traditional', 'Spice'],
      fonts: ['Warm Serif', 'Traditional'],
      mood: 'Warm traditional dining with authentic Kerala flavors'
    },
    productions99: {
      name: '99 Productions',
      tagline: 'Creative Media Production',
      colors: ['#000000', '#FFD700', '#FFFFFF', '#FF6B6B', '#2C2C2C'],
      vibe: ['Creative', 'Bold', 'Cinematic', 'Professional', 'Dynamic'],
      keywords: ['Production', 'Media', 'Creative', 'Film', 'Content'],
      fonts: ['Bold Sans', 'Cinematic'],
      mood: 'Bold creative production with cinematic flair'
    },
    studionineine: {
      name: 'Studio Nine Nine',
      tagline: 'Design Studio',
      colors: ['#2C2C2C', '#FFFFFF', '#E8E8E8', '#FFD700', '#1A1A1A'],
      vibe: ['Minimalist', 'Modern', 'Creative', 'Professional', 'Clean'],
      keywords: ['Design', 'Studio', 'Creative', 'Modern', 'Branding'],
      fonts: ['Modern Sans', 'Clean'],
      mood: 'Minimalist design studio with modern aesthetics'
    },
    petrix: {
      name: 'Petrix',
      tagline: 'Pet Care & Services',
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FFFFFF'],
      vibe: ['Friendly', 'Playful', 'Caring', 'Warm', 'Fun'],
      keywords: ['Pets', 'Care', 'Love', 'Animals', 'Services'],
      fonts: ['Friendly Sans', 'Playful'],
      mood: 'Warm pet care with playful friendly approach'
    },
    goodtime1: {
      name: 'Good Time Caterers',
      tagline: 'Premium Catering Services',
      colors: ['#8B4513', '#D4AF37', '#FFFFFF', '#2C5F2C', '#F5E6D3'],
      vibe: ['Elegant', 'Premium', 'Festive', 'Warm', 'Professional'],
      keywords: ['Catering', 'Events', 'Food', 'Celebration', 'Premium'],
      fonts: ['Elegant Serif', 'Classic'],
      mood: 'Premium catering with elegant festive touch'
    },
    trikutaoils: {
      name: 'Trikuta Oils Jammu',
      tagline: 'Traditional Oil Products',
      colors: ['#8B4513', '#FFD700', '#228B22', '#FFFFFF', '#D2691E'],
      vibe: ['Traditional', 'Natural', 'Authentic', 'Heritage', 'Pure'],
      keywords: ['Oils', 'Traditional', 'Natural', 'Pure', 'Heritage'],
      fonts: ['Traditional Serif', 'Classic'],
      mood: 'Traditional heritage oils with natural authenticity'
    },
    goodtime2: {
      name: 'Good Time Caterers v2',
      tagline: 'Catering Excellence',
      colors: ['#D4AF37', '#2C2C2C', '#FFFFFF', '#8B4513', '#F5DEB3'],
      vibe: ['Premium', 'Elegant', 'Professional', 'Sophisticated', 'Festive'],
      keywords: ['Catering', 'Premium', 'Events', 'Excellence', 'Food'],
      fonts: ['Elegant Sans', 'Professional'],
      mood: 'Premium catering excellence with sophisticated service'
    },
    goodtime3: {
      name: 'Good Time Caterers v3',
      tagline: 'Event Catering Specialists',
      colors: ['#8B0000', '#FFD700', '#FFFFFF', '#2C5F2C', '#F4E4C1'],
      vibe: ['Festive', 'Warm', 'Professional', 'Celebratory', 'Premium'],
      keywords: ['Events', 'Catering', 'Celebration', 'Food', 'Service'],
      fonts: ['Festive Serif', 'Warm'],
      mood: 'Festive event catering with warm celebratory spirit'
    },
    momoz2: {
      name: 'Momoz v2',
      tagline: 'Creative Digital Platform',
      colors: ['#6A0DAD', '#FF1493', '#00CED1', '#FFD700', '#FFFFFF'],
      vibe: ['Bold', 'Creative', 'Vibrant', 'Modern', 'Digital'],
      keywords: ['Digital', 'Creative', 'Modern', 'Platform', 'Innovation'],
      fonts: ['Modern Sans', 'Bold'],
      mood: 'Bold digital creativity with vibrant modern energy'
    },
    goodtime4: {
      name: 'Good Time Caterers v4',
      tagline: 'Full Service Catering',
      colors: ['#2C5F2C', '#D4AF37', '#FFFFFF', '#8B4513', '#F5F5F5'],
      vibe: ['Natural', 'Elegant', 'Professional', 'Fresh', 'Quality'],
      keywords: ['Catering', 'Quality', 'Fresh', 'Service', 'Events'],
      fonts: ['Natural Serif', 'Clean'],
      mood: 'Natural elegant catering with fresh quality focus'
    },
    safe2greet: {
      name: 'Safe2Greet',
      tagline: 'Safe Social Solutions',
      colors: ['#0066CC', '#00CC66', '#FFFFFF', '#E8F4F8', '#2C3E50'],
      vibe: ['Safe', 'Modern', 'Tech', 'Trustworthy', 'Innovative'],
      keywords: ['Safety', 'Social', 'Technology', 'Innovation', 'Trust'],
      fonts: ['Tech Sans', 'Modern'],
      mood: 'Safe social innovation with trustworthy technology'
    }
  };

  const site = websites[selectedSite];

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
  };

  const sanitizeFilename = (name) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');
  };

  const captureElement = async (element, filename) => {
    const html2canvas = (await import('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm')).default;
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true
    });
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        resolve();
      }, 'image/png');
    });
  };

  const generateAllImages = async () => {
    setIsGenerating(true);
    const websiteKeys = Object.keys(websites);
    const total = websiteKeys.length * 2;
    let current = 0;

    for (const key of websiteKeys) {
      setSelectedSite(key);
      const folderName = sanitizeFilename(websites[key].name);
      
      // Wait for React to render
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capture palette
      setProgress({ current: current + 1, total, status: `Generating ${websites[key].name} - Palette...` });
      await captureElement(paletteRef.current, `${folderName}-palette.png`);
      current++;
      
      await new Promise(resolve => setTimeout(resolve, 300));

      // Capture moodboard
      setProgress({ current: current + 1, total, status: `Generating ${websites[key].name} - Moodboard...` });
      await captureElement(moodboardRef.current, `${folderName}-moodboard.png`);
      current++;
      
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setProgress({ current: total, total, status: 'Complete! All images saved to Downloads.' });
    setTimeout(() => {
      setIsGenerating(false);
      setProgress({ current: 0, total: 0, status: '' });
    }, 3000);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'white', fontSize: '36px', marginBottom: '10px', fontWeight: '700' }}>
          Mood Board & Palette Generator
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '30px' }}>
          19 Professional Website Designs • Portfolio Graphics Generator
        </p>

        {/* Generate All Button */}
        <button
          onClick={generateAllImages}
          disabled={isGenerating}
          style={{
            padding: '16px 32px',
            background: isGenerating ? '#ccc' : 'linear-gradient(135deg, #FFD700, #FFA500)',
            color: isGenerating ? '#666' : '#000',
            border: 'none',
            borderRadius: '12px',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            fontWeight: '700',
            fontSize: '16px',
            marginBottom: '20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          {isGenerating ? '⏳ Generating...' : '🚀 Generate All 38 Images'}
        </button>

        {isGenerating && (
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            padding: '20px',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '0 auto 20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <div style={{ marginBottom: '10px', color: '#333', fontWeight: '600' }}>
              {progress.status}
            </div>
            <div style={{ 
              width: '100%', 
              height: '8px', 
              background: '#e0e0e0', 
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${(progress.current / progress.total) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                transition: 'width 0.3s ease'
              }} />
            </div>
            <div style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
              {progress.current} / {progress.total} images
            </div>
          </div>
        )}
        
        {/* Site Selector Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '10px', 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {Object.keys(websites).map(key => (
            <button
              key={key}
              onClick={() => setSelectedSite(key)}
              disabled={isGenerating}
              style={{
                padding: '12px 16px',
                background: selectedSite === key ? 'white' : 'rgba(255,255,255,0.2)',
                color: selectedSite === key ? '#667eea' : 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                fontSize: '13px',
                transition: 'all 0.3s ease',
                transform: selectedSite === key ? 'translateY(-2px)' : 'none',
                boxShadow: selectedSite === key ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                textAlign: 'left',
                opacity: isGenerating ? 0.5 : 1
              }}
            >
              {websites[key].name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gap: '30px' }}>
        
        {/* COLOR PALETTE CARD */}
        <div ref={paletteRef} style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#333', fontWeight: '700' }}>
            {site.name} - Color Palette
          </h2>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>
            {site.tagline}
          </p>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {site.colors.map((color, idx) => (
              <div 
                key={idx} 
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => copyColor(color)}
                title="Click to copy"
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: color,
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  marginBottom: '10px',
                  border: color === '#FFFFFF' || color === '#F5F5F5' ? '2px solid #eee' : 'none',
                  transition: 'transform 0.2s ease'
                }} />
                <div style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'monospace',
                  color: '#333'
                }}>
                  {color}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
              <strong>Mood:</strong> {site.mood}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              <strong>Typography:</strong> {site.fonts.join(', ')}
            </div>
          </div>
        </div>

        {/* MOOD BOARD CARD */}
        <div ref={moodboardRef} style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#333', fontWeight: '700' }}>
            {site.name} - Mood Board
          </h2>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>
            Visual Identity & Brand Essence
          </p>

          {/* Vibe Tags */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#999', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Brand Vibes
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {site.vibe.map((vibe, idx) => (
                <span key={idx} style={{
                  padding: '8px 16px',
                  background: `linear-gradient(135deg, ${site.colors[idx % site.colors.length]}20, ${site.colors[(idx + 1) % site.colors.length]}20)`,
                  border: `2px solid ${site.colors[idx % site.colors.length]}40`,
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#333'
                }}>
                  {vibe}
                </span>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#999', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Key Themes
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {site.keywords.map((keyword, idx) => (
                <span key={idx} style={{
                  padding: '6px 14px',
                  background: site.colors[0],
                  color: site.colors[0] === '#000000' || site.colors[0].includes('#1') || site.colors[0].includes('#2') || site.colors[0].includes('#8B') ? 'white' : '#333',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Color Swatches Row */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#999', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Color Story
            </div>
            <div style={{ display: 'flex', gap: '5px', height: '60px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              {site.colors.map((color, idx) => (
                <div key={idx} style={{
                  flex: 1,
                  background: color,
                  transition: 'all 0.3s ease'
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Footer */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        padding: '30px',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#333', fontWeight: '700' }}>
          🚀 Automatic Image Generation
        </h3>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
          Click the <strong>"Generate All 38 Images"</strong> button above to automatically save all palette and moodboard images 
          to your Downloads folder. Files will be named as <code style={{ background: '#f0f0f0', padding: '2px 8px', borderRadius: '4px' }}>website-name-palette.png</code> and 
          <code style={{ background: '#f0f0f0', padding: '2px 8px', borderRadius: '4px', marginLeft: '4px' }}>website-name-moodboard.png</code>.
        </p>
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#667eea', fontWeight: '600' }}>
          Result: 19 websites × 2 graphics = 38 portfolio pieces automatically saved! ✨
        </div>
        <div style={{ marginTop: '15px', fontSize: '13px', color: '#999' }}>
          <strong>Note:</strong> Images will download to your default Downloads folder. You can then organize them into folders as needed.
        </div>
      </div>
    </div>
  );
}