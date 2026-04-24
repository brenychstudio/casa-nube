import type {Metadata} from 'next';
import {AppLocale, routing} from '@/i18n/routing';

const siteUrl = 'https://casa-nube.pages.dev';
const brand = 'Casa Nube';
const defaultOgImage = '/og/casa-nube-og.png';

const localeConfig: Record<AppLocale, {label: string; ogLocale: string}> = {
  es: {label: 'es-ES', ogLocale: 'es_ES'},
  en: {label: 'en-GB', ogLocale: 'en_GB'},
  ca: {label: 'ca-ES', ogLocale: 'ca_ES'}
};

const pageCopy: Record<'home' | 'menu' | 'visit', Record<AppLocale, {title: string; description: string}>> = {
  home: {
    es: {
      title: 'Café de especialidad y brunch en Barcelona',
      description: 'Casa Nube es un café premium en Eixample con café de especialidad, brunch tranquilo y terraza luminosa todo el día.'
    },
    en: {
      title: 'Specialty coffee & all-day brunch in Barcelona',
      description: 'Casa Nube is a premium Eixample café for specialty coffee, calm all-day brunch and terrace moments in natural light.'
    },
    ca: {
      title: 'Cafè d’especialitat i brunch a Barcelona',
      description: 'Casa Nube és un cafè premium a l’Eixample amb cafè d’especialitat, brunch tot el dia i terrassa amb llum natural.'
    }
  },
  menu: {
    es: {
      title: 'Menú de café, brunch y pastelería',
      description: 'Descubre la carta de Casa Nube: espresso de origen, brunch todo el día, pastelería de horno y bebidas estacionales.'
    },
    en: {
      title: 'Coffee, brunch and pastry menu',
      description: 'Explore Casa Nube’s menu with house espresso, all-day brunch plates, baked pastries and seasonal drinks.'
    },
    ca: {
      title: 'Menú de cafè, brunch i pastisseria',
      description: 'Descobreix la carta de Casa Nube amb espresso d’origen, brunch tot el dia, pastisseria de forn i begudes estacionals.'
    }
  },
  visit: {
    es: {
      title: 'Visítanos en Eixample, Barcelona',
      description: 'Horario, dirección y reservas de Casa Nube en Carrer de la Diputació 215, a pocos minutos de Passeig de Sant Joan.'
    },
    en: {
      title: 'Visit us in Eixample, Barcelona',
      description: 'Plan your Casa Nube visit with opening hours, location and reservation details near Passeig de Sant Joan.'
    },
    ca: {
      title: 'Visita’ns a l’Eixample, Barcelona',
      description: 'Planifica la visita a Casa Nube amb horaris, adreça i reserves a Carrer de la Diputació 215.'
    }
  }
};

function localeAlternates(pathname: string) {
  return routing.locales.reduce<Record<string, string>>((acc, locale) => {
    acc[localeConfig[locale].label] = `/${locale}${pathname}`;
    return acc;
  }, {});
}

export function buildPageMetadata(locale: AppLocale, page: keyof typeof pageCopy, pathname: string): Metadata {
  const copy = pageCopy[page][locale];
  const localizedUrl = `/${locale}${pathname}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: localizedUrl,
      languages: {
        ...localeAlternates(pathname),
        'x-default': `/es${pathname}`
      }
    },
    openGraph: {
      type: 'website',
      siteName: brand,
      title: `${copy.title} | ${brand}`,
      description: copy.description,
      url: localizedUrl,
      locale: localeConfig[locale].ogLocale,
      images: [{url: defaultOgImage, width: 1200, height: 630, alt: 'Casa Nube Barcelona café interior mood'}]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.title} | ${brand}`,
      description: copy.description,
      images: [defaultOgImage]
    }
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand} | Barcelona`,
    template: `%s | ${brand}`
  },
  description: 'Casa Nube is a premium multilingual Barcelona café demo focused on specialty coffee, calm hospitality and all-day brunch.',
  applicationName: brand,
  category: 'food',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
};
