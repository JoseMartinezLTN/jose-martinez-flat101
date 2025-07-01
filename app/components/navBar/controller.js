export const setCurrentPageToContext = ({ pathname, setCurrentPage }) => {
  let currentPage = "";
  if (pathname.startsWith("/episodes")) currentPage = "episodes";
  if (pathname.startsWith("/locations")) currentPage = "locations";

  setCurrentPage(currentPage);
};
