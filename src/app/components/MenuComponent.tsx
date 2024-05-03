// MenuComponent.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from "./generic/Logo";
import Slider from "./Slider";

const MenuComponent = () => {
  const router = useRouter();
  const [logoSize, setLogoSize] = useState('text-[12rem]');
  const [logoText, setLogoText] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setIsTransitioning(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    // Rest of your code...
  }, [router.pathname, isTransitioning]);

  // Rest of the component...
};

export default MenuComponent;