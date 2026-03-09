import Link from 'next/link';
import {AppLocale} from '@/i18n/routing';

const locales: AppLocale[] = ['es', 'en', 'ca'];

type LocaleSwitcherProps = {
  currentLocale: AppLocale;
};

export function LocaleSwitcher({currentLocale}: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-1.5 text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`rounded-full px-2.5 py-1 transition ${
            locale === currentLocale
              ? 'bg-stone-900 text-stone-50'
              : 'hover:bg-stone-200/70 hover:text-stone-700'
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
