import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
        const { loading, error } = useSelector((state) => state.auth);
        return ( <> {
                error && <span > { alert(error) } </span>} {loading ? ( <
                        Spinner / >
                    ) : ( <div className = "col-md-8 form-banner "
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
                        <div className = "col-md-4 form-container"
                        style = {
                            { color: 'white' } } >
                        <Form formTitle = { "Register" }
                        submitBtn = { "Register" }
                        formType = { "register" }/> </div> </div>
                    )
                } </>
            );
        };

        export default Register;