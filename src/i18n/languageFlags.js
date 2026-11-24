// Flag shown next to each language in the language selector (SVG, so it
// renders everywhere; flag emoji don't display on Windows).
//   English -> United Kingdom (the site uses British spelling)
//   Arabic  -> United Arab Emirates
// To add a language: import its country's flag here and map the language code.
import { AE, GB } from "country-flag-icons/react/3x2";

export const LANGUAGE_FLAGS = { en: GB, ar: AE };
