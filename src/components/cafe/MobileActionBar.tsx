import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';

type MobileActionBarProps = {
  locale: AppLocale;
};

export function MobileActionBar({locale}: MobileActionBarProps) {
  const t = useTranslations('mobileActions');

  return (
    <div className="fixed right-0 bottom-0 left-0 z-30 border-t border-stone-200/75 bg-[color:var(--color-page)]/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 rounded-2xl border border-stone-200/75 bg-white/75 p-2">
        <Link href={`/${locale}#menu`} className="rounded-xl px-3 py-2 text-center text-sm font-medium text-stone-700">
          {t('menu')}
        </Link>
        <Link href={`/${locale}#reserve`} className="rounded-xl bg-stone-900 px-3 py-2 text-center text-sm font-medium text-stone-50">
          {t('reserve')}
        </Link>
        <Link href={`/${locale}#visit`} className="rounded-xl px-3 py-2 text-center text-sm font-medium text-stone-700">
          {t('maps')}
        </Link>
      </div>
    </div>
  );
}
