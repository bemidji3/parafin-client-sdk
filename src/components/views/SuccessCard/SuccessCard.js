import React from "react";
import Icon from "../../items/Icon";
import Button from "../../items/Button";
import Card, {CardContent, CardHeader} from "../../items/Card";
import Header from "../../items/Header";

import formatPrice from "../../../lib/formatPrice";
import "./SuccessCard.scss";

function SuccessCard({payoutAmount, setOpen, setLoanSubmitted, resetForm}) {
    const onClickDone = () => {
        setOpen(false);
        setLoanSubmitted(false);
        resetForm();
    };
    return (
        <div className="SuccessCard">
            <Card>
                <CardHeader
                    as="h2"
                >
                    Paid out!
                </CardHeader>
                <CardContent>
                    <div className="SuccessCardMainContent">
                        <Header
                            as="h1"
                        >
                            {formatPrice(payoutAmount)}
                        </Header>
                        <Icon
                            name="thumbs up"
                            size="huge"
                        />
                    </div>
                </CardContent>
                <Button
                    content="Done"
                    onClick={onClickDone}
                    positive
                />
            </Card>
        </div>
    )
}

export default SuccessCard;
