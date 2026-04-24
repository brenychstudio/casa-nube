'use client';

import Link from 'next/link';
import {useSelectedLayoutSegment} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';
import {LocaleSwitcher} from './LocaleSwitcher';

type HeaderProps = {
  locale: AppLocale;
};

export function Header({locale}: HeaderProps) {
  const t = useTranslations('nav');
  const segment = useSelectedLayoutSegment();

  const linkClass = (isActive: boolean) =>
    `cn-link-motion text-[0.82rem] font-medium ${isActive ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'}`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-[color:var(--color-page)]/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between px-4 py-3 md:px-8 md:py-3.5">
        <Link href={`/${locale}`} className="text-[0.86rem] font-semibold tracking-[0.16em] uppercase text-stone-900 sm:text-[0.9rem] md:text-[0.96rem]">
          Casa Nube
        </Link>

        <nav className="hidden items-center gap-7 text-[0.8rem] font-medium tracking-[0.03em] md:flex">
          <Link href={`/${locale}`} className={linkClass(segment === null)} aria-current={segment === null ? 'page' : undefined}>{t('home')}</Link>
          <Link href={`/${locale}/menu`} className={linkClass(segment === 'menu')} aria-current={segment === 'menu' ? 'page' : undefined}>{t('menu')}</Link>
          <Link href={`/${locale}/visit`} className={linkClass(segment === 'visit')} aria-current={segment === 'visit' ? 'page' : undefined}>{t('visit')}</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-2.5">
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href={`/${locale}/visit#reservations`}
            className="cn-button cn-button-primary hidden h-9 min-h-9 px-5 text-[0.75rem] tracking-[0.02em] sm:inline-flex"
          >
            {t('reserve')}
          </Link>
        </div>
      </div>
    </header>
  );
}
