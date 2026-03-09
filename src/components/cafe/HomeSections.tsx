import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export function HomeSections() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="space-y-14 md:space-y-20">
      <section id="today" className="grid gap-8 border-y border-stone-200/80 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:py-14">
        <div>
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">Today</p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('todayTitle')}</h2>
        </div>
        <div className="space-y-6">
          <p className="max-w-2xl text-base leading-8 text-stone-600">{t('todayCopy')}</p>
          <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">08:00 — 19:00</div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">Brunch all day</div>
            <div className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-3">Takeaway ready</div>
          </div>
        </div>
      </section>

      <section id="menu" className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-12">
        <div className="space-y-5">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">Menu</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('menuTitle')}</h2>
          <p className="max-w-xl text-base leading-8 text-stone-600">{t('menuCopy')}</p>
          <Link
            href={`/${locale}#reserve`}
            className="inline-flex rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900"
          >
            Reserve a table
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <article className="rounded-[1.4rem] border border-stone-200/80 bg-white/80 p-5">
            <p className="text-xs tracking-[0.14em] uppercase text-stone-500">Coffee</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">Single origin espresso, filter and signature seasonal specials.</p>
          </article>
          <article className="rounded-[1.4rem] border border-stone-200/80 bg-white/80 p-5">
            <p className="text-xs tracking-[0.14em] uppercase text-stone-500">Kitchen</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">Warm plates, lighter brunch and a concise pastry selection.</p>
          </article>
          <article className="col-span-2 rounded-[1.4rem] border border-stone-200/80 bg-[color:var(--color-surface-alt)] p-5">
            <p className="text-xs tracking-[0.14em] uppercase text-stone-500">Seasonal note</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">Fresh citrus, almond cream and soft spice accents through the week.</p>
          </article>
        </div>
      </section>

      <section id="space" className="space-y-7 border-y border-stone-200/75 py-10 md:py-14">
        <div className="max-w-2xl space-y-4">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">Interiors</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('spaceTitle')}</h2>
          <p className="text-base leading-8 text-stone-600">{t('spaceCopy')}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-48 rounded-[1.6rem] border border-stone-200/70 bg-[linear-gradient(160deg,#efe6da_0%,#f7f4ee_65%,#fdfaf5_100%)]" />
          <div className="h-48 rounded-[1.6rem] border border-stone-200/70 bg-[linear-gradient(160deg,#f3ede3_0%,#faf6ef_100%)] md:translate-y-5" />
          <div className="h-48 rounded-[1.6rem] border border-stone-200/70 bg-[linear-gradient(160deg,#ece4d8_0%,#f7f2e9_100%)]" />
        </div>
      </section>

      <section id="story" className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
        <div className="space-y-4">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">Story</p>
          <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('storyTitle')}</h2>
          <p className="max-w-2xl text-base leading-8 text-stone-600">{t('storyCopy')}</p>
        </div>
        <p className="text-sm leading-7 text-stone-500 md:max-w-72">Designed for pause between meetings, mornings and evening walks.</p>
      </section>

      <section id="visit" className="rounded-[1.9rem] border border-stone-200/80 bg-[color:var(--color-surface)] p-6 md:p-10">
        <div id="reserve" className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-4">
            <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-stone-500">Visit</p>
            <h2 className="text-3xl leading-tight font-semibold text-stone-900 md:text-4xl">{t('visitTitle')}</h2>
            <p className="max-w-2xl text-base leading-8 text-stone-600">{t('visitCopy')}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white/85 px-5 py-4 text-sm text-stone-700">
            Carrer de la Diputació · Barcelona
          </div>
        </div>
      </section>
    </div>
  );
}
