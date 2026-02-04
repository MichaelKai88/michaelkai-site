import React, { useState, useEffect } from 'react';

// Concept 1: "Warm Editorial"
// Warm cream backgrounds, deep navy accents, refined serif typography
// Evokes trust, expertise, and approachability through quality publication aesthetics

export default function WarmEditorialMockup() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FAF7F2 0%, #F5F0E8 100%)',
      fontFamily: 'Georgia, "Times New Roman", serif',
      color: '#1a2a3a',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '32px 64px',
        position: 'relative',
        zIndex: 10,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '400',
          letterSpacing: '0.05em',
          color: '#1a2a3a'
        }}>
          <span style={{ fontWeight: '600' }}>Michael</span> Kai
        </div>
        <div style={{
          display: 'flex',
          gap: '48px',
          fontSize: '14px',
          fontFamily: '"Optima", "Segoe UI", sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          {['Classes', 'About', 'Testimonials', 'Contact'].map((item, i) => (
            <a key={item} href="#" style={{
              color: '#5a6a7a',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: '4px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={e => e.target.style.color = '#1a2a3a'}
            onMouseLeave={e => e.target.style.color = '#5a6a7a'}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        padding: '40px 64px 100px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 5
      }}>
        {/* Left: Content */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
        }}>
          <p style={{
            fontFamily: '"Optima", "Segoe UI", sans-serif',
            fontSize: '13px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B7355',
            marginBottom: '24px'
          }}>
            AI Education for Everyone
          </p>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '400',
            lineHeight: '1.15',
            marginBottom: '32px',
            color: '#1a2a3a'
          }}>
            Master AI with<br />
            <span style={{ fontStyle: 'italic', color: '#3d5a73' }}>clarity & confidence</span>
          </h1>
          <p style={{
            fontSize: '19px',
            lineHeight: '1.8',
            color: '#4a5a6a',
            maxWidth: '480px',
            marginBottom: '48px'
          }}>
            Practical, approachable classes designed for curious minds. 
            Learn to harness AI tools effectively—no technical background required.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button style={{
              background: '#1a2a3a',
              color: '#FAF7F2',
              border: 'none',
              padding: '18px 40px',
              fontSize: '14px',
              fontFamily: '"Optima", "Segoe UI", sans-serif',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              e.target.style.background = '#2d4a5a';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.target.style.background = '#1a2a3a';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              View Classes
            </button>
            <button style={{
              background: 'transparent',
              color: '#1a2a3a',
              border: '1px solid #c9bfb0',
              padding: '18px 40px',
              fontSize: '14px',
              fontFamily: '"Optima", "Segoe UI", sans-serif',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = '#1a2a3a';
              e.target.style.background = 'rgba(26, 42, 58, 0.05)';
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = '#c9bfb0';
              e.target.style.background = 'transparent';
            }}
            >
              Watch Intro
            </button>
          </div>
        </div>

        {/* Right: Video placeholder */}
        <div style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(40px)',
          transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s'
        }}>
          <div style={{
            aspectRatio: '16/10',
            background: 'linear-gradient(135deg, #2d4a5a 0%, #1a2a3a 100%)',
            borderRadius: '4px',
            position: 'relative',
            boxShadow: '0 40px 80px rgba(26, 42, 58, 0.2), 0 20px 40px rgba(26, 42, 58, 0.1)',
            overflow: 'hidden'
          }}>
            {/* Play button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              background: 'rgba(250, 247, 242, 0.95)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                width: 0,
                height: 0,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '20px solid #1a2a3a',
                marginLeft: '4px'
              }} />
            </div>
            {/* Video label */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              color: 'rgba(250, 247, 242, 0.8)',
              fontSize: '13px',
              fontFamily: '"Optima", "Segoe UI", sans-serif',
              letterSpacing: '0.1em'
            }}>
              INTRO VIDEO · 2:30
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        width: '120px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #c9bfb0, transparent)',
        margin: '0 auto 80px'
      }} />

      {/* Class Card Section */}
      <section style={{
        padding: '0 64px 120px',
        position: 'relative',
        zIndex: 5,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '14px',
            fontFamily: '"Optima", "Segoe UI", sans-serif',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B7355',
            marginBottom: '16px'
          }}>
            Featured Class
          </h2>
          <p style={{
            fontSize: '36px',
            fontWeight: '400',
            color: '#1a2a3a'
          }}>
            Begin your AI journey
          </p>
        </div>

        {/* Class Card */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '4px',
          boxShadow: '0 4px 40px rgba(26, 42, 58, 0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          overflow: 'hidden'
        }}>
          {/* Left: Image placeholder */}
          <div style={{
            background: 'linear-gradient(135deg, #e8e0d5 0%, #d9cfc2 100%)',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8B7355',
            fontSize: '14px',
            fontFamily: '"Optima", "Segoe UI", sans-serif',
            letterSpacing: '0.1em'
          }}>
            [CLASS IMAGE]
          </div>
          
          {/* Right: Details */}
          <div style={{ padding: '48px' }}>
            <p style={{
              fontSize: '12px',
              fontFamily: '"Optima", "Segoe UI", sans-serif',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#8B7355',
              marginBottom: '16px'
            }}>
              Foundational · 90 Minutes · Live Online
            </p>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '400',
              marginBottom: '20px',
              color: '#1a2a3a'
            }}>
              AI Essentials for Everyday Life
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#5a6a7a',
              marginBottom: '32px'
            }}>
              A practical introduction to AI tools you can use today. Learn to write 
              effective prompts, understand AI capabilities and limitations, and discover 
              applications for work and personal projects.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '24px',
              borderTop: '1px solid #e8e0d5'
            }}>
              <div>
                <p style={{
                  fontSize: '32px',
                  color: '#1a2a3a',
                  marginBottom: '4px'
                }}>$79</p>
                <p style={{
                  fontSize: '13px',
                  color: '#8a9aaa',
                  fontFamily: '"Optima", "Segoe UI", sans-serif'
                }}>per session</p>
              </div>
              <button style={{
                background: '#1a2a3a',
                color: '#FAF7F2',
                border: 'none',
                padding: '16px 32px',
                fontSize: '13px',
                fontFamily: '"Optima", "Segoe UI", sans-serif',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.background = '#2d4a5a'}
              onMouseLeave={e => e.target.style.background = '#1a2a3a'}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{
        padding: '80px 64px',
        background: '#1a2a3a',
        position: 'relative',
        zIndex: 5
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '100px',
          textAlign: 'center'
        }}>
          {[
            { number: '500+', label: 'Students Taught' },
            { number: '4.9', label: 'Average Rating' },
            { number: '15+', label: 'Years in Tech' }
          ].map((stat, i) => (
            <div key={i}>
              <p style={{
                fontSize: '48px',
                color: '#FAF7F2',
                fontWeight: '300',
                marginBottom: '8px'
              }}>{stat.number}</p>
              <p style={{
                fontSize: '13px',
                fontFamily: '"Optima", "Segoe UI", sans-serif',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(250, 247, 242, 0.6)'
              }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px 64px',
        background: '#FAF7F2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 5
      }}>
        <div style={{
          fontSize: '18px',
          color: '#1a2a3a'
        }}>
          <span style={{ fontWeight: '600' }}>Michael</span> Kai
        </div>
        <p style={{
          fontSize: '13px',
          color: '#8a9aaa',
          fontFamily: '"Optima", "Segoe UI", sans-serif'
        }}>
          © 2025 Michael Kai. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
