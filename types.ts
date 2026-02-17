export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string; // Changed from Enum to string for dynamic categories
  tags?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface MenuContextType {
  items: MenuItem[];
  categories: string[];
  addItem: (item: MenuItem) => void;
  updateItem: (id: string, item: MenuItem) => void;
  deleteItem: (id: string) => void;
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}