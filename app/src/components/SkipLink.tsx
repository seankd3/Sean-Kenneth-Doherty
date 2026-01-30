/**
 * Skip to main content link for keyboard accessibility
 * Hidden by default, appears on focus for keyboard users
 */
const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#c9a962] focus:text-[#0a0a0a] focus:px-4 focus:py-2 focus:font-medium focus:tracking-wider focus:uppercase focus:text-sm focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
