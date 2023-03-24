import { useState, useContext } from "react";
import {basicAuth, createUserDocsFromAuth} from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/FormInput'
import './sign-up.scss'
import Btn from '../button/Btn'
import {UserCtx} from '../../store/context'

const initialFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default () => {
const [formFields, setFormFields] = useState(initialFormField)
const {displayName, email,password,confirmPassword} =formFields

const {setUser} = useContext(UserCtx)
console.log(formFields)

const changeHandler = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
} 

const resetFormFields = () => {
    setFormFields(initialFormField)
}

  const submitHandler = async (event) => {
    event.preventDefault()
    // console.log(email, password)
    if(password !== confirmPassword) return
    try {
      const {user} = await basicAuth(email, password)
      console.log(user)
      setUser(user)
      await createUserDocsFromAuth(user,{displayName})
      resetFormFields()
    }
    catch(err) {
        console.log(err)
        alert(err.message)
    }
    
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have account?</h2>
        <span>Sign Up</span>
        <form onSubmit={submitHandler}>
          <FormInput label="Display Name" type="text" required onChange={changeHandler} name="displayName" value={displayName}/>
          <FormInput label="Email" type="email" required onChange={changeHandler} name="email" value={email}/>
          <FormInput label="Password" type="password" required onChange={changeHandler} name="password" value={password}/>
          <FormInput label="Confirm Password" type="password" required onChange={changeHandler} name="confirmPassword" value={confirmPassword}/>
          {/* This is the same as above */}
          {/* <label>Email</label>
          <input type="email" required onChange={changeHandler} name="email" value={email}/>
          <label>Password</label>
          <input type="password" required onChange={changeHandler} name="password" value={password}/>
          <label>Confirm Password</label>
          <input type="password" required onChange={changeHandler} name="confirmPassword" value={confirmPassword}/> */}
          <Btn type="submit">Submit</Btn>
        </form>
      </div>
    </>
  );
};
