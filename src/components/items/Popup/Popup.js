import React from "react";
import { Popup as SemanticPopup } from "semantic-ui-react";
import "semantic-ui-css/components/popup.css";

function Popup({content, ...restProps}){
    return (
        <SemanticPopup basic {...restProps}>
            <SemanticPopup.Content>
                {content}
            </SemanticPopup.Content>
        </SemanticPopup>
    )
}

export default Popup;
