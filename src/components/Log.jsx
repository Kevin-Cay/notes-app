import React, {useState, useRef} from 'react'
import noteImage from '../images/noteImage.png'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from '../firebase/firebase_config';
import {FcGoogle} from 'react-icons/fc'
import './Login.css'

export const Log = () => {
    const [signUp, setSignUp] = useState(false)
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();

    async function handleSubmit(values){
            const email = values.email;
            const password = values.pass;

            if(signUp){
                const user = await createUserWithEmailAndPassword(auth, email, password);
            }else{
                const user = await signInWithEmailAndPassword(auth, email, password)
            }    
    }

    async function SignInWithGoogle(){
        await signInWithRedirect(auth, googleProvider)
    }

    return (
        <div className='container'  >
            <div className="contentLog">
                <div className="imgContainer" >
                <img src={noteImage} alt="" />
                </div>
                
                <h1>{signUp? "Sign Up" : "Login"  }</h1>
                {error && <p className='error' >{error}</p>}
                <Formik
                enableReinitialize={true}
                    initialValues={{
                        email: '',
                        password:''
                    }}
                    onSubmit={handleSubmit}
                    >
                        
                        <Form className="formStyle"  >
                            <label htmlFor="email">Email</label>
                            <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@gmail.com"
                            style={{padding:"10px", fontSize:"18px"}}
                            />

                            <label htmlFor="email">Password</label>
                            <Field
                            id="pass"
                            name="pass"
                            placeholder="password"
                            type="password"
                            style={{padding:"10px", fontSize:"18px"}}
                            />
                            <button className="buttonSubmit" type="submit"  >{signUp? "Create Account": "Login"}</button>
                            
                        </Form>
                        
                </Formik>
                            <button onClick={() => (setSignUp(!signUp))} >
                                {signUp? "You have an account? Login": "Don't have an account? Sign up"}
                            </button>
                            <button className="googleButton" onClick={SignInWithGoogle} >
                                <FcGoogle /> Login with Google
                            </button>
            </div>
        </div>
    )
}
