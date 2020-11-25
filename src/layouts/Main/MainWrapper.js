import React, {useState} from "react";

import MainLayout from "./Main";
import useForm from "../../lib/hooks/useForm";
import useLoan from "../../lib/hooks/useLoan";
import {initialValues} from "./config";


function MainLayoutWrapper(){
    const [loanSubmitted, setLoanSubmitted] = useState(false);

    const onSubmit = () => {
        createNewLoan(formData).then(response => {
            if(response.status === 200){
                setLoanSubmitted(true);
            }
        });
    };

    const { createNewLoan, loanMetaData } = useLoan();

    const {
        formData,
        handleChange,
        simpleSubmit,
        resetForm,
    } = useForm(initialValues, onSubmit);


    return (
        <MainLayout
            formData={formData}
            handleChange={handleChange}
            loanSubmitted={loanSubmitted}
            setLoanSubmitted={setLoanSubmitted}
            onSubmitLoanRequest={simpleSubmit}
            loanMetaData={loanMetaData}
            resetForm={resetForm}
        />
    )
}

export default MainLayoutWrapper;
