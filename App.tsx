import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/Menu';
import { AIChat } from './components/AIChat';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import { MenuProvider, useMenu } from './contexts/MenuContext';

const MainContent: React.FC = () => {
  const { isAdminMode } = useMenu();

  if (isAdminMode) {
    return <AdminPanel />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
      </main>
      <Footer />
      <AIChat />
    </>
  );
};

const App: React.FC = () => {
  return (
    <MenuProvider>
      <div className="bg-cream-100 min-h-screen selection:bg-sage-200 selection:text-sage-900">
        <MainContent />
      </div>
    </MenuProvider>
  );
};

export default App;