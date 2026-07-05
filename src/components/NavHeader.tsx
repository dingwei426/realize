import { useState } from 'react';
import { Button, Switch } from 'animal-island-ui';

interface NavHeaderProps {
  isNight: boolean;
  onToggleNight: (checked: boolean) => void;
}

export default function NavHeader({ isNight, onToggleNight }: NavHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '🏝 Landing', href: '#hero' },
    { label: '👤 About', href: '#about' },
    { label: '🎓 Education', href: '#education' },
    { label: '🛠 Skills', href: '#skills' },
    { label: '💼 Experience', href: '#experience' },
    { label: '📂 Projects', href: '#projects' },
    { label: '✉ Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 10px rgba(61, 52, 40, 0.08)',
      borderBottom: '4px solid var(--wood)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      transition: 'background 0.5s ease, border-color 0.5s ease',
      color: 'var(--text-dark)',
      borderRadius: '0 0 16px 16px'
    }} className="nav-header">
      {/* Brand logo / design */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '28px', animation: 'leafWiggle 3s ease-in-out infinite' }}>🍃</span>
        <span style={{ fontStyle: 'normal', fontWeight: 800, fontSize: '20px', letterSpacing: '0.5px' }}>
          Ding Wei's Island
        </span>
      </div>

      {/* Center navigation links */}
      <nav style={{
        display: isMobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        width: '100%',
        margin: '12px 0 0 0',
        gap: '8px',
        // Media query simulation / desktop style below overridden in style/desktop rules
      }} className="nav-menu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <Button type="text" size="middle" block style={{ justifyContent: 'flex-start', color: 'inherit', fontWeight: 600 }}>
              {link.label}
            </Button>
          </a>
        ))}
      </nav>

      {/* Desktop navigation styling injected via a simple style block to avoid Tailwind/external CSS complexities */}
      <style>{`
        @media (min-width: 900px) {
          .nav-menu {
            display: flex !important;
            flex-direction: row !important;
            width: auto !important;
            margin: 0 !important;
            gap: 4px !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Right controls: Theme Switch and Mobile menu toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Day / Night Theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>{isNight ? '🌙' : '☀️'}</span>
          <Switch
            checked={isNight}
            onChange={onToggleNight}
            checkedChildren="Night"
            unCheckedChildren="Day"
          />
        </div>

        {/* Mobile menu button */}
        <Button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="default"
          style={{ padding: '4px 10px', fontSize: '18px' }}
        >
          ☰
        </Button>
      </div>
    </header>
  );
}
