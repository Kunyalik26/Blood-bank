import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
        const { loading, error } = useSelector((state) => state.auth);
        return ( <> {
                error && <span > { alert(error) } </span>} {
                    loading ? ( <
                        Spinner / >
                    ) : ( <div className = "login-container"
                        style = {
                            {
                                backgroundImage: 'url("./assets/images/banner1.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100vh",
                                display: "flex",
                                alignItems: "center",
                            }

                        } >
                        <div className = "form-container"
                        style = {
                            { color: 'white' } } >
                        <
                        Form formTitle = { "Login Page" }
                        submitBtn = { "Login" }
                        formType = { "login" }/> </div> </div>
                    )
                } </>
            );
        };

        export default Login;