import React from 'react';
import './index.css';

// ============================================================================
// PUT YOUR IMAGES IN THE `public/assets/` FOLDER AND UPDATE FILENAMES HERE
// ============================================================================
const ASSETS = {
  busLogo: '/assets/bus-logo.png',
  copyrightLogo: '/assets/copyright-icon.png',
  bgTopLeft: '/assets/dltb-terminal.jpg',
  bgTopRight: '/assets/alps-terminal.jpg',
  bgBottomLeft: '/assets/jac-terminal.jpg',
  bgBottomRight: '/assets/ceres-terminal.jpg',
};

export default function App() {
  return (
    <div className="landing-wrapper">
      {/* 2x2 Background Terminal Collage + Pinkish Overlay */}
      <div className="bg-collage">
        <div className="bg-cell">
          <img src={ASSETS.bgTopLeft} alt="DLTB Co. Terminal" />
        </div>
        <div className="bg-cell">
          <img src={ASSETS.bgTopRight} alt="ALPS Bus Terminal" />
        </div>
        <div className="bg-cell">
          <img src={ASSETS.bgBottomLeft} alt="JAC Liner Terminal" />
        </div>
        <div className="bg-cell">
          <img src={ASSETS.bgBottomRight} alt="Ceres Transport Terminal" />
        </div>
        <div className="bg-overlay" />
      </div>

      {/* Top Header Bar */}
      <header className="top-navbar">
        <div className="brand-box">
          <img
            src={ASSETS.busLogo}
            alt="Buendi-Rides Bus Logo"
            className="bus-logo"
          />
          <span className="brand-title">BUENDI-RIDES</span>
        </div>

        <nav className="nav-links">
          <button type="button" className="nav-btn">BOOK</button>
          <button type="button" className="nav-btn">SCHEDULE</button>
          <button type="button" className="nav-btn">ABOUT</button>
        </nav>
      </header>

      {/* Center Hero Content */}
      <main className="hero-content">
        <h1 className="hero-title">BUENDI-RIDES</h1>
        <p className="hero-subtitle">YOUR LOCAL BUS TERMINAL WEBSITE</p>

        <div className="cta-row">
          <button type="button" className="cta-card-btn">
            <span className="cta-big-text">LOOK</span>
            <span className="cta-small-text">AT THE SCHEDULE</span>
          </button>

          <button type="button" className="cta-card-btn">
            <span className="cta-big-text">BOOK</span>
            <span className="cta-small-text">YOUR TRIP NOW</span>
          </button>
        </div>
      </main>

      {/* Bottom Footer Bar */}
      <footer className="bottom-footer">
        <div className="footer-left">
          <img
            src={ASSETS.copyrightLogo}
            alt="Copyright Icon"
            className="copyright-logo"
          />
          <span className="footer-text">JUSTIN RAYALA INC.</span>
        </div>

        <div className="footer-text">BUENDI-RIDES 2026</div>

        <button type="button" className="footer-btn">
          LOOK AT YOUR NEXT BOOK
        </button>
      </footer>
    </div>
  );
}