import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>Sorry</h2>
      <p>The page can not be found</p>
      <Link to="/">Press here to back home.</Link>
    </div>
  );
}
 
export default PageNotFound;