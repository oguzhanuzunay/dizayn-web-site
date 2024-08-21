export default function useLocaleLabel() {
  const t = useLocaleLabel('useLocaleLabel');
 
  function getLocaleLabel(locale: 'tr' | 'en') {
    return t('label', {locale});
  }
 
  return getLocaleLabel;
}