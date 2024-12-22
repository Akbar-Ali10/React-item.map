import React, { useState } from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(true); 

    return (
        <>
            <div className="container">
                <div className="form-container">
                    
                    <div className="form-toggle">
                        <button
                            className={isLogin ? 'active' : ''}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={!isLogin ? 'active' : ''}
                            onClick={() => setIsLogin(false)}
                        >
                            SignUp
                        </button>
                    </div>

                    {isLogin ? (
                        <div className="form">
                            <h2>Login Form</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot Password?</a>
                            <button>Login</button>
                            <p>
                                Not a Member?{' '}
                                <a href="#" onClick={() => setIsLogin(false)}>
                                    SignUp Now
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="form">
                            <h2>SignUp Form</h2>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button>SignUp</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Login;
