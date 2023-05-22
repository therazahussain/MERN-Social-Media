import React from 'react'
import "./Auth.css"
import Logo from "../../img/logo3.png"

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>Hike</h1>
                    <h6>Explore the Ideas Throughout the World</h6>
                </div>
            </div>

            <div className="Form">
                {/* <SignUp /> */}
                <LogIn/>
            </div>

        </div>
    )
}


// Login Form
function LogIn() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Log In</h3>

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="infoInput"
                        name="username"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        placeholder="Password"
                        name="password"
                    />
                </div>

                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account Sign up
                    </span>
                    <button className="button infoButton">Login</button>
                </div>
            </form>
        </div>
    );
}


// Sign Up Form
function SignUp() {
    return (
        <div className="a-right">
            <form action="" className="infoForm authForm">


                <h3>
                    Sign Up
                </h3>

                <div>
                    <input type="text" placeholder="First Name" className="infoInput" name="firstname" />
                    <input type="text" placeholder="Last Name" className="infoInput" name="lastname" />
                </div>

                <div>
                    <input type="text" placeholder="@UserName" className="infoInput" name="username" />
                </div>

                <div>
                    <input type="password" placeholder="Password" className="infoInput" name="password" />
                    <input type="password" placeholder="Confirm Password" className="infoInput" name="confirmPassword" />
                </div>

                <div>
                    <span style={{ fontSize: "13px" }}>Aready have an Account. Login!</span>
                </div>

                <button className="button infoButton" type="submit">
                    Sign Up
                </button>

            </form>
        </div>
    )
}

export default Auth