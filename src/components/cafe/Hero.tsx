import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';

type HeroProps = {
  locale: AppLocale;
};

export function Hero({locale}: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden rounded-[1.9rem] border border-stone-200/75 bg-[color:var(--color-surface)] px-6 py-8 shadow-[0_20px_45px_-42px_rgba(58,45,30,0.55)] md:px-10 md:py-12 lg:px-14 lg:py-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-amber-50/45 to-transparent" />
      <div className="relative grid gap-9 lg:grid-cols-[1.03fr_0.97fr] lg:items-end lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-[0.64rem] font-medium tracking-[0.2em] uppercase text-stone-500">{t('eyebrow')}</p>
          <h1 className="mt-4 text-[2.2rem] leading-[1.08] font-semibold text-stone-900 md:text-[3rem] lg:text-[3.4rem] lg:leading-[1.03]">
            {t('headline')}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-7 text-stone-600 md:text-base">{t('supporting')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-2.5 md:gap-3">
            <Link
              href={`/${locale}#menu`}
              className="inline-flex items-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold tracking-[0.03em] text-stone-50 transition hover:bg-stone-800"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={`/${locale}#reserve`}
              className="inline-flex items-center rounded-full border border-stone-300/90 bg-white/55 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[19.5rem] overflow-hidden rounded-[1.7rem] md:min-h-[24.5rem]">
            <Image
              src="/cafe/casa-nube-01-hero-interior.png"
              alt="Casa Nube interior with soft natural light"
              fill
              className="object-cover object-[56%_center] md:object-[58%_center]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
            />
          </div>
          <div className="absolute -bottom-4 left-4 w-40 overflow-hidden rounded-[1.15rem] border border-white/75 shadow-[0_18px_30px_-24px_rgba(20,14,8,0.8)] md:-bottom-6 md:left-7 md:w-52">
            <Image
              src="/cafe/casa-nube-02-coffee-detail.png"
              alt="Coffee detail at Casa Nube"
              width={320}
              height={380}
              className="h-auto w-full object-cover object-[50%_36%]"
              sizes="(max-width: 768px) 10rem, 13rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
