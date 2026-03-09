import {useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-stone-200/70 py-9 md:py-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.86rem] font-semibold tracking-[0.14em] uppercase text-stone-800">Casa Nube</p>
          <p className="mt-1.5 text-[0.82rem] text-stone-600">Barcelona, Spain</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[0.82rem] font-medium text-stone-600">
          <span>{t('instagram')}</span>
          <span>{t('whatsapp')}</span>
          <span>{t('maps')}</span>
        </div>
      </div>
    </footer>
  );
}
