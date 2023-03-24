import { useState } from "react";
import {
  basicAuth,
  createUserDocsFromAuth,
  signInBasicAuth,
  GoogleSignIn
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";
import Btn from "../button/Btn";

const initialFormField = {
  email: "",
  password: "",
};

export default () => {
  const [formFields, setFormFields] = useState(initialFormField);
  const { email, password } = formFields;

  const connectGoogle = async () => {
    const { user } = await GoogleSignIn();
    await createUserDocsFromAuth(user);
    // createUserProfileDocument(response);
  };

  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormField);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(email, password)
    // if(password !== confirmPassword) return
    try {
      const res = await signInBasicAuth(email, password)
      console.log(res)
      resetFormFields();
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Already have account?</h2>
        <span>Sign In</span>
        <form onSubmit={submitHandler}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={changeHandler}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={changeHandler}
            name="password"
            value={password}
          />
          {/* <label>Email</label>
          <input type="email" required onChange={changeHandler} name="email" value={email}/>
          <label>Password</label>
          <input type="password" required onChange={changeHandler} name="password" value={password}/>
          <label>Confirm Password</label>
          <input type="password" required onChange={changeHandler} name="confirmPassword" value={confirmPassword}/> */}
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Btn type="submit">Submit</Btn>
            <Btn type='button' buttonType="google" onClick={connectGoogle}>
              Sign-in with Google
            </Btn>
          </div>
        </form>
      </div>
    </>
  );
};
