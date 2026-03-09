import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {Header} from '@/components/cafe/Header';
import {MobileActionBar} from '@/components/cafe/MobileActionBar';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-[color:var(--color-page)] pb-24 md:pb-0">
        <Header locale={locale} />
        {children}
        <MobileActionBar locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
