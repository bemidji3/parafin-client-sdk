import React from "react";
import { Icon as SemanticIcon } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/icon.css";
import "./Icon.scss";

function Icon({ className, children, ...restProps }) {
    const extraClassName = classNames(`Icon`, {
        [className]: !!className,
    });
    return (
        <SemanticIcon className={extraClassName} {...restProps}>
            {children}
        </SemanticIcon>
    );
}

export default Icon;
