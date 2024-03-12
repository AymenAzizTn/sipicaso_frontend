import { isStoreSelected, isCartSelected } from "../../../utils/checkRoutes";
import { Link, useLocation } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

function DesktopMenu(){
    const loc = useLocation();

    return(
        <>
        <Link
        to='/' className={`navbar__right-side__item ${isStoreSelected(loc.pathname)&&"navbar__right-side__item--selected"}`}>
        Store
        </Link>
        <Link
        to="/cart"
        className={`navbar__right-side__item
              ${
                isCartSelected(loc.pathname) &&
                "navbar__right-side__item--selected"
              }`}
      >
        <MdAddShoppingCart className="navbar__right-side__icon" />
      </Link>
      <button className="navbar__right-side__btn primary">Login</button>
        </>
    )
}
export default DesktopMenu;