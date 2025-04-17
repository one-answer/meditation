import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../translations';

// 创建语言上下文
const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  // 默认语言设置为中文
  const [language, setLanguage] = useState('zh');
  const [texts, setTexts] = useState(translations.zh);

  // 当语言改变时更新文本
  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  // 切换语言的函数
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，方便在组件中使用语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
