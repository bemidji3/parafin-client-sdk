import React, {useState} from "react";

import MainLayout from "./Main";
import useForm from "../../lib/hooks/useForm";
import useLoan from "../../lib/hooks/useLoan";
import {initialValues} from "./config";


function MainLayoutWrapper(){
    const [loanSubmitted, setLoanSubmitted] = useState(false);

    const onSubmit = () => {
        createNewLoan(formData).then(response => {
            console.log("response ", response);
            setLoanSubmitted(true);
        });
    };

    const { createNewLoan, loanMetaData } = useLoan();

    const {
        formData,
        handleChange,
        simpleSubmit
    } = useForm(initialValues, onSubmit);


    return (
        <MainLayout
            formData={formData}
            handleChange={handleChange}
            loanSubmitted={loanSubmitted}
            onSubmitLoanRequest={simpleSubmit}
            loanMetaData={loanMetaData}
        />
    )
}

export default MainLayoutWrapper;
