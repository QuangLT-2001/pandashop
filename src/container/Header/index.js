import React, { useEffect, useState } from "react";
import {
  HeaderBottomWrapper,
  HeaderTopWrapper,
  HeaderWrapper,
} from "./style";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons"
import {
  headerTopBottoms,
  listMenu,
  listMenuFixed
} from "./data";
import HeaderTopBottomItem from "./Component/headerTopBottomItem";
import MenuItem from "./Component/MenuItem";
import {
  getListProductRequest,
  getListProductCartRequest
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectColor,
  selectCart
} from "./selector";
import { useHistory } from "react-router-dom";
import Buttons from "../../Component/Button";
import Search from "./Component/Search";
import Close from "../Components/Close";

const Header = (props) => {
  const [headerTopBottom, setHeaderTopBottom] = useState([]);
  const [menus, setMenus] = useState([]);
  const [status, setStatus] = useState(true);
  const [listMenuFixedBottom, setListMenuFixedBottom] = useState([]);
  const [statusSearch, setStatusSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const history = useHistory();
  const body = document.querySelector("body")
  // xử lý mapStateToProps;
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart)
  const currentColor = useSelector(selectColor);
  // xử lý mapDispatchToProps;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProductRequest());
    setHeaderTopBottom(headerTopBottoms);
    setMenus(listMenu);
    setListMenuFixedBottom(listMenuFixed);
  }, []);
  const handleChangeStatus = () => {
    setStatus((state) => !state);
  };
  if (!products.length) return null;
  const handleCloseMenu = () => {
    setStatus(true);

  }
  const handleClickToLogin = () => {
    history.push("/dang-nhap")
    setStatus(true)
  }
  const handleClickToRegister = () => {
    history.push("/dang-ky");
    setStatus(true)
  }
  const handleClickChangeTrueStatusSearch = () => {
    setStatusSearch(true)
    setStatus(true);
    body.classList.add("hidden")
    setShowSearch(true)
  }
  const handleClickClose = () => {
    body.classList.remove("hidden")
    setShowSearch(false)
  }
  return (
    <HeaderWrapper
      status={status}
      id="header" >
      <HeaderTopWrapper
        className="header-top"
        status={status}
        color={currentColor}
        statusSearch={statusSearch}
      >

        <div className="container">
          <Link className="icon-home" to="#" onClick={handleChangeStatus}>
            <span className="icon-home-item"></span>
          </Link>
          <NavLink
            to="/"
            exact
            className="logo"
            onClick={handleCloseMenu}
          >
            <img src="/assets/images/logo/logo10.png" alt="Shop panda - Quảng Redev" />
          </NavLink>
          <div className="header-top-right">
            {/* start search PC */}
            <Search className="search-pc" products={products} />

            {/* end search PC */}
            {/* start search Mobile */}
            {showSearch && <Search setState={setShowSearch} className="search-mobile" products={products} />}
            {showSearch && <Close type="mobile" setShowSearch={setShowSearch} onClick={handleClickClose} />}
            {/* end search Mobile */}
            <div className="account-cart">
              <div className="account-container">
                <span
                  className="icon-search-mobile"
                  onClick={handleClickChangeTrueStatusSearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>

                <Link
                  to="/dang-nhap"
                  className="icon-link"
                  onClick={handleCloseMenu}
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <NavLink
                  to="/dang-nhap"
                  exact
                  className="account-link"
                  onClick={handleCloseMenu}
                >
                  <span className="account-login-logout">
                    Đăng nhập / đăng ký
                  </span>
                  <span className="account">Tài khoản</span>
                </NavLink>
              </div>
              <NavLink
                to="/gio-hang"
                exact
                className="cart"
                onClick={handleCloseMenu}
              >
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="cart-text">Giỏ hàng</span>
              </NavLink>
            </div>



            <div className="header-top-bottom">

              <ul className="list-header-top-bottom">

                {headerTopBottom.map((item) => {
                  return (
                    <HeaderTopBottomItem
                      headerTopBottomItem={item}
                      key={item.id}
                      onClick={handleCloseMenu}
                    />
                  );
                })}
              </ul>
              <p className="phone">0392272154 | 0376326810

              </p>


            </div>

          </div>
        </div>
      </HeaderTopWrapper>
      <HeaderBottomWrapper
        status={status}
        className="header-bottom"
        color={currentColor}
      >
        <div className="container">
          <ul className="list-menu">
            <li className="account-mobile">
              <img src="/assets/images/Avatar/user1.png" alt="" />
              <div className="btn-register">
                <Buttons
                  name="Đăng Nhập"
                  type="login"
                  onClick={handleClickToLogin}
                />
                <Buttons
                  name="Đăng Ký"
                  type="register"
                  onClick={handleClickToRegister}
                />
              </div>
            </li>
            {menus.map((item) => {
              return <MenuItem
                menuItem={item}
                key={item.id}
                onClick={handleCloseMenu}
                color={currentColor}
              />;
            })}
          </ul>

        </div>
      </HeaderBottomWrapper>

      <div className="icon-home-mobile">
        <Link className="icon-home-mobile-item" to="#" onClick={handleChangeStatus}>
          <span className="icon-home-item"></span>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
