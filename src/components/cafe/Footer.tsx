import {useTranslations} from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm md:p-8">
      <p className="text-lg font-semibold tracking-[0.08em] uppercase">Casa Nube</p>
      <p className="mt-2 text-sm text-stone-600">Barcelona, Spain</p>
      <div className="mt-5 flex gap-4 text-sm text-stone-700">
        <span>{t('instagram')}</span>
        <span>{t('whatsapp')}</span>
        <span>{t('maps')}</span>
      </div>
    </footer>
  );
}
