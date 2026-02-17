import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-4 -right-4 w-full h-full border-2 border-sage-300 rounded-3xl z-0"></div>
             <img 
               src="https://picsum.photos/800/600?random=20" 
               alt="Barista pouring coffee" 
               className="w-full h-full object-cover rounded-3xl shadow-xl relative z-10"
             />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">فلسفه ما</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-8"></div>
            <p className="text-lg text-sage-800 font-sans leading-loose mb-6 text-justify">
              در "وِرد و کِرِما"، ما معتقدیم که قهوه چیزی فراتر از یک نوشیدنی برای رفع خستگی است؛ این یک آیین برای بازگشت به آرامش است.
              با الهام از رنگ‌های لطیف طبیعت—سبز مریم‌گلی و کرم ملایم—فضای ما طراحی شده تا زمان را متوقف کند.
            </p>
            <p className="text-lg text-sage-800 font-sans leading-loose mb-8 text-justify">
              ما دانه‌های خود را از مزارع پایدار تهیه می‌کنیم و آن‌ها را با شیرینی‌هایی که هر ساعت تازه پخته می‌شوند، همراه می‌کنیم.
              چه برای کار آمده باشید، چه برای گفتگو یا صرفاً نفس کشیدن، اینجا خانه شماست.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-2xl text-sage-900 mb-2">۱۰۰٪</h4>
                  <p className="text-sm tracking-wide text-sage-600">دانه‌های ارگانیک</p>
               </div>
               <div>
                  <h4 className="font-bold text-2xl text-sage-900 mb-2">روزانه</h4>
                  <p className="text-sm tracking-wide text-sage-600">شیرینی تازه</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};