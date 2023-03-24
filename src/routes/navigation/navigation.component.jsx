import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserCtx } from "../../store/context";
import {signOutUser} from "../../utils/firebase/firebase.utils"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import {} from '../../store/context'
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setUser } = useContext(UserCtx);
  console.log(currentUser);
  const signOutHandler = async () => {
  await signOutUser()
  setUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
