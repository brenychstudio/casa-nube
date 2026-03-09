import {useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-stone-200/80 py-10 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold tracking-[0.12em] uppercase">Casa Nube</p>
          <p className="mt-2 text-sm text-stone-600">Barcelona, Spain</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-stone-700">
          <span>{t('instagram')}</span>
          <span>{t('whatsapp')}</span>
          <span>{t('maps')}</span>
        </div>
      </div>
    </footer>
  );
}
