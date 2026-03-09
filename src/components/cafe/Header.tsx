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
    <header className="border-b border-stone-200/80 bg-[color:var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-[0.08em] uppercase">
          Casa Nube
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          <Link href={`/${locale}`} className="hover:text-stone-950">{t('home')}</Link>
          <Link href={`/${locale}#menu`} className="hover:text-stone-950">{t('menu')}</Link>
          <Link href={`/${locale}#visit`} className="hover:text-stone-950">{t('visit')}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href={`/${locale}#reserve`}
            className="hidden rounded-full border border-stone-900 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-stone-50 sm:inline-flex"
          >
            {t('reserve')}
          </Link>
        </div>
      </div>
    </header>
  );
}
