import {Hero} from '@/components/cafe/Hero';
import {HomeSections} from '@/components/cafe/HomeSections';
import {Footer} from '@/components/cafe/Footer';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

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
    <main className="mx-auto w-full max-w-6xl space-y-6 px-5 py-6 md:space-y-8 md:px-8 md:py-10">
      <Hero locale={locale} />
      <HomeSections />
      <Footer />
    </main>
  );
}
