'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {AppLocale} from '@/i18n/routing';

const locales: AppLocale[] = ['es', 'en', 'ca'];

type LocaleSwitcherProps = {
  currentLocale: AppLocale;
};

export function LocaleSwitcher({currentLocale}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/(es|en|ca)(?=\/|$)/, '');
  const localizedPath = pathWithoutLocale || '/';

  return (
    <div className="flex items-center gap-1 text-[0.62rem] tracking-[0.16em] uppercase text-stone-500 md:gap-1.5">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${localizedPath === '/' ? '' : localizedPath}`}
          className={`rounded-full px-2.5 py-1 transition ${
            locale === currentLocale
              ? 'bg-stone-900 text-stone-50 shadow-[0_6px_16px_-14px_rgba(28,20,11,0.95)]'
              : 'hover:bg-stone-200/75 hover:text-stone-700'
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
