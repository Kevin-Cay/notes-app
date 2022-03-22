import React, {useState} from 'react'
import noteImage from '../images/noteImage.png'
import { Formik, Field, Form } from 'formik';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, sendPasswordResetEmail} from '../firebase/firebase_config';
import {FcGoogle} from 'react-icons/fc'
import './Login.css'


export const Log = ({setLoading}) => {
    const [signUp, setSignUp] = useState(false)
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();

    async function handleSubmit(values){
            
        try {
            const email = values.email;
            const password = values.pass;
            if(signUp){
                await createUserWithEmailAndPassword(auth, email, password);
                
                }else{
                await signInWithEmailAndPassword(auth, email, password)
                }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
                
    }

    async function resetPassword(){
        const email = document.getElementById("email").value;
        try {
            await sendPasswordResetEmail(auth,  email);
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
    }


    async function SignInWithGoogle(){
        await signInWithRedirect(auth, googleProvider)
        setLoading(false);
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
                            <button onClick={() => (setSignUp(!signUp), setError(''))} >
                                {signUp? "You have an account? Login": "Don't have an account? Sign up"}
                            </button>
                            {
                                signUp? '': <button onClick={resetPassword} > Reset your password </button>
                            }
                            <button className="googleButton" onClick={SignInWithGoogle} >
                                <FcGoogle /> Login with Google
                            </button>
            </div>
        </div>
    )
}
