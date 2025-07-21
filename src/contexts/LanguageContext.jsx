import { useTranslation } from 'react-i18next'
import { LanguageContext } from './LanguageContextDefinition'

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const value = {
    currentLanguage: i18n.language,
    changeLanguage,
    t,
    languages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' }
    ]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
