import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="space-y-14 md:space-y-[4.5rem]">
      <section id="today" className="grid gap-7 border-y border-stone-200/75 py-10 md:grid-cols-[0.86fr_1.14fr] md:gap-11 md:py-13">
        <div className="space-y-4">
          <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('todayEyebrow')}</p>
          <h2 className="text-[2rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.45rem]">{t('todayTitle')}</h2>
          <p className="max-w-md text-[0.92rem] leading-7 text-stone-600">{t('todayIntro')}</p>
        </div>
        <div className="space-y-5">
          <p className="max-w-2xl text-[0.97rem] leading-8 text-stone-600">{t('todayCopy')}</p>
          <div className="grid gap-2.5 text-[0.84rem] text-stone-700 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayHours')}</div>
            <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayBrunch')}</div>
            <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayTerrace')}</div>
            <div className="rounded-2xl border border-stone-200/70 bg-white/65 px-4 py-3">{t('todayWalkIn')}</div>
          </div>
          <div className="grid gap-4 rounded-[1.4rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-end sm:p-5">
            <div className="space-y-2">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('todaySeasonalLabel')}</p>
              <p className="text-[0.88rem] leading-7 text-stone-700">{t('todaySeasonalNote')}</p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-[1.1rem] sm:h-36">
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
      </section>

      <section id="menu" className="grid gap-7 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-11">
        <div className="space-y-5">
          <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('menuEyebrow')}</p>
          <h2 className="text-[2rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.45rem]">{t('menuTitle')}</h2>
          <p className="max-w-xl text-[0.97rem] leading-8 text-stone-600">{t('menuCopy')}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-[1.2rem] border border-stone-200/70 bg-white/75 p-4">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuCoffeeLabel')}</p>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuCoffeeItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/70 bg-white/75 p-4">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuBrunchLabel')}</p>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuBrunchItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/70 bg-white/75 p-4">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuPastriesLabel')}</p>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuPastriesItem')}</p>
            </article>
            <article className="rounded-[1.2rem] border border-stone-200/70 bg-white/75 p-4">
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-stone-500">{t('menuSeasonalLabel')}</p>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-700">{t('menuSeasonalItem')}</p>
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
          <article className="col-span-2 grid gap-3 rounded-[1.4rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-4 sm:grid-cols-[1.2fr_0.8fr] sm:gap-4 sm:p-5">
            <div className="relative h-48 overflow-hidden rounded-[1rem] sm:h-auto sm:min-h-44">
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
      </section>

      <section id="space" className="space-y-6 border-y border-stone-200/75 py-10 md:space-y-7 md:py-13">
        <div className="max-w-3xl space-y-4">
          <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('spaceEyebrow')}</p>
          <h2 className="text-[2rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.45rem]">{t('spaceTitle')}</h2>
          <p className="max-w-[42rem] text-[0.97rem] leading-8 text-stone-600">{t('spaceCopy')}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.16fr_0.84fr]">
          <div className="space-y-3">
            <div className="relative h-72 overflow-hidden rounded-[1.7rem] md:h-[25rem]">
              <Image
                src="/cafe/casa-nube-04-terrace.png"
                alt="Casa Nube terrace seating"
                fill
                className="object-cover object-[50%_58%]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <p className="text-[0.88rem] leading-7 text-stone-600">{t('spaceCaptionMain')}</p>
          </div>
          <div className="grid gap-4 md:pt-8">
            <div>
              <div className="relative h-48 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cafe/casa-nube-03-barista.png"
                  alt="Barista preparing coffee at Casa Nube"
                  fill
                  className="object-cover object-[54%_44%]"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-600">{t('spaceCaptionBar')}</p>
            </div>
            <div>
              <div className="relative h-44 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/cafe/casa-nube-05-window-light.png"
                  alt="Soft window light in Casa Nube"
                  fill
                  className="object-cover object-[50%_67%]"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <p className="mt-2 text-[0.88rem] leading-7 text-stone-600">{t('spaceCaptionWindow')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="grid gap-6 rounded-[1.6rem] border border-stone-200/75 bg-white/60 p-6 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10 md:p-8">
        <div className="space-y-4">
          <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('storyEyebrow')}</p>
          <h2 className="text-[2rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.45rem]">{t('storyTitle')}</h2>
          <p className="max-w-xl text-[0.97rem] leading-8 text-stone-600">{t('storyCopy')}</p>
        </div>
        <div className="grid gap-3 text-[0.92rem] leading-7 text-stone-600">
          <p>{t('storyLineOne')}</p>
          <p>{t('storyLineTwo')}</p>
          <p>{t('storyLineThree')}</p>
        </div>
      </section>

      <section id="visit" className="rounded-[1.9rem] border border-stone-200/75 bg-[color:var(--color-surface)] p-6 md:p-10">
        <div id="reserve" className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-end md:gap-9">
          <div className="space-y-4">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('visitEyebrow')}</p>
            <h2 className="text-[2rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.45rem]">{t('visitTitle')}</h2>
            <p className="max-w-2xl text-[0.97rem] leading-8 text-stone-600">{t('visitCopy')}</p>
            <div className="grid gap-2.5 text-[0.84rem] text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitAddress')}</div>
              <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitNeighborhood')}</div>
              <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitHours')}</div>
              <div className="rounded-2xl border border-stone-200/80 bg-white/80 px-4 py-3">{t('visitPolicy')}</div>
            </div>
          </div>
          <div className="grid gap-2.5 text-sm">
            <Link
              href="https://maps.google.com"
              className="rounded-full border border-stone-300 bg-white/80 px-5 py-2.5 text-center font-medium text-stone-800 transition hover:border-stone-900"
            >
              {t('visitCtaMaps')}
            </Link>
            <Link
              href="https://wa.me/34930000000"
              className="rounded-full border border-stone-300 bg-white/80 px-5 py-2.5 text-center font-medium text-stone-800 transition hover:border-stone-900"
            >
              {t('visitCtaWhatsApp')}
            </Link>
            <Link
              href={`/${locale}#reserve`}
              className="rounded-full border border-stone-900 bg-stone-900 px-5 py-2.5 text-center font-semibold tracking-[0.03em] text-white transition hover:bg-stone-700"
            >
              {t('visitCtaReserve')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
