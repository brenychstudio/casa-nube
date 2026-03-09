import {Hero} from '@/components/cafe/Hero';
import {HomeSections} from '@/components/cafe/HomeSections';
import {Footer} from '@/components/cafe/Footer';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing, AppLocale} from '@/i18n/routing';
import {buildPageMetadata} from '@/lib/metadata';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return buildPageMetadata(locale as AppLocale, 'home', '');
}

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main className="mx-auto w-full max-w-[78rem] space-y-12 px-4 pb-24 pt-5 md:space-y-[4.25rem] md:px-8 md:pb-20 md:pt-9 lg:space-y-[4.75rem]">
      <Hero locale={locale} />
      <HomeSections />
      <Footer />
    </main>
  );
}
