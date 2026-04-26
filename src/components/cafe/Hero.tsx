import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';
import {Reveal} from '@/components/motion/Reveal';

type HeroProps = {
  locale: AppLocale;
};

export function Hero({locale}: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/70 bg-[color:var(--color-surface)] px-4 py-4 shadow-[0_24px_52px_-44px_rgba(58,45,30,0.48)] sm:px-5 sm:py-6 md:rounded-[2rem] md:px-9 md:py-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-amber-50/35 to-transparent" />
      <div className="relative grid gap-8 md:gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12">
        <Reveal variant="up" className="max-w-xl lg:max-w-2xl">
          <p className="text-[0.64rem] font-medium tracking-[0.2em] uppercase text-stone-500">{t('eyebrow')}</p>
          <h1 className="mt-3 max-w-[17ch] text-[1.72rem] leading-[1.08] font-semibold text-stone-900 sm:text-[2.35rem] md:mt-4 md:text-[2.8rem] lg:max-w-[16ch] lg:text-[3.25rem] lg:leading-[1.02]">
            {t('headline')}
          </h1>
          <p className="mt-4 max-w-[31rem] text-[0.92rem] leading-7 text-stone-600 md:mt-6 md:text-[0.99rem] lg:max-w-[33rem] lg:text-base">{t('supporting')}</p>
          <div className="mt-7 hidden items-start gap-2.5 sm:flex sm:flex-row sm:flex-wrap sm:items-center md:mt-8 md:gap-3">
            <Link
              href={`/${locale}/menu`}
              className="cn-button cn-button-primary cn-interactive-lift w-full sm:w-auto"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={`/${locale}#reserve`}
              className="cn-button cn-button-secondary cn-interactive-lift w-full sm:w-auto"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </Reveal>

        <Reveal variant="soft" delay={80} className="relative order-first lg:order-none">
          <div className="relative min-h-[15.75rem] overflow-hidden rounded-[1.35rem] sm:min-h-[19.75rem] md:min-h-[22.5rem] md:rounded-[1.7rem] lg:min-h-[24rem]">
            <Image
              src="/cafe/casa-nube-01-hero-interior.png"
              alt="Casa Nube interior with soft natural light"
              fill
              className="object-cover object-[59%_center] sm:object-[57%_center] md:object-[58%_center]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 38vw"
            />
          </div>
          <div className="absolute -bottom-3.5 left-3.5 w-32 overflow-hidden rounded-[1rem] border border-white/80 shadow-[0_18px_30px_-24px_rgba(20,14,8,0.75)] sm:w-40 md:-bottom-6 md:left-7 md:w-48 lg:w-52">
            <Image
              src="/cafe/casa-nube-02-coffee-detail.png"
              alt="Coffee detail at Casa Nube"
              width={320}
              height={380}
              className="h-auto w-full object-cover object-[50%_36%]"
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, 13rem"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
