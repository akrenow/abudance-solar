import PropTypes from "prop-types";

// The page's single <h1> with a short introduction underneath.
const PageHeading = ({ title, intro }) => (
  <div className="text-center max-w-3xl mx-auto mb-10">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{title}</h1>
    {intro && <p className="text-gray-600 leading-relaxed">{intro}</p>}
  </div>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
};

export default PageHeading;
