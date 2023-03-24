

import SignUp from "../../components/sign-up/sign-up.component"
import SignIn from '../../components/sign-in/sign-in.component'

import './auth.styles.scss'

const Auth = () => {
  // const logGoogleUser = async () => {
  //   const {user} = await GoogleSignIn();
  //   createUserDocsFromAuth(user)
  // };

  return (
    <div className="auth-container">
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default Auth;
