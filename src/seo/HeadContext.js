import { createContext } from "react";

// While pages are pre-rendered at build time, SEOHead reports the page's
// <head> tags into this collector ({ head: null }) instead of touching the DOM.
export const HeadContext = createContext(null);
