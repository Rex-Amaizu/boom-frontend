import { useState, useEffect } from "react";

// test for multiple media queries
export const useMedia = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
};

export const useTabletMedia = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const listener = () => setIsTablet(media.matches);
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isTablet]);
  return isTablet;
};
