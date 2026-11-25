import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";

// The page's single <h1> with a short introduction underneath, in the same
// style as every section heading (SectionHeading).
const PageHeading = ({ title, intro }) => <SectionHeading as="h1" title={title} subtitle={intro} className="mb-10" />;

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
};

export default PageHeading;
