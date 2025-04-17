import React, { createContext, useState, useContext, useEffect } from 'react';
import { getRandomQuote } from '../data/quotes';
import { useLanguage } from './LanguageContext';

// 创建语录上下文
const QuoteContext = createContext();

// 语录提供者组件
export const QuoteProvider = ({ children }) => {
  const { language } = useLanguage();
  const [currentQuote, setCurrentQuote] = useState('');
  
  // 初始化和语言变化时更新语录
  useEffect(() => {
    refreshQuote();
  }, [language]);
  
  // 刷新语录的函数
  const refreshQuote = () => {
    setCurrentQuote(getRandomQuote(language));
  };
  
  return (
    <QuoteContext.Provider value={{ currentQuote, refreshQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

// 自定义钩子，方便在组件中使用语录上下文
export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export default QuoteContext;
