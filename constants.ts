import { MenuItem } from './types';

export const INITIAL_CATEGORIES = [
  'قهوه',
  'چای و دمنوش',
  'قنادی',
  'برانچ',
  'نوشیدنی‌های ویژه'
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'لاته کرم پسته',
    description: 'اسپرسوی غنی لایه لایه با کرم پسته خانگی و پودر پسته تازه.',
    price: '۱۶۵,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=1',
    category: 'نوشیدنی‌های ویژه',
    tags: ['پرفروش', 'آجیلی']
  },
  {
    id: '2',
    title: 'ماچا با مریم‌گلی و عسل',
    description: 'ماچای تشریفاتی هم‌زده با عسل طعم‌دار شده با مریم‌گلی و شیر جو.',
    price: '۱۸۰,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=2',
    category: 'چای و دمنوش',
    tags: ['وگان', 'آرامش‌بخش']
  },
  {
    id: '3',
    title: 'کروسان کلاسیک',
    description: 'کروسان فرانسوی کره‌ای و لایه لایه، پخت تازه هر روز صبح.',
    price: '۹۵,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=3',
    category: 'قنادی',
    tags: ['کلاسیک']
  },
  {
    id: '4',
    title: 'تست آووکادو و دوکا',
    description: 'نان خمیرترش با آووکادوی له شده، ادویه دوکای مصری و تربچه.',
    price: '۲۴۰,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=4',
    category: 'برانچ',
    tags: ['خوش‌طعم', 'سالم']
  },
  {
    id: '5',
    title: 'کلد برو هل و گل‌سرخ',
    description: 'قهوه دم‌سرد دم‌آوری شده با گلاب و دانه‌های هل معطر.',
    price: '۱۴۰,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=5',
    category: 'قهوه',
    tags: ['گلی', 'گیرا']
  },
  {
    id: '6',
    title: 'کیک ارل گری و اسطوخودوس',
    description: 'کیک اسفنجی لطیف با عطر چای ارل گری و فراستینگ اسطوخودوس.',
    price: '۱۲۰,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=6',
    category: 'قنادی',
    tags: ['شیرین', 'معطر']
  },
  {
    id: '7',
    title: 'اسپرسو تونیک',
    description: 'دبل شات اسپرسو روی آب تونیک اعلا با تکه‌ای گریپ‌فروت.',
    price: '۱۳۵,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=7',
    category: 'قهوه',
    tags: ['طراوت‌بخش']
  },
  {
    id: '8',
    title: 'تارتین قارچ جنگلی',
    description: 'قارچ‌های جنگلی رست شده، آویشن و پنیر بز روی نان روستایی.',
    price: '۲۸۰,۰۰۰ تومان',
    image: 'https://picsum.photos/400/400?random=8',
    category: 'برانچ',
    tags: ['لذیذ']
  }
];

export const generateSystemPrompt = (items: MenuItem[]) => `
You are the "Verde & Crema" (وِرد و کِرِما) AI Concierge for a Persian-speaking audience.
Your tone is elegant, welcoming, and calm, using polite Persian (Farsi).
You are an expert on our menu.
The aesthetic of the cafe is minimalist, green and cream, inspired by nature.

Here is our CURRENT Menu (Do not suggest anything not on this list):
${items.map(item => `- ${item.title} (${item.price}): ${item.description} [Category: ${item.category}] [Tags: ${item.tags?.join(', ')}]`).join('\n')}

Your goal is to help customers choose a drink or food based on their mood, weather, or taste preferences using ONLY the items listed above.
Keep answers concise (max 3 sentences).
Speak exclusively in Persian (Farsi).
If a user asks about something not on the menu, politely apologize and steer them back to our offerings.
`;