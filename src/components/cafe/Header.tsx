import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';
import {LocaleSwitcher} from './LocaleSwitcher';

type HeaderProps = {
  locale: AppLocale;
};

export function Header({locale}: HeaderProps) {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/65 bg-[color:var(--color-page)]/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
        <Link href={`/${locale}`} className="text-[0.95rem] font-semibold tracking-[0.14em] uppercase text-stone-900 md:text-base">
          Casa Nube
        </Link>

        <nav className="hidden items-center gap-8 text-[0.82rem] font-medium tracking-[0.03em] text-stone-600 md:flex">
          <Link href={`/${locale}`} className="transition hover:text-stone-900">{t('home')}</Link>
          <Link href={`/${locale}#menu`} className="transition hover:text-stone-900">{t('menu')}</Link>
          <Link href={`/${locale}#visit`} className="transition hover:text-stone-900">{t('visit')}</Link>
        </nav>

        <div className="flex items-center gap-2.5 md:gap-3">
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href={`/${locale}#reserve`}
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-[0.78rem] font-semibold tracking-[0.04em] text-stone-50 transition hover:bg-stone-800 sm:inline-flex"
          >
            {t('reserve')}
          </Link>
        </div>
      </div>
    </header>
  );
}
