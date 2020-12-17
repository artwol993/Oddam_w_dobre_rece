long content page, that when navigated to, stays scrolled down. This is straightforward to handle with a <ScrollToTop> component that will scroll the window up on every navigation:import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}