import {useTranslations} from 'next-intl';

function PlaceholderSection({
  id,
  title,
  copy
}: {
  id: string;
  title: string;
  copy: string;
}) {
  return (
    <section id={id} className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm md:p-10">
      <h2 className="text-xl font-semibold text-stone-900 md:text-2xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">{copy}</p>
    </section>
  );
}

export function HomeSections() {
  const t = useTranslations('home');

  return (
    <div className="space-y-6 md:space-y-8">
      <PlaceholderSection id="today" title={t('todayTitle')} copy={t('todayCopy')} />
      <PlaceholderSection id="menu" title={t('menuTitle')} copy={t('menuCopy')} />
      <PlaceholderSection id="space" title={t('spaceTitle')} copy={t('spaceCopy')} />
      <PlaceholderSection id="story" title={t('storyTitle')} copy={t('storyCopy')} />
      <PlaceholderSection id="visit" title={t('visitTitle')} copy={t('visitCopy')} />
    </div>
  );
}
