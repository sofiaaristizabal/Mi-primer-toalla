
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import { SECTIONS_DATA } from './constants';
import { NavLink } from './types';

const App: React.FC = () => {
  const navLinks: NavLink[] = SECTIONS_DATA.map(section => ({
    id: section.id,
    title: section.navTitle,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navLinks} />
      <main className="flex-grow pt-16"> {/* pt-16 to offset for fixed navbar height (h-16) */}
        {SECTIONS_DATA.map((sectionData) => (
          <Section key={sectionData.id} data={sectionData} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
