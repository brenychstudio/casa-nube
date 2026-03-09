import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-stone-200/70 pt-8 pb-10 md:pt-9 md:pb-11">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.82rem] font-semibold tracking-[0.16em] uppercase text-stone-800">Casa Nube</p>
          <p className="mt-1.5 text-[0.8rem] text-stone-600">Barcelona, Spain</p>
        </div>
        <div className="flex flex-wrap items-center gap-3.5 text-[0.8rem] font-medium text-stone-600">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-stone-900">{t('instagram')}</Link>
          <Link href="https://wa.me/34930000000" target="_blank" rel="noopener noreferrer" className="transition hover:text-stone-900">{t('whatsapp')}</Link>
          <Link href={`/${locale}/visit`} className="transition hover:text-stone-900">{t('maps')}</Link>
        </div>
      </div>
    </footer>
  );
}
