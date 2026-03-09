import Image from 'next/image';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="space-y-11 md:space-y-[4.1rem] lg:space-y-[4.6rem]">
      <section id="today" className="grid gap-6 border-y border-stone-200/75 py-9 md:grid-cols-[0.88fr_1.12fr] md:gap-9 md:py-11 lg:py-12">
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
      </section>

      <section id="menu" className="grid gap-6 md:grid-cols-[1.02fr_0.98fr] md:items-end md:gap-9">
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
            href={`/${locale}#reserve`}
            className="inline-flex w-full justify-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900 sm:w-auto"
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
      </section>

      <section id="space" className="space-y-5 border-y border-stone-200/75 py-9 md:space-y-6 md:py-11 lg:py-12">
        <div className="max-w-3xl space-y-3.5">
          <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{t('spaceEyebrow')}</p>
          <h2 className="text-[1.85rem] leading-[1.16] font-semibold text-stone-900 md:text-[2.25rem] lg:text-[2.4rem]">{t('spaceTitle')}</h2>
          <p className="max-w-[42rem] text-[0.94rem] leading-7 text-stone-600 md:text-[0.97rem] md:leading-8">{t('spaceCopy')}</p>
        </div>
        <div className="grid gap-3.5 md:grid-cols-[1.14fr_0.86fr] md:gap-4">
          <div className="space-y-3">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] sm:h-72 md:h-[23.5rem] md:rounded-[1.7rem]">
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
              <div className="relative h-44 overflow-hidden rounded-[1.35rem] md:h-48 md:rounded-[1.5rem]">
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
              <div className="relative h-40 overflow-hidden rounded-[1.35rem] md:h-44 md:rounded-[1.5rem]">
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

      <section id="story" className="grid gap-5 rounded-[1.45rem] border border-stone-200/75 bg-white/55 p-[1.375rem] md:grid-cols-[1.04fr_0.96fr] md:items-start md:gap-8 md:p-[1.875rem]">
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
      </section>

      <section id="visit" className="rounded-[1.7rem] border border-stone-200/75 bg-[color:var(--color-surface)] p-5 md:rounded-[1.9rem] md:p-8 lg:p-10">
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
