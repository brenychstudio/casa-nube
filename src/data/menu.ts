import {AppLocale} from '@/i18n/routing';

export type MenuItem = {name: string; description: string; price: string; note?: string};
export type MenuCategory = {id: string; title: string; description?: string; items: MenuItem[]};
export type MenuPageData = {
  title: string;
  intro: string;
  serviceNote: string;
  jumpLabel: string;
  categories: MenuCategory[];
  seasonalNoteTitle: string;
  seasonalNote: string;
  ctaMenuLabel: string;
  ctaReserveLabel: string;
};

const menuByLocale: Record<AppLocale, MenuPageData> = {
  en: {
    title: 'Menu',
    intro: 'Specialty coffee, calm all-day brunch, and pastries baked fresh each morning in Eixample.',
    serviceNote: 'Served all day · Seasonal selection changes regularly · Walk-ins welcome',
    jumpLabel: 'Jump to',
    categories: [
      {id: 'coffee', title: 'Coffee', description: 'House espresso from rotating single-origin lots.', items: [
        {name: 'Espresso', description: 'Sweet chocolate, mandarin finish.', price: '€2.20', note: 'House favorite'},
        {name: 'Flat White', description: 'Double ristretto with silky microfoam.', price: '€3.80'},
        {name: 'V60 Filter', description: 'Ethiopia Guji, jasmine and peach profile.', price: '€4.50'},
        {name: 'Cold Brew', description: '18-hour brew over clear ice.', price: '€4.20'}
      ]},
      {id: 'tea-matcha', title: 'Tea & Matcha', items: [
        {name: 'Sencha Midori', description: 'Clean and grassy Japanese green tea.', price: '€3.70'},
        {name: 'Genmaicha', description: 'Toasted rice notes, soft body.', price: '€3.90'},
        {name: 'Ceremonial Matcha Latte', description: 'Oat or dairy milk, whisked to order.', price: '€4.80', note: 'Vegan option'}
      ]},
      {id: 'pastries', title: 'Pastries', items: [
        {name: 'Butter Croissant', description: 'Laminated daily in small batches.', price: '€2.60'},
        {name: 'Cardamom Bun', description: 'Brown sugar glaze, warm spice.', price: '€3.20'},
        {name: 'Basque Cheesecake Slice', description: 'Creamy center, caramelized top.', price: '€4.90'}
      ]},
      {id: 'brunch', title: 'Brunch', items: [
        {name: 'Sourdough, Poached Eggs & Herb Labneh', description: 'Slow-roasted tomato and olive oil.', price: '€10.80'},
        {name: 'Truffle Mushroom Toast', description: 'Roasted mushrooms, pecorino, parsley.', price: '€11.90'},
        {name: 'Yogurt Bowl', description: 'Granola, seasonal fruit, orange blossom honey.', price: '€8.20'}
      ]},
      {id: 'seasonal-drinks', title: 'Seasonal Drinks', items: [
        {name: 'Orange Rosemary Espresso Tonic', description: 'Bright citrus, herbal finish.', price: '€5.40', note: 'Seasonal'},
        {name: 'Iced Matcha Cloud', description: 'Cold matcha, vanilla cream top.', price: '€5.60'},
        {name: 'House Cascara Spritz', description: 'Light sparkling brew with grapefruit peel.', price: '€5.20'}
      ]}
    ],
    seasonalNoteTitle: 'Kitchen note',
    seasonalNote: 'Brunch is served all day. Our pastry and seasonal drinks selection may vary slightly in the afternoon.',
    ctaMenuLabel: 'Back to home',
    ctaReserveLabel: 'Reserve'
  },
  es: {
    title: 'Menú',
    intro: 'Café de especialidad, brunch tranquilo todo el día y pastelería recién horneada cada mañana en Eixample.',
    serviceNote: 'Servicio todo el día · Selección estacional cambiante · Se atiende sin reserva',
    jumpLabel: 'Ir a',
    categories: [
      {id: 'coffee', title: 'Café', description: 'Espresso de la casa con origen único rotativo.', items: [
        {name: 'Espresso', description: 'Dulzor de cacao y final de mandarina.', price: '€2.20', note: 'Favorito de la casa'},
        {name: 'Flat White', description: 'Doble ristretto con microespuma sedosa.', price: '€3.80'},
        {name: 'V60 Filtrado', description: 'Etiopía Guji, perfil floral y melocotón.', price: '€4.50'},
        {name: 'Cold Brew', description: 'Extracción de 18 horas con hielo cristalino.', price: '€4.20'}
      ]},
      {id: 'tea-matcha', title: 'Té y Matcha', items: [
        {name: 'Sencha Midori', description: 'Té verde japonés limpio y vegetal.', price: '€3.70'},
        {name: 'Genmaicha', description: 'Notas de arroz tostado, cuerpo suave.', price: '€3.90'},
        {name: 'Matcha Latte ceremonial', description: 'Con leche de avena o láctea, batido al momento.', price: '€4.80', note: 'Opción vegana'}
      ]},
      {id: 'pastries', title: 'Pastelería', items: [
        {name: 'Croissant de mantequilla', description: 'Laminado diario en tandas pequeñas.', price: '€2.60'},
        {name: 'Roll de cardamomo', description: 'Glaseado suave y especia cálida.', price: '€3.20'},
        {name: 'Porción de tarta de queso vasca', description: 'Centro cremoso y superficie caramelizada.', price: '€4.90'}
      ]},
      {id: 'brunch', title: 'Brunch', items: [
        {name: 'Masa madre con huevos poché y labneh de hierbas', description: 'Tomate asado lento y aceite de oliva.', price: '€10.80'},
        {name: 'Tostada de setas y trufa', description: 'Setas asadas, pecorino y perejil.', price: '€11.90'},
        {name: 'Bowl de yogur', description: 'Granola, fruta de temporada y miel de azahar.', price: '€8.20'}
      ]},
      {id: 'seasonal-drinks', title: 'Bebidas estacionales', items: [
        {name: 'Espresso tonic de naranja y romero', description: 'Cítrico vivo y final herbal.', price: '€5.40', note: 'Estacional'},
        {name: 'Iced Matcha Cloud', description: 'Matcha frío con crema ligera de vainilla.', price: '€5.60'},
        {name: 'Cascara Spritz de la casa', description: 'Infusión burbujeante con piel de pomelo.', price: '€5.20'}
      ]}
    ],
    seasonalNoteTitle: 'Nota de cocina',
    seasonalNote: 'El brunch se sirve todo el día. La selección de pastelería y bebidas estacionales puede variar ligeramente por la tarde.',
    ctaMenuLabel: 'Volver al inicio',
    ctaReserveLabel: 'Reservar'
  },
  ca: {
    title: 'Menú',
    intro: 'Cafè d’especialitat, brunch calmat tot el dia i pastisseria acabada de fornejar cada matí a l’Eixample.',
    serviceNote: 'Servei tot el dia · Selecció estacional variable · Atenció sense reserva',
    jumpLabel: 'Ves a',
    categories: [
      {id: 'coffee', title: 'Cafè', description: 'Espresso de la casa amb origen únic rotatiu.', items: [
        {name: 'Espresso', description: 'Dolçor de cacau i final de mandarina.', price: '€2.20', note: 'Favorit de la casa'},
        {name: 'Flat White', description: 'Doble ristretto amb microescuma sedosa.', price: '€3.80'},
        {name: 'V60 Filtrat', description: 'Etiòpia Guji, perfil floral i préssec.', price: '€4.50'},
        {name: 'Cold Brew', description: 'Extracció de 18 hores amb gel transparent.', price: '€4.20'}
      ]},
      {id: 'tea-matcha', title: 'Te i Matcha', items: [
        {name: 'Sencha Midori', description: 'Te verd japonès net i vegetal.', price: '€3.70'},
        {name: 'Genmaicha', description: 'Notes d’arròs torrat, cos suau.', price: '€3.90'},
        {name: 'Matcha Latte ceremonial', description: 'Amb llet de civada o làctia, batut al moment.', price: '€4.80', note: 'Opció vegana'}
      ]},
      {id: 'pastries', title: 'Pastisseria', items: [
        {name: 'Croissant de mantega', description: 'Laminat diari en tandes petites.', price: '€2.60'},
        {name: 'Rotlle de cardamom', description: 'Glacejat suau i espècia càlida.', price: '€3.20'},
        {name: 'Porció de pastís de formatge basc', description: 'Centre cremós i superfície caramel·litzada.', price: '€4.90'}
      ]},
      {id: 'brunch', title: 'Brunch', items: [
        {name: 'Massa mare amb ous poché i labneh d’herbes', description: 'Tomàquet rostit lent i oli d’oliva.', price: '€10.80'},
        {name: 'Torrada de bolets i tòfona', description: 'Bolets rostits, pecorino i julivert.', price: '€11.90'},
        {name: 'Bol de iogurt', description: 'Granola, fruita de temporada i mel de taronger.', price: '€8.20'}
      ]},
      {id: 'seasonal-drinks', title: 'Begudes estacionals', items: [
        {name: 'Espresso tonic de taronja i romaní', description: 'Cítric viu i final herbal.', price: '€5.40', note: 'Estacional'},
        {name: 'Iced Matcha Cloud', description: 'Matcha fred amb crema lleugera de vainilla.', price: '€5.60'},
        {name: 'Cascara Spritz de la casa', description: 'Infusió amb bombolla i pell d’aranja.', price: '€5.20'}
      ]}
    ],
    seasonalNoteTitle: 'Nota de cuina',
    seasonalNote: 'El brunch se serveix tot el dia. La selecció de pastisseria i begudes estacionals pot variar lleugerament a la tarda.',
    ctaMenuLabel: 'Tornar a l’inici',
    ctaReserveLabel: 'Reservar'
  }
};

export function getMenuData(locale: AppLocale) {
  return menuByLocale[locale];
}
