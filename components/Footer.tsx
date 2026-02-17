import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="visit" className="bg-sage-900 text-cream-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-sage-800 pb-16">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-cream-100 mb-6">وِرد <span className="text-gold-500">&</span> کِرِما</h2>
            <p className="text-sage-300 font-sans leading-loose mb-6 max-w-xs text-justify">
              واحه‌ای از آرامش در قلب شهر. برای لحظه‌ای صلح و نوشیدن یک فنجان قهوه عالی به ما بپیوندید.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"><Facebook size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"><Twitter size={18}/></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-cream-100 mb-6">تماس با ما</h3>
            <ul className="space-y-4 font-sans text-sage-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                <span className="leading-relaxed">تهران، خیابان فرشته،<br/>پلاک ۱۲، ساختمان سبز</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-500 shrink-0" />
                <span dir="ltr">۰۲۱-۲۲۰۵۶۷۸۹</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold text-cream-100 mb-6">ساعات کاری</h3>
            <ul className="space-y-4 font-sans text-sage-300">
               <li className="flex gap-3">
                 <Clock size={20} className="text-gold-500 shrink-0 mt-1" />
                 <div>
                   <span className="block text-cream-100 font-bold mb-1">شنبه تا پنجشنبه</span>
                   <span>۷:۰۰ صبح - ۱۱:۰۰ شب</span>
                 </div>
               </li>
               <li className="flex gap-3">
                 <Clock size={20} className="text-gold-500 shrink-0 opacity-0" />
                 <div>
                   <span className="block text-cream-100 font-bold mb-1">جمعه</span>
                   <span>۸:۰۰ صبح - ۱۲:۰۰ شب</span>
                 </div>
               </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sage-500 font-sans gap-4">
          <p>© ۱۴۰۳ وِرد و کِرِما. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream-100 transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-cream-100 transition-colors">قوانین و مقررات</a>
          </div>
        </div>
      </div>
    </footer>
  );
};