'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen) {
        const nav = document.getElementById('mobile-nav-links');
        const menuIcon = document.querySelector('.mobile-menu-icon');
        if (nav && !nav.contains(event.target) && menuIcon && !menuIcon.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close menu on route change (escape key)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header ref={headerRef} id="site-header" className="header">
      {/* Background layer for the sketch image */}
      <div className="header-bg" aria-hidden="true" />

      {/* Header content */}
      <div className="header-content">
        <Link href="/" className="header-brand">
          <img
            src="/images/square-logo-symbol.webp"
            alt=""
            className="header-logo"
            aria-hidden="true"
          />
          <span className="header-title">
            <span className="header-title-main">Awakenings</span>
            <span className="header-title-sub">Mental Health</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav" aria-label="Main navigation">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/our-providers" className="nav-link">Our Providers</Link>
          <Link href="/articles" className="nav-link">Articles</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-links"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav
        id="mobile-nav-links"
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <Link href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/our-providers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Providers</Link>
        <Link href="/articles" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Articles</Link>
      </nav>
    </header>
  );
}
