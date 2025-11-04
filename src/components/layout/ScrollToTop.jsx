// src/components/layout/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Cuộn mượt mà, có thể đổi thành 'instant' nếu muốn nhanh
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;