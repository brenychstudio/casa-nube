import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {Reveal} from '@/components/motion/Reveal';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="cn-footer">
      <Reveal
        as="div"
        variant="up"
        className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-stone-900">
            Casa Nube
          </p>
          <p className="mt-2.5 text-[0.82rem] text-stone-500">
            Barcelona, Spain
          </p>
        </div>
        <nav
          aria-label="Casa Nube footer navigation"
          className="flex flex-wrap items-center gap-5 text-[0.82rem] font-medium"
        >
          <Link
            href="https://instagram.com/casanube.barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className="cn-footer-link cn-link-motion"
          >
            {t('instagram')}
          </Link>
          <Link
            href="https://wa.me/34930000000"
            target="_blank"
            rel="noopener noreferrer"
            className="cn-footer-link cn-link-motion"
          >
            {t('whatsapp')}
          </Link>
          <Link href={`/${locale}/visit`} className="cn-footer-link cn-link-motion">
            {t('maps')}
          </Link>
        </nav>
      </Reveal>

      <div className="mt-7 flex flex-col gap-2 border-t border-stone-950/[0.06] pt-5 text-[0.72rem] leading-5 text-stone-400 md:mt-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Casa Nube</p>

        <p>
          Design &amp; development —{' '}
          <Link
            href="https://brenychstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cn-footer-link cn-link-motion font-medium text-stone-500"
          >
            brenychstudio
          </Link>
        </p>
      </div>
    </footer>
  );
}
