import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import { motion } from "framer-motion";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const [menu, setMenu] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
    } else {
    }
  };

  return (
    <div className="header">
      {/* Top header desktop & tablet*/}
      <div className="header-logo">
        <Link to={"/"} className="header-logo-link">
          <img src={Logo} alt="logo" className="img-logo" />
        </Link>
      </div>
      <div className="header-slider">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="header-motion"
        >
          <p className="header-home">Trang chủ</p>
          <p className="header-menu">Menu</p>
          <p className="header-aboutus">Về chúng tôi</p>
          <p className="header-service">Dịch vụ</p>
        </motion.div>

        <div className="header-cart">
          <i className="icon fas fa-utensils"></i>
        </div>

        <div className="header-user">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="header-user-avatar"
            alt="userprofile"
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="header-user-menu"
            >
              {userInfo && (
                <Link to={"/"} className="user-menu-link">
                  <p className="header-user-menu-new">
                    Thêm công thức
                    <i className="icon fas fa-plus"></i>
                  </p>
                </Link>
              )}
              <p className="header-user-menu-logout">
                Đăng xuất
                <i className="icon fas fa-sign-out"></i>
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/*mobile */}
      <div className="header-mobile">
        <div className="header-logo-mobile">
          <Link to={"/"} className="header-logo-link-mobile">
            <img src={Logo} alt="logo" className="img-logo-mobile" />
          </Link>
        </div>
        {/* <div className="header-cart">
          <i className="icon fas fa-utensils"></i>
        </div> */}

        <div className="header-user">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="header-user-avatar"
            alt="userprofile"
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="header-user-menu"
            >
              {userInfo && (
                <Link to={"/"} className="user-menu-link">
                  <p className="header-user-menu-new">Thêm công thức</p>
                </Link>
              )}

              <div className="header-user-mobile">
                <p
                  className="header-user-recipe-mobile"
                  onClick={() => setMenu(false)}
                >
                  Công thức của tôi
                </p>
                <p
                  className="header-user-home-mobile"
                  onClick={() => setMenu(false)}
                >
                  Trang chủ
                </p>
                <p
                  className="header-user-menu-mobile"
                  onClick={() => setMenu(false)}
                >
                  Menu
                </p>
                <p
                  className="header-user-menu-about-mobile"
                  onClick={() => setMenu(false)}
                >
                  Về chúng tôi
                </p>
                <p
                  className="header-user-service-mobile"
                  onClick={() => setMenu(false)}
                >
                  Dịch vụ
                </p>
              </div>

              <p className="header-user-menu-logout">Đăng xuất</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
