import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';

type HeroProps = {
  locale: AppLocale;
};

export function Hero({locale}: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="grid gap-8 rounded-3xl border border-stone-200 bg-[color:var(--color-surface)] p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-10 md:p-10">
      <div>
        <p className="text-xs tracking-[0.16em] uppercase text-stone-500">{t('eyebrow')}</p>
        <h1 className="mt-4 text-3xl leading-tight font-semibold text-stone-900 md:text-5xl">
          {t('headline')}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 md:text-base">{t('supporting')}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/${locale}#menu`}
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href={`/${locale}#reserve`}
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </div>
      <div className="relative h-72 overflow-hidden rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50 md:h-[22rem]">
        <div className="absolute inset-6 rounded-2xl border border-white/70 bg-white/50" />
        <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-stone-200 bg-white/85 p-4 shadow-sm">
          <p className="text-xs tracking-[0.12em] uppercase text-stone-500">Casa Nube</p>
          <p className="mt-1 text-sm text-stone-700">Barcelona · Editorial café atmosphere</p>
        </div>
      </div>
    </section>
  );
}
