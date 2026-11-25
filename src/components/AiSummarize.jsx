import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { RiOpenaiFill } from "react-icons/ri";
import { SiClaude, SiPerplexity } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { SITE_URL } from "@/i18n/routing";
import { useLanguage } from "@/i18n/useLanguage";

// AI assistants that accept a prompt in the link. The first is the main
// button; the others open above it (on hover, keyboard focus, or a first tap).
const ASSISTANTS = [
  { name: "ChatGPT", Icon: RiOpenaiFill, iconClass: "text-gray-900", href: (q) => `https://chatgpt.com/?hints=search&q=${q}` },
  { name: "Perplexity", Icon: SiPerplexity, iconClass: "text-gray-800", href: (q) => `https://www.perplexity.ai/search/new?q=${q}` },
  { name: "Google AI Mode", Icon: FcGoogle, iconClass: "", href: (q) => `https://www.google.com/search?udm=50&q=${q}` },
  { name: "Claude", Icon: SiClaude, iconClass: "text-[#D97757]", href: (q) => `https://claude.ai/new?q=${q}` },
];

// Floating "Summarize with AI" buttons (bottom-start corner, opposite the
// scroll-to-top button): open the visitor's AI assistant with a
// prompt (in the page's language) to explain Bronze Solar and its products and
// summarize the current page, pointing it at the site's llms.txt / llms-full.txt
// (company and product information written for AI assistants).
const AiSummarize = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  // Opened by a tap (no hover on touch screens): show every label
  const [openedByTap, setOpenedByTap] = useState(false);
  const containerRef = useRef(null);
  const skipFocusOpen = useRef(false);

  const pageUrl = SITE_URL + (pathname.length > 1 ? pathname.replace(/\/$/, "") : "/");
  const prompt = encodeURIComponent(
    t("Explain Bronze Solar and its products, and summarize this page: {url} — for company and product details, read {llms} and {llmsFull}", {
      url: pageUrl,
      llms: `${SITE_URL}/llms.txt`,
      llmsFull: `${SITE_URL}/llms-full.txt`,
    })
  );
  const label = (name) => t("Summarize with {name}", { name });

  const close = () => {
    setOpen(false);
    setOpenedByTap(false);
  };

  // Close when the page changes, on a click/tap outside, and on Escape
  useEffect(close, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) close();
    };
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      skipFocusOpen.current = true;
      containerRef.current?.querySelector("a")?.focus();
      close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Keyboard focus opens the list (not focus from a tap, which would skip the first-tap step)
  const onFocus = (event) => {
    if (skipFocusOpen.current) {
      skipFocusOpen.current = false;
      return;
    }
    if (event.target.matches(":focus-visible")) setOpen(true);
  };

  // On touch screens the first tap opens the list; the next tap opens ChatGPT
  const onMainClick = (event) => {
    if (open) return;
    event.preventDefault();
    setOpen(true);
    setOpenedByTap(true);
  };

  const renderLink = ({ name, Icon, iconClass, href }, isMain = false) => (
    <a
      href={href(prompt)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label(name)} ${t("(opens in a new tab)")}`}
      onClick={isMain ? onMainClick : undefined}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
    >
      <Icon size={22} aria-hidden="true" className={iconClass} />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute start-full top-1/2 ms-3 -translate-y-1/2 whitespace-nowrap rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-md ring-1 ring-gray-200 transition-opacity duration-150 ${
          openedByTap && open ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        {label(name)}
      </span>
    </a>
  );

  const [main, ...others] = ASSISTANTS;

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={containerRef}
        role="group"
        aria-label={t("Summarize this page with AI")}
        className="fixed bottom-8 start-8 z-50 flex flex-col-reverse items-center gap-3 print:hidden"
        onPointerEnter={(event) => event.pointerType === "mouse" && setOpen(true)}
        onPointerLeave={(event) => event.pointerType === "mouse" && close()}
        onFocus={onFocus}
        onBlur={(event) => {
          if (!containerRef.current?.contains(event.relatedTarget)) close();
        }}
      >
        {renderLink(main, true)}
        <AnimatePresence>
          {open &&
            others.map((assistant, index) => (
              <motion.div
                key={assistant.name}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, delay: index * 0.04 } }}
                exit={{ opacity: 0, y: 8, scale: 0.9, transition: { duration: 0.12 } }}
              >
                {renderLink(assistant)}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default AiSummarize;
