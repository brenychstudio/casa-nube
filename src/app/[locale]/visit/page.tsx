import Image from 'next/image';
import Link from 'next/link';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {Footer} from '@/components/cafe/Footer';
import {getVisitData} from '@/data/visit';
import {routing, AppLocale} from '@/i18n/routing';
import {buildPageMetadata} from '@/lib/metadata';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return buildPageMetadata(locale as AppLocale, 'visit', '/visit');
}

export default async function LocaleVisitPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const visit = getVisitData(locale);

  return (
    <main className="mx-auto w-full max-w-[78rem] space-y-11 px-4 pb-24 pt-5 md:space-y-[4.1rem] md:px-8 md:pb-20 md:pt-9 lg:space-y-[4.6rem]">
      <section className="overflow-hidden rounded-[1.6rem] border border-stone-200/75 bg-[color:var(--color-surface)] p-5 shadow-[0_24px_52px_-44px_rgba(58,45,30,0.48)] md:p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-8">
          <div className="space-y-3.5 md:space-y-4">
            <p className="text-[0.62rem] font-medium tracking-[0.19em] uppercase text-stone-500">{visit.eyebrow}</p>
            <h1 className="text-[2rem] leading-[1.08] font-semibold text-stone-900 md:text-[2.6rem]">{visit.title}</h1>
            <p className="max-w-2xl text-[0.95rem] leading-7 text-stone-600 md:text-[1rem] md:leading-8">{visit.intro}</p>
            <p className="rounded-2xl border border-stone-200/75 bg-white/75 px-4 py-2.5 text-[0.82rem] text-stone-700">{visit.practicalNote}</p>
          </div>
          <div className="relative h-44 overflow-hidden rounded-[1.15rem] md:h-52">
            <Image
              src="/cafe/casa-nube-04-terrace.png"
              alt="Terrace tables at Casa Nube"
              fill
              className="object-cover object-[50%_58%]"
              sizes="(max-width: 768px) 100vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-[1.3rem] border border-stone-200/75 bg-white/65 p-5 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-6 md:p-6">
        <div className="space-y-2.5">
          <h2 className="text-[1.45rem] font-semibold text-stone-900 md:text-[1.6rem]">{visit.hoursTitle}</h2>
          <p className="text-[0.9rem] leading-7 text-stone-600">{visit.hoursIntro}</p>
        </div>
        <div className="space-y-3">
          {visit.hours.map((entry) => (
            <div key={entry.label} className="rounded-2xl border border-stone-200/75 bg-white/80 px-4 py-3.5">
              <div className="flex items-start justify-between gap-4 text-[0.9rem] text-stone-800">
                <p className="font-medium">{entry.label}</p>
                <p className="font-medium">{entry.hours}</p>
              </div>
              {entry.note && <p className="mt-1.5 text-[0.8rem] leading-6 text-stone-600">{entry.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="reservations" className="grid gap-4 border-t border-b border-stone-200/75 py-8 md:grid-cols-[1fr_1fr] md:gap-8 md:py-10">
        <div className="space-y-2.5">
          <h2 className="text-[1.45rem] font-semibold text-stone-900 md:text-[1.6rem]">{visit.reservationTitle}</h2>
          <p className="text-[0.9rem] leading-7 text-stone-600">{visit.reservationIntro}</p>
        </div>
        <ul className="space-y-2.5 text-[0.88rem] leading-7 text-stone-700">
          {visit.reservationPoints.map((point) => (
            <li key={point} className="rounded-xl border border-stone-200/70 bg-white/70 px-4 py-2.5">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-5 md:grid-cols-[1.02fr_0.98fr] md:gap-8">
        <article className="space-y-4 rounded-[1.35rem] border border-stone-200/75 bg-[color:var(--color-surface-alt)] p-5 md:p-6">
          <div className="space-y-2">
            <h2 className="text-[1.45rem] font-semibold text-stone-900 md:text-[1.6rem]">{visit.locationTitle}</h2>
            <p className="text-[0.9rem] leading-7 text-stone-600">{visit.locationIntro}</p>
          </div>
          <dl className="space-y-3 text-[0.86rem]">
            <div className="rounded-xl border border-stone-200/75 bg-white/75 px-4 py-3">
              <dt className="text-[0.68rem] tracking-[0.14em] uppercase text-stone-500">{visit.addressLabel}</dt>
              <dd className="mt-1.5 text-stone-800">{visit.address}</dd>
            </div>
            <div className="rounded-xl border border-stone-200/75 bg-white/75 px-4 py-3">
              <dt className="text-[0.68rem] tracking-[0.14em] uppercase text-stone-500">{visit.neighborhoodLabel}</dt>
              <dd className="mt-1.5 text-stone-800">{visit.neighborhood}</dd>
            </div>
            <div className="rounded-xl border border-stone-200/75 bg-white/75 px-4 py-3">
              <dt className="text-[0.68rem] tracking-[0.14em] uppercase text-stone-500">{visit.arrivalLabel}</dt>
              <dd className="mt-1.5 leading-6 text-stone-700">{visit.arrival}</dd>
            </div>
          </dl>
        </article>

        <article className="space-y-4 rounded-[1.35rem] border border-stone-200/75 bg-white/75 p-5 md:p-6">
          <h2 className="text-[1.45rem] font-semibold text-stone-900 md:text-[1.6rem]">{visit.actionsTitle}</h2>
          <div className="grid gap-2.5 text-sm">
            {visit.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`rounded-full px-5 py-2.5 text-center font-medium transition ${
                  action.primary
                    ? 'border border-stone-900 bg-stone-900 text-stone-50 hover:bg-stone-800'
                    : 'border border-stone-300 bg-white text-stone-800 hover:border-stone-900'
                }`}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-4 rounded-[1.3rem] border border-stone-200/75 bg-white/65 p-5 md:p-6">
        <h2 className="text-[1.45rem] font-semibold text-stone-900 md:text-[1.6rem]">{visit.practicalTitle}</h2>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {visit.practicalNotes.map((item) => (
            <article key={item.title} className="rounded-xl border border-stone-200/75 bg-white/80 px-4 py-3">
              <h3 className="text-[0.8rem] tracking-[0.12em] uppercase text-stone-500">{item.title}</h3>
              <p className="mt-1.5 text-[0.86rem] leading-6 text-stone-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
