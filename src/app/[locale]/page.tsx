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
    <main className="mx-auto w-full max-w-[78rem] space-y-12 px-5 pb-24 pt-7 md:space-y-16 md:px-8 md:pb-14 md:pt-10">
      <Hero locale={locale} />
      <HomeSections />
      <Footer />
    </main>
  );
}
