import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, MenuContextType } from '../types';
import { INITIAL_MENU_ITEMS, INITIAL_CATEGORIES } from '../constants';

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
  const [categories, setCategories] = useState<string[]>(INITIAL_CATEGORIES);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const addItem = (item: MenuItem) => {
    setItems(prev => [...prev, item]);
  };

  const updateItem = (id: string, updatedItem: MenuItem) => {
    setItems(prev => prev.map(item => item.id === id ? updatedItem : item));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const addCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories(prev => [...prev, category]);
    }
  };

  const deleteCategory = (category: string) => {
    setCategories(prev => prev.filter(c => c !== category));
  };

  const toggleAdminMode = () => {
    setIsAdminMode(prev => !prev);
  };

  return (
    <MenuContext.Provider value={{ 
      items, 
      categories, 
      addItem, 
      updateItem, 
      deleteItem, 
      addCategory, 
      deleteCategory, 
      isAdminMode, 
      toggleAdminMode 
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};