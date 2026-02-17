import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row pt-20 overflow-hidden">
      
      {/* Text Content - Right Side in RTL */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 z-10 bg-cream-100">
        <span className="text-gold-500 font-sans tracking-widest text-sm mb-4 font-bold">
          تاسیس ۱۴۰۳
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sage-900 leading-[1.3] mb-8">
          طعم طبیعت، <br />
          <span className="italic text-sage-500">آرامش محض.</span>
        </h1>
        <p className="text-sage-800 font-sans text-lg leading-loose max-w-md mb-10 opacity-80">
          پناهگاهی که در آن قهوه دست‌ساز با الهامات گیاه شناسی تلاقی می‌کند.
          طعم‌هایی که توسط طبیعت انتخاب شده‌اند را در فضایی مملو از آرامش تجربه کنید.
        </p>
        <div className="flex gap-4">
          <a 
            href="#menu"
            onClick={scrollToMenu}
            className="px-8 py-4 bg-sage-900 text-cream-100 font-sans tracking-wide font-bold hover:bg-sage-800 transition-colors rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            مشاهده منو
          </a>
        </div>
      </div>

      {/* Image Content - Left Side in RTL */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <img 
          src="https://picsum.photos/1200/1600?random=10" 
          alt="Latte art on a green table" 
          className="w-full h-full object-cover"
        />
        {/* Decorative Circle - Positioned Left in RTL */}
        <div className="absolute bottom-8 left-8 z-20 hidden md:block">
           <div className="w-32 h-32 rounded-full border border-cream-100/30 backdrop-blur-md flex items-center justify-center animate-spin-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text fill="white" fontSize="12" letterSpacing="0.1em" className="font-bold">
                  <textPath href="#curve">
                    اسکرول کنید • کشف کنید • اسکرول کنید •
                  </textPath>
                </text>
              </svg>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-sage-900 md:hidden z-20">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};