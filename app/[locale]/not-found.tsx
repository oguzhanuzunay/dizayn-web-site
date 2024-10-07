import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('404');

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl">{t('notFoundTitle')}</h1>
      <p className="mb-8 text-lg">{t('notFoundMessage')}</p>
      <Link
        href="/"
        className="text-blue-500 underline"
      >
        {t('goHome')}
      </Link>
    </div>
  );
}
