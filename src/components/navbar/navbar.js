import DesktopMenu from "./desktop-menu/desktop-menu";
import MobileMenu from "./mobile-menu/mobile-menu";
import useWindowSize from "../../utils/useWindowSize";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxDropdownMenu } from "react-icons/rx";


function Navbar(){
    const {width}=useWindowSize();
    const [isMenuOpened,setIsOpenMenu]=useState(false);
    const openMenu=()=>{
        setIsOpenMenu(true);
    };
    const closeMenu=()=>{
        setIsOpenMenu(false);
    };
    useEffect(()=>{
        if (width>800){
            closeMenu();
        }
    },[width]);
    return(
        <div>
            <div className='navbar'>
                <div className='navbar__left-side'>
                    <Link to='/'>
                        <div className="navbar__left-side__logo">
                            <span className="navbar__left-side__text">
                                SIPICASO <b>ECOM</b> STORE
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='navbar__right-side'>
                    {width <800 ?(
                        isMenuOpened ? (
                            <AiOutlineCloseCircle
                className="navbar__right-side__icon"
                onClick={closeMenu}
              />
                        ):(<RxDropdownMenu
                            className="navbar__right-side__icon"
                            onClick={openMenu}
                          />)
                    ):(<DesktopMenu/>)}
                </div>
            </div>
            {isMenuOpened && <MobileMenu closeFn={closeMenu}/>}
        </div>
    )
}
export default Navbar;