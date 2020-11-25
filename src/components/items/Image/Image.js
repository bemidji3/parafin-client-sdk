import React from "react";
import { Image as SemanticImage } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/components/image.css";
import "./Image.scss";

function Image({ className, children, ...restProps }) {
    const extraClassName = classNames(`Image`, {
        [className]: !!className,
    });
    return (
        <SemanticImage className={extraClassName} {...restProps}>
            {children}
        </SemanticImage>
    );
}

export default Image;
