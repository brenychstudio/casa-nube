import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {Reveal} from '@/components/motion/Reveal';

export function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="space-y-11 md:space-y-[4.1rem] lg:space-y-[4.6rem]">
      <section id="today" className="border-y border-stone-200/75 py-9 md:py-11 lg:py-12">
        <Reveal as="div" variant="up" className="grid gap-6 md:grid-cols-[0.88fr_1.12fr] md:gap-9">
          <div className="space-y-3.5">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('todayEyebrow')}</p>
            <h2 className="text-[1.85rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.25rem] lg:text-[2.4rem]">{t('todayTitle')}</h2>
            <p className="max-w-md text-[0.9rem] leading-7 text-stone-600 md:text-[0.92rem]">{t('todayIntro')}</p>
          </div>
          <div className="space-y-4 md:space-y-5">
            <p className="max-w-2xl text-[0.94rem] leading-7 text-stone-600 md:text-[0.97rem] md:leading-8">{t('todayCopy')}</p>
            <div className="grid gap-2.5 text-[0.83rem] text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayHours')}</div>
              <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayBrunch')}</div>
              <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayTerrace')}</div>
              <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayWalkIn')}</div>
            </div>
            <div className="grid gap-3.5 rounded-[1.35rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-4 sm:grid-cols-[1.08fr_0.92fr] sm:items-end sm:p-5">
              <div className="space-y-2">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('todaySeasonalLabel')}</p>
                <p className="text-[0.88rem] leading-7 text-stone-700">{t('todaySeasonalNote')}</p>
              </div>
              <div className="relative h-40 overflow-hidden rounded-[1.1rem] sm:h-[8.5rem] md:h-36">
                <Image
                  src="/cafe/casa-nube-05-window-light.png"
                  alt="Morning light near Casa Nube window seating"
                  fill
                  className="object-cover object-[50%_66%]"
                  sizes="(max-width: 768px) 100vw, 38vw"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="menu">
        <Reveal as="div" variant="up" delay={40} className="grid gap-6 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-9">
          <div className="space-y-4 md:space-y-5">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('menuEyebrow')}</p>
            <h2 className="text-[1.85rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.25rem] lg:text-[2.4rem]">{t('menuTitle')}</h2>
            <p className="max-w-xl text-[0.94rem] leading-7 text-stone-600 md:text-[0.97rem] md:leading-8">{t('menuCopy')}</p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              <article className="rounded-[1.1rem] border border-stone-200/70 bg-white/75 p-3.5 md:p-4">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuCoffeeLabel')}</p>
                <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuCoffeeItem')}</p>
              </article>
              <article className="rounded-[1.1rem] border border-stone-200/70 bg-white/75 p-3.5 md:p-4">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuBrunchLabel')}</p>
                <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuBrunchItem')}</p>
              </article>
              <article className="rounded-[1.1rem] border border-stone-200/70 bg-white/75 p-3.5 md:p-4">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuPastriesLabel')}</p>
                <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuPastriesItem')}</p>
              </article>
              <article className="rounded-[1.1rem] border border-stone-200/70 bg-white/75 p-3.5 md:p-4">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuSeasonalLabel')}</p>
                <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuSeasonalItem')}</p>
              </article>
            </div>
            <Link
              href={`/${locale}/menu`}
              className="cn-button cn-button-secondary cn-interactive-lift w-full sm:w-auto"
            >
              {t('menuCta')}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
            <article className="col-span-2 grid gap-3 rounded-[1.3rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-3.5 sm:grid-cols-[1.18fr_0.82fr] sm:gap-3.5 sm:p-[1.125rem]">
              <div className="relative h-44 overflow-hidden rounded-[1rem] sm:h-auto sm:min-h-40 md:min-h-44">
                <Image
                  src="/cafe/casa-nube-06-brunch.png"
                  alt="Brunch plate at Casa Nube"
                  fill
                  className="object-cover object-[50%_62%]"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>
              <div className="space-y-3 rounded-[1rem] bg-white/60 p-4">
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuKitchenLabel')}</p>
                <p className="text-[0.88rem] leading-7 text-stone-700">{t('menuKitchenNote')}</p>
                <div className="relative h-24 overflow-hidden rounded-[0.9rem]">
                  <Image
                    src="/cafe/casa-nube-02-coffee-detail.png"
                    alt="Coffee and crema detail"
                    fill
                    className="object-cover object-[50%_35%]"
                    sizes="(max-width: 640px) 90vw, 22vw"
                  />
                </div>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section
        id="space"
        className="border-y border-stone-200/75 py-10 md:py-12 lg:py-14"
      >
        <Reveal as="div" variant="up" className="grid gap-5 lg:grid-cols-[0.74fr_0.9fr] lg:items-end lg:gap-12">
          <div className="max-w-2xl space-y-3.5">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.19em] text-stone-500">
              {t('spaceEyebrow')}
            </p>
            <h2 className="text-[1.9rem] font-semibold leading-[1.14] text-stone-900 md:text-[2.3rem] lg:text-[2.55rem]">
              {t('spaceTitle')}
            </h2>
            <p className="max-w-[39rem] text-[0.95rem] leading-7 text-stone-600 md:text-[0.98rem] md:leading-8">
              {t('spaceCopy')}
            </p>
          </div>

          <p className="max-w-[34rem] text-[0.9rem] leading-7 text-stone-500 lg:justify-self-end">
            {t('spaceCaptionWindow')}
          </p>
        </Reveal>

        <Reveal as="div" variant="soft" delay={120} className="mt-7 rounded-[1.9rem] border border-stone-950/8 bg-[#f8f4ed]/55 p-3 shadow-[0_20px_55px_-48px_rgba(43,34,25,0.55)] md:mt-8 md:p-4 lg:mt-9 lg:rounded-[2.15rem] lg:p-5">
          <div className="grid gap-4 lg:grid-cols-[1.32fr_0.68fr] lg:items-stretch">
            <figure className="group flex min-h-full flex-col">
              <div className="relative aspect-[16/10] flex-1 overflow-hidden rounded-[1.45rem] bg-[color:var(--color-surface-alt)] md:rounded-[1.75rem] lg:aspect-auto lg:min-h-[29rem]">
                <Image
                  src="/cafe/casa-nube-04-terrace.png"
                  alt="Casa Nube terrace seating"
                  fill
                  className="object-cover object-[50%_55%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
              <figcaption className="max-w-[42rem] px-1 pt-3 text-[0.84rem] leading-6 text-stone-500">
                {t('spaceCaptionMain')}
              </figcaption>
            </figure>

            <div className="grid gap-4">
              <figure className="group rounded-[1.45rem] border border-stone-950/8 bg-white/46 p-2 shadow-[0_14px_34px_-32px_rgba(43,34,25,0.5)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.15rem] bg-[color:var(--color-surface-alt)]">
                  <Image
                    src="/cafe/casa-nube-03-barista.png"
                    alt="Barista preparing coffee at Casa Nube"
                    fill
                    className="object-cover object-[60%_46%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <figcaption className="px-1.5 pt-3 text-[0.83rem] leading-6 text-stone-500">
                  {t('spaceCaptionBar')}
                </figcaption>
              </figure>

              <figure className="group rounded-[1.45rem] border border-stone-950/8 bg-white/46 p-2 shadow-[0_14px_34px_-32px_rgba(43,34,25,0.5)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.15rem] bg-[color:var(--color-surface-alt)]">
                  <Image
                    src="/cafe/casa-nube-05-window-light.png"
                    alt="Soft window light in Casa Nube"
                    fill
                    className="object-cover object-[52%_60%] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <figcaption className="px-1.5 pt-3 text-[0.83rem] leading-6 text-stone-500">
                  {t('spaceCaptionWindow')}
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="story">
        <Reveal as="div" variant="up" className="grid gap-5 rounded-[1.45rem] border border-stone-200/75 bg-white/55 p-[1.375rem] md:grid-cols-[1.04fr_0.96fr] md:items-start md:gap-8 md:p-[1.875rem]">
          <div className="space-y-4">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('storyEyebrow')}</p>
            <h2 className="text-[1.85rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.25rem] lg:text-[2.4rem]">{t('storyTitle')}</h2>
            <p className="max-w-xl text-[0.94rem] leading-7 text-stone-600 md:text-[0.97rem] md:leading-8">{t('storyCopy')}</p>
          </div>
          <div className="grid gap-2.5 text-[0.9rem] leading-7 text-stone-600 md:text-[0.92rem]">
            <p>{t('storyLineOne')}</p>
            <p>{t('storyLineTwo')}</p>
            <p>{t('storyLineThree')}</p>
          </div>
        </Reveal>
      </section>

      <section id="visit">
        <Reveal as="div" variant="up" delay={60} className="rounded-[1.7rem] border border-stone-200/75 bg-[color:var(--color-surface)] p-5 md:rounded-[1.9rem] md:p-8 lg:p-10">
          <div id="reserve" className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end md:gap-8">
            <div className="space-y-4">
              <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('visitEyebrow')}</p>
              <h2 className="text-[1.85rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.25rem] lg:text-[2.4rem]">{t('visitTitle')}</h2>
              <p className="max-w-2xl text-[0.94rem] leading-7 text-stone-600 md:text-[0.97rem] md:leading-8">{t('visitCopy')}</p>
              <div className="grid gap-2.5 text-[0.84rem] text-stone-700 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitAddress')}</div>
                <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitNeighborhood')}</div>
                <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitHours')}</div>
                <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitPolicy')}</div>
              </div>
            </div>
            <div className="grid gap-2.5 text-sm sm:max-w-sm md:max-w-none">
              <Link
                href="https://maps.google.com/?q=Carrer+de+la+Diputaci%C3%B3+215+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="cn-button cn-button-secondary cn-interactive-lift w-full"
              >
                {t('visitCtaMaps')}
              </Link>
              <Link
                href="https://wa.me/34930000000"
                target="_blank"
                rel="noopener noreferrer"
                className="cn-button cn-button-secondary cn-interactive-lift w-full"
              >
                {t('visitCtaWhatsApp')}
              </Link>
              <Link
                href={`/${locale}/visit#reservations`}
                className="cn-button cn-button-primary cn-interactive-lift w-full"
              >
                {t('visitCtaReserve')}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
