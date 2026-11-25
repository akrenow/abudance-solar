import PropTypes from "prop-types";

// One heading style for every section on the site: purple title, short solid
// yellow bar underneath, optional grey subtitle.
//   light       – white title and bar, for headings on coloured backgrounds
//   align       – "center" (section titles) or "start" (headings beside text)
//   as          – heading level (h2 by default; PageHeading uses h1)
//   className   – spacing below the block
const SectionHeading = ({ title, subtitle, as: Tag = "h2", light = false, align = "center", className = "mb-12 md:mb-16" }) => {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : "text-start"} ${className}`}>
      <Tag className={`text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${light ? "text-white" : "text-secondary"}`}>{title}</Tag>
      <span aria-hidden="true" className={`mt-4 block h-1 w-20 rounded-full ${light ? "bg-white" : "bg-primary"} ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-6 max-w-3xl text-lg leading-relaxed ${light ? "text-white/90" : "text-gray-600"} ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  as: PropTypes.oneOf(["h1", "h2", "h3"]),
  light: PropTypes.bool,
  align: PropTypes.oneOf(["center", "start"]),
  className: PropTypes.string,
};

export default SectionHeading;
