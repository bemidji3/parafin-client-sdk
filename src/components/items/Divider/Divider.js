import React from "react";
import { Divider as SemanticDivider } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";
import classNames from "classnames";
import "./Divider.scss";


function Divider({children, extraClassNames, ...restProps}) {

    const wrappedClassNames = classNames(`Divider `, {
        [extraClassNames]: !!extraClassNames,
    });

    return <SemanticDivider classname={wrappedClassNames} {...restProps}>{children}</SemanticDivider>;
}

export default Divider;
