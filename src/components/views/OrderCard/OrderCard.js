import React, {useState} from "react";
import Card, { CardContent, CardHeader } from "../../items/Card";
import Form, {FormField, FormInput} from "../../items/Form";
import Icon from "../../items/Icon";
import Divider from "../../items/Divider";
import Button from "../../items/Button";
import Image from "../../items/Image";
import Popup from "../../items/Popup";

import graphsImage from "./graphs-image.png";
import formatPrice from "../../../lib/formatPrice";

import "./OrderCard.scss";

function OrderCard({
        formData,
        handleChange,
        onSubmitLoan,
        loanMetaData,
    }){
    const [expandedView, setExpandedView] = useState(false);
    const {loan_amount } = formData;
    const { loan_fee, total_repayment, payout_date, sales_repayment_percentage } = loanMetaData;
    const handleExpandedToggle = () => {
        setExpandedView(!expandedView);
    };

    return (
        <div className="OrderCard">
            <Form extraClassNames="OrderCardForm">
                <Card extraClassnames="CardContainer">
                    <CardContent>
                        <div className="OrderCardContent">
                            <div className="OrderArea">
                                <span className="ToggleIcon" onClick={() => handleExpandedToggle()}>
                                    <Popup
                                        position="top center"
                                        pinned
                                        trigger={<Icon
                                            name="expand arrows alternate"
                                        />}
                                        content="Click to expand and see more info"
                                    />
                                </span>
                                <div className="CardHeaderArea">
                                    <CardHeader
                                        as="h2"
                                    >
                                        Apply for a loan!
                                    </CardHeader>
                                    <CardHeader
                                        as="h2"
                                    >
                                        {formatPrice(loan_amount)}
                                    </CardHeader>
                                </div>
                                <FormField>
                                    <FormInput
                                        label="Loan Amount"
                                        value={loan_amount}
                                        onChange={(e, {value}) => {
                                            handleChange("loan_amount", value);
                                        }}
                                        type="range"
                                        min={100}
                                        max={10000}
                                    />
                                </FormField>
                                <div className="OrderCardFormDetails">
                                    <div className="DetailsLabels">
                                        <p>One loan fee: </p>
                                        <p>Total repayment: </p>
                                        <p>Daily sales repayment %: </p>
                                        <Divider />
                                        <p>Payout Date</p>
                                        <Divider />
                                    </div>
                                    <div className="DetailsValues">
                                        <p>{loan_fee}</p>
                                        <p>{total_repayment}</p>
                                        <p>{sales_repayment_percentage}</p>
                                        <Divider />
                                        <p>{payout_date}</p>
                                        <Divider />
                                    </div>
                                </div>
                                <div className="FormActions">
                                    <Button
                                        content="Payout"
                                        labelPosition="right"
                                        icon="arrow right"
                                        onClick={() => onSubmitLoan(formData)}
                                        positive
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Form>
            {expandedView &&
                <Card extraClassnames="CardExpandedView">
                    <CardContent>
                        <div className="ExpandedViewInfo">
                            <Image className="GraphsImage" src={graphsImage} fluid ui={false} />
                            <div className="ExpandedViewFacts">
                                <p>No credit checks</p>
                                <p>Pay a percentage of daily sales</p>
                                <p>No early payment fees</p>
                                <p>Repayment only when you make money</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            }
        </div>
    )
};

export default OrderCard;
