import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase';

const Signup = () => {
    const navigate = useNavigate();

    const [valves, setValves] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButton, setSubmitButton] = useState(false);

    const handleSubmission = () => {
        if (!valves.name || !valves.email || !valves.password) {
            setErrorMsg("Fill in all the details");
            return;
        }

        setErrorMsg("");
        setSubmitButton(true);

        createUserWithEmailAndPassword(auth, valves.email, valves.password)
            .then(async (res) => {
                setSubmitButton(false);
                const user = res.user;
                await updateProfile(user, { displayName: valves.name })
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                setSubmitButton(false);
                console.log("Error:", err);
            })
            .finally(() => {
                setSubmitButton(false);
            });

        console.log(valves);
    };

    return (
        <div className='row'>
            <div className='col-lg-6 signup-form'>
                <div className='heading'>
                    <h1>Sign-in Here</h1>
                </div>
                <form>
                    <div className='login_style col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder='Enter your full name' onChange={(event) => setValves((prev) => ({ ...prev, name: event.target.value }))} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter your email id' onChange={(event) => setValves((prev) => ({ ...prev, email: event.target.value }))} aria-describedby="emailHelp" />
                            <div id="emailHelp">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='Enter your password' onChange={(event) => setValves((prev) => ({ ...prev, password: event.target.value }))} id="exampleInputPassword1" />
                        </div>
                        <div className='submit_style'>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <strong>{errorMsg}</strong><br />
                            <button type="button" onClick={handleSubmission} disabled={submitButton} className="btn btn-primary button">Submit</button>
                        </div>
                        <br />
                        Already have an account? <Link to='/login'>Login</Link>
                    </div>
                </form>
            </div>
            <div className='col-lg-6 signup-name'>
                <img className='signup-image' src='data:image/jpeg;base64,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' />
                <h3 className='signup-title'>XXX NGO</h3>
            </div>
        </div>
    );
};

export default Signup;
