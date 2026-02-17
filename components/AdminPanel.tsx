import React, { useState } from 'react';
import { useMenu } from '../contexts/MenuContext';
import { MenuItem } from '../types';
import { Trash2, Plus, X, Edit, Save, Tag } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { items, categories, addItem, updateItem, deleteItem, addCategory, deleteCategory, toggleAdminMode } = useMenu();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Form State
  const [formData, setFormData] = useState<Partial<MenuItem>>({
    title: '',
    description: '',
    price: '',
    image: 'https://picsum.photos/400/400',
    category: '',
    tags: []
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      image: 'https://picsum.photos/400/400',
      category: categories[0] || '',
      tags: []
    });
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSave = () => {
    if (!formData.title || !formData.price || !formData.category) return;

    if (editingId) {
      updateItem(editingId, { ...formData, id: editingId } as MenuItem);
    } else {
      addItem({ ...formData, id: Date.now().toString() } as MenuItem);
    }
    resetForm();
  };

  const startEdit = (item: MenuItem) => {
    setFormData(item);
    setEditingId(item.id);
    setIsAdding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
        addCategory(newCategoryName.trim());
        setNewCategoryName('');
    }
  }

  return (
    <div className="min-h-screen bg-sage-50 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-sage-900">پنل مدیریت کافه</h1>
            <p className="text-sage-500 mt-2">مدیریت محصولات و دسته‌بندی‌ها</p>
          </div>
          <button 
            onClick={toggleAdminMode}
            className="px-4 py-2 border border-sage-800 text-sage-900 rounded-lg hover:bg-sage-200 transition-colors"
          >
            بازگشت به سایت
          </button>
        </div>

        {/* Category Management */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-sage-200 mb-8">
            <h3 className="font-bold text-lg text-sage-800 mb-4 flex items-center gap-2">
                <Tag size={20} />
                مدیریت دسته‌بندی‌ها
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
                {categories.map(cat => (
                    <div key={cat} className="bg-sage-100 text-sage-900 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {cat}
                        <button onClick={() => deleteCategory(cat)} className="text-sage-400 hover:text-red-500">
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 max-w-md">
                <input 
                    type="text" 
                    placeholder="نام دسته‌بندی جدید..."
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="flex-1 p-2 border rounded-lg bg-sage-50 text-sm"
                />
                <button 
                    onClick={handleAddCategory}
                    className="bg-sage-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gold-500 transition-colors"
                >
                    افزودن
                </button>
            </div>
        </div>

        {/* Add/Edit Product Section */}
        {isAdding ? (
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-sage-200 animate-fade-in-up">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold text-sage-800">{editingId ? 'ویرایش محصول' : 'افزودن محصول جدید'}</h2>
              <button onClick={resetForm}><X className="text-sage-500 hover:text-red-500" /></button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                placeholder="نام محصول" 
                value={formData.title} 
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="p-3 border rounded-lg bg-sage-50"
              />
              <input 
                placeholder="قیمت (مثلا: ۱۵۰,۰۰۰ تومان)" 
                value={formData.price} 
                onChange={e => setFormData({...formData, price: e.target.value})}
                className="p-3 border rounded-lg bg-sage-50"
              />
              <select 
                value={formData.category} 
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="p-3 border rounded-lg bg-sage-50"
              >
                <option value="" disabled>انتخاب دسته‌بندی</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input 
                placeholder="لینک تصویر" 
                value={formData.image} 
                onChange={e => setFormData({...formData, image: e.target.value})}
                className="p-3 border rounded-lg bg-sage-50"
              />
            </div>
            <textarea 
              placeholder="توضیحات محصول"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full p-3 border rounded-lg bg-sage-50 mb-4 min-h-[100px]"
            />
            
            <button 
              onClick={handleSave}
              className="w-full bg-sage-900 text-cream-100 py-3 rounded-lg font-bold hover:bg-gold-500 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              {editingId ? 'بروزرسانی محصول' : 'ذخیره محصول'}
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsAdding(true)}
            className="w-full bg-white border-2 border-dashed border-sage-300 text-sage-600 py-6 rounded-2xl mb-8 flex items-center justify-center gap-2 hover:border-gold-500 hover:text-gold-500 transition-all"
          >
            <Plus size={24} />
            <span className="font-bold">افزودن محصول جدید</span>
          </button>
        )}

        {/* List Items */}
        <div className="grid gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-4 border border-sage-100">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1 text-center md:text-right">
                <h3 className="font-bold text-lg text-sage-900">{item.title}</h3>
                <p className="text-sm text-sage-500 mb-1">{item.category} - <span className="text-gold-500 font-bold">{item.price}</span></p>
                <p className="text-xs text-sage-400 line-clamp-1">{item.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => startEdit(item)} className="p-2 text-sage-600 hover:bg-sage-100 rounded-lg transition-colors">
                  <Edit size={18} />
                </button>
                <button onClick={() => deleteItem(item.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};