import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../shared/Spinner";

const Login = () => {
    const navigate = useNavigate();

    const url = new URL(window.location.href);
    const hash = url.hash;
    localStorage.setItem("hash", hash);

    useEffect(() => {
        navigate('/');
    }, [hash])

    return <Spinner />;

};

export default Login;