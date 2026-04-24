import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {AppLocale} from '@/i18n/routing';

type MobileActionBarProps = {
  locale: AppLocale;
};

export function MobileActionBar({locale}: MobileActionBarProps) {
  const t = useTranslations('mobileActions');

  return (
    <div className="fixed inset-x-3 bottom-3 z-30 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1.5 rounded-[1.45rem] border border-stone-950/10 bg-[#fffaf2]/88 p-1.5 shadow-[0_18px_45px_rgba(31,27,23,0.16)] backdrop-blur-xl">
        <Link
          href={`/${locale}/menu`}
          className="cn-button cn-button-quiet cn-interactive-lift min-h-11 px-3 text-[0.82rem]"
        >
          {t('menu')}
        </Link>
        <Link
          href={`/${locale}/visit#reservations`}
          className="cn-button cn-button-primary cn-interactive-lift min-h-11 px-3 text-[0.82rem]"
        >
          {t('reserve')}
        </Link>
        <Link
          href={`/${locale}/visit`}
          className="cn-button cn-button-quiet cn-interactive-lift min-h-11 px-3 text-[0.82rem]"
        >
          {t('maps')}
        </Link>
      </div>
    </div>
  );
}
