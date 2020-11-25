import React from "react";
import { Form as SemanticForm } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";

function FormInput({children, ...restProps}) {

    return <SemanticForm.Input {...restProps}>{children}</SemanticForm.Input>;
}

export default FormInput;
