import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';

type HeroProps = {
  locale: AppLocale;
};

export function Hero({locale}: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_18px_50px_-40px_rgba(58,45,30,0.5)] md:px-10 md:py-12 lg:px-14 lg:py-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-amber-50/70 to-transparent" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-stone-500">{t('eyebrow')}</p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold text-stone-900 md:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
            {t('headline')}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-600">{t('supporting')}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}#menu`}
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={`/${locale}#reserve`}
              className="inline-flex items-center rounded-full border border-stone-300 bg-white/60 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-[1.8rem] border border-stone-200/80 bg-[linear-gradient(150deg,#f9f6f1_0%,#f2ece3_48%,#efe8dd_100%)] p-5 md:min-h-[25rem] md:p-7">
          <div className="absolute inset-x-7 top-7 h-24 rounded-[1.25rem] border border-white/70 bg-white/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.5),transparent_58%)]" />

          <div className="absolute bottom-7 left-7 right-7 space-y-3">
            <div className="rounded-[1.25rem] border border-stone-300/55 bg-white/80 px-5 py-4 shadow-[0_20px_35px_-32px_rgba(36,28,20,0.5)] backdrop-blur-[1px]">
              <p className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-stone-500">Casa Nube</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">Barcelona · Natural light · Open daily</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-stone-600">
              <div className="rounded-2xl border border-stone-300/60 bg-white/65 px-4 py-3">Specialty coffee</div>
              <div className="rounded-2xl border border-stone-300/60 bg-white/65 px-4 py-3">Warm kitchen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
