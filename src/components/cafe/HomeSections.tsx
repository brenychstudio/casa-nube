import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="space-y-12 md:space-y-16">
      <section id="today" className="grid gap-7 border-y border-stone-200/80 py-9 md:grid-cols-[0.86fr_1.14fr] md:gap-10 md:py-12">
        <div className="space-y-4">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">{t('todayEyebrow')}</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('todayTitle')}</h2>
          <p className="max-w-md text-sm leading-7 text-stone-600">{t('todayIntro')}</p>
        </div>
        <div className="space-y-5">
          <p className="max-w-2xl text-base leading-8 text-stone-600">{t('todayCopy')}</p>
          <div className="grid gap-2.5 text-sm text-stone-700 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">{t('todayHours')}</div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">{t('todayBrunch')}</div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">{t('todayTerrace')}</div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">{t('todayWalkIn')}</div>
          </div>
          <div className="grid gap-4 rounded-[1.4rem] border border-stone-200/80 bg-[color:var(--color-surface-alt)] p-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:p-5">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('todaySeasonalLabel')}</p>
              <p className="text-sm leading-7 text-stone-700">{t('todaySeasonalNote')}</p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-[1.1rem] sm:h-36">
              <Image
                src="/cafe/casa-nube-05-window-light.png"
                alt="Morning light near Casa Nube window seating"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="grid gap-7 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-10">
        <div className="space-y-5">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">{t('menuEyebrow')}</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('menuTitle')}</h2>
          <p className="max-w-xl text-base leading-8 text-stone-600">{t('menuCopy')}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 p-4">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('menuCoffeeLabel')}</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{t('menuCoffeeItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 p-4">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('menuBrunchLabel')}</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{t('menuBrunchItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 p-4">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('menuPastriesLabel')}</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{t('menuPastriesItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/80 bg-white/80 p-4">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('menuSeasonalLabel')}</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">{t('menuSeasonalItem')}</p>
            </article>
          </div>
          <Link
            href={`/${locale}#reserve`}
            className="inline-flex rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
          >
            {t('menuCta')}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <article className="col-span-2 grid gap-3 rounded-[1.4rem] border border-stone-200/80 bg-[color:var(--color-surface-alt)] p-4 sm:grid-cols-[1.2fr_0.8fr] sm:gap-4 sm:p-5">
            <div className="relative h-48 overflow-hidden rounded-[1rem] sm:h-auto sm:min-h-44">
              <Image
                src="/cafe/casa-nube-06-brunch.png"
                alt="Brunch plate at Casa Nube"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 45vw"
              />
            </div>
            <div className="space-y-3 rounded-[1rem] bg-white/70 p-4">
              <p className="text-xs tracking-[0.14em] uppercase text-stone-500">{t('menuKitchenLabel')}</p>
              <p className="text-sm leading-7 text-stone-700">{t('menuKitchenNote')}</p>
              <div className="relative h-24 overflow-hidden rounded-[0.9rem]">
                <Image
                  src="/cafe/casa-nube-02-coffee-detail.png"
                  alt="Coffee and crema detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 22vw"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="space" className="space-y-6 border-y border-stone-200/75 py-9 md:space-y-7 md:py-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">{t('spaceEyebrow')}</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('spaceTitle')}</h2>
          <p className="text-base leading-8 text-stone-600">{t('spaceCopy')}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.16fr_0.84fr]">
          <div className="space-y-3">
            <div className="relative h-72 overflow-hidden rounded-[1.7rem] md:h-[25rem]">
              <Image
                src="/cafe/casa-nube-04-terrace.png"
                alt="Casa Nube terrace seating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <p className="text-sm leading-7 text-stone-600">{t('spaceCaptionMain')}</p>
          </div>
          <div className="grid gap-4 md:pt-8">
            <div>
              <div className="relative h-48 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cafe/casa-nube-03-barista.png"
                  alt="Barista preparing coffee at Casa Nube"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2 text-sm leading-7 text-stone-600">{t('spaceCaptionBar')}</p>
            </div>
            <div>
              <div className="relative h-44 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cafe/casa-nube-05-window-light.png"
                  alt="Soft window light in Casa Nube"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2 text-sm leading-7 text-stone-600">{t('spaceCaptionWindow')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="grid gap-6 rounded-[1.6rem] border border-stone-200/80 bg-white/65 p-6 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10 md:p-8">
        <div className="space-y-4">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">{t('storyEyebrow')}</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('storyTitle')}</h2>
          <p className="max-w-xl text-base leading-8 text-stone-600">{t('storyCopy')}</p>
        </div>
        <div className="grid gap-3 text-sm leading-7 text-stone-600">
          <p>{t('storyLineOne')}</p>
          <p>{t('storyLineTwo')}</p>
          <p>{t('storyLineThree')}</p>
        </div>
      </section>

      <section id="visit" className="rounded-[1.9rem] border border-stone-200/80 bg-[color:var(--color-surface)] p-6 md:p-10">
        <div id="reserve" className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div className="space-y-4">
            <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">{t('visitEyebrow')}</p>
            <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('visitTitle')}</h2>
            <p className="max-w-2xl text-base leading-8 text-stone-600">{t('visitCopy')}</p>
            <div className="grid gap-2.5 text-sm text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-white/85 px-4 py-3">{t('visitAddress')}</div>
              <div className="rounded-2xl border border-stone-200 bg-white/85 px-4 py-3">{t('visitNeighborhood')}</div>
              <div className="rounded-2xl border border-stone-200 bg-white/85 px-4 py-3">{t('visitHours')}</div>
              <div className="rounded-2xl border border-stone-200 bg-white/85 px-4 py-3">{t('visitPolicy')}</div>
            </div>
          </div>
          <div className="grid gap-2.5 text-sm">
            <Link
              href="https://maps.google.com"
              className="rounded-full border border-stone-300 bg-white/85 px-5 py-2.5 text-center font-medium text-stone-800 transition hover:border-stone-900"
            >
              {t('visitCtaMaps')}
            </Link>
            <Link
              href="https://wa.me/34930000000"
              className="rounded-full border border-stone-300 bg-white/85 px-5 py-2.5 text-center font-medium text-stone-800 transition hover:border-stone-900"
            >
              {t('visitCtaWhatsApp')}
            </Link>
            <Link
              href={`/${locale}#reserve`}
              className="rounded-full border border-stone-900 bg-stone-900 px-5 py-2.5 text-center font-medium text-white transition hover:bg-stone-700"
            >
              {t('visitCtaReserve')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
