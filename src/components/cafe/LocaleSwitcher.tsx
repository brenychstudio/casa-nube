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
          className={`cn-locale-pill ${
            locale === currentLocale
              ? 'cn-locale-pill-active'
              : 'cn-locale-pill-idle'
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
