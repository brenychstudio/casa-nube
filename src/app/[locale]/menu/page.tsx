import Image from 'next/image';
import Link from 'next/link';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {Footer} from '@/components/cafe/Footer';
import {getMenuData} from '@/data/menu';
import {routing} from '@/i18n/routing';

export default async function LocaleMenuPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const menu = getMenuData(locale);

  return (
    <main className="mx-auto w-full max-w-[78rem] space-y-11 px-4 pb-24 pt-5 md:space-y-[4.1rem] md:px-8 md:pb-20 md:pt-9 lg:space-y-[4.6rem]">
      <section className="overflow-hidden rounded-[1.6rem] border border-stone-200/70 bg-[color:var(--color-surface)] p-5 shadow-[0_24px_52px_-44px_rgba(58,45,30,0.48)] md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-8">
          <div className="space-y-3.5 md:space-y-4">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{menu.eyebrow}</p>
            <h1 className="text-[2rem] leading-[1.08] font-semibold text-stone-900 md:text-[2.6rem]">{menu.title}</h1>
            <p className="max-w-2xl text-[0.95rem] leading-7 text-stone-600 md:text-[1rem] md:leading-8">{menu.intro}</p>
            <p className="rounded-2xl border border-stone-200/75 bg-white/75 px-4 py-2.5 text-[0.82rem] text-stone-700">{menu.serviceNote}</p>
          </div>
          <div className="relative h-44 overflow-hidden rounded-[1.15rem] md:h-52">
            <Image
              src="/cafe/casa-nube-05-window-light.png"
              alt="Window table at Casa Nube"
              fill
              className="object-cover object-[50%_63%]"
              sizes="(max-width: 768px) 100vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="space-y-5 border-y border-stone-200/75 py-8 md:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <p className="text-[0.66rem] tracking-[0.17em] uppercase text-stone-500">{menu.jumpLabel}</p>
          <nav className="flex flex-wrap gap-2.5 text-[0.81rem] text-stone-700">
            {menu.categories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="rounded-full border border-stone-200/80 bg-white/70 px-3 py-1.5 transition hover:border-stone-400">
                {category.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-10 md:space-y-12">
          {menu.categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-24 space-y-4 border-t border-stone-200/75 pt-6 md:pt-7">
              <div className="space-y-1.5">
                <h2 className="text-[1.4rem] font-semibold text-stone-900 md:text-[1.55rem]">{category.title}</h2>
                {category.description && <p className="text-sm text-stone-600">{category.description}</p>}
              </div>
              <ul className="divide-y divide-stone-200/70 rounded-2xl border border-stone-200/70 bg-white/70">
                {category.items.map((item) => (
                  <li key={item.name} className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[0.95rem] font-medium text-stone-900">{item.name}</h3>
                        {item.note && <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[0.67rem] tracking-[0.05em] text-stone-600 uppercase">{item.note}</span>}
                      </div>
                      <p className="mt-1 text-[0.84rem] leading-6 text-stone-600 sm:text-[0.87rem]">{item.description}</p>
                    </div>
                    <p className="pt-0.5 text-[0.9rem] font-medium text-stone-800">{item.price}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="rounded-[1.3rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-5 md:p-6">
        <p className="text-[0.64rem] tracking-[0.16em] uppercase text-stone-500">{menu.seasonalNoteTitle}</p>
        <p className="mt-2 max-w-3xl text-[0.9rem] leading-7 text-stone-700">{menu.seasonalNote}</p>
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
          <Link href={`/${locale}/visit`} className="inline-flex justify-center rounded-full border border-stone-300 bg-white/75 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:border-stone-900">
            {menu.ctaVisitLabel}
          </Link>
          <Link href={`/${locale}#reserve`} className="inline-flex justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800">
            {menu.ctaReserveLabel}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
