import React, { useState } from 'react';
import { MenuItem } from '../types';
import { useMenu } from '../contexts/MenuContext';
import { Plus } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { items, categories } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>('همه');

  const displayCategories = ['همه', ...categories];

  const filteredItems = activeCategory === 'همه' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-sage-50 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">منوی ما</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-8"></div>
          <p className="text-sage-800 font-sans max-w-xl mx-auto text-lg leading-relaxed">
            گزینه‌هایی دست‌چین شده برای هر سلیقه. تهیه شده با مواد اولیه اخلاقی و آماده‌سازی دقیق.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {displayCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-sage-900 text-cream-100 border-sage-900 shadow-md'
                  : 'bg-white text-sage-800 border-sage-200 hover:border-sage-500 hover:bg-cream-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-sage-100/50 hover:-translate-y-2 h-full">
      
      {/* Image Container */}
      <div className="h-64 overflow-hidden relative shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Tags */}
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
           {item.tags?.map(tag => (
             <span key={tag} className="px-2.5 py-1 bg-cream-100/95 backdrop-blur-md text-[10px] font-bold text-sage-900 rounded-lg shadow-sm border border-sage-100">
               {tag}
             </span>
           ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-cream-50/30">
        
        {/* Title */}
        <div className="mb-2">
          <h3 className="font-bold text-xl text-sage-900 leading-tight group-hover:text-gold-500 transition-colors">
            {item.title}
          </h3>
          <span className="text-xs text-sage-400 font-sans mt-1 block">{item.category}</span>
        </div>

        {/* Description */}
        <p className="text-sage-700 text-sm font-sans leading-loose mb-6 flex-grow line-clamp-3">
          {item.description}
        </p>

        {/* Price and Action - Redesigned for Visibility */}
        <div className="mt-auto pt-4 border-t border-sage-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
             <span className="text-xs text-sage-400 mb-0.5">قیمت:</span>
             <span className="font-bold text-lg text-sage-900">{item.price}</span>
          </div>
          
          <button className="w-10 h-10 rounded-full bg-sage-900 text-cream-100 flex items-center justify-center hover:bg-gold-500 hover:scale-110 transition-all shadow-md group-hover:shadow-lg" title="افزودن به سبد">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};