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
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[color:var(--color-page)]/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between px-5 py-4 md:px-8">
        <Link href={`/${locale}`} className="text-base font-semibold tracking-[0.12em] uppercase text-stone-900 md:text-lg">
          Casa Nube
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-stone-600 md:flex">
          <Link href={`/${locale}`} className="transition hover:text-stone-900">{t('home')}</Link>
          <Link href={`/${locale}#menu`} className="transition hover:text-stone-900">{t('menu')}</Link>
          <Link href={`/${locale}#visit`} className="transition hover:text-stone-900">{t('visit')}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href={`/${locale}#reserve`}
            className="hidden rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-stone-800 sm:inline-flex"
          >
            {t('reserve')}
          </Link>
        </div>
      </div>
    </header>
  );
}
