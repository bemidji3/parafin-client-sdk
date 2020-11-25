import React, {useState} from "react";
import Modal, {ModalActions, ModalContent, ModalHeader} from "../../components/items/Modal"
import OrderCard from "../../components/views/OrderCard";
import SuccessCard from "../../components/views/SuccessCard";
import Button from "../../components/items/Button";
import formatPrice from "../../lib/formatPrice";

function MainLayout({formData, handleChange, loanSubmitted, onSubmitLoanRequest, loanMetaData}){
    const [open, setOpen] = useState(false);
    const {loan_amount} = formData;
    const onCloseModal = () => {
        setOpen(false);
    };
    return (
        <div className="Main">
            <Modal
                onClose={onCloseModal}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button primary>Get capital</Button>}
            >
                <ModalHeader>
                    Loan Amount = {formatPrice(loan_amount)}
                </ModalHeader>
                <ModalContent>
                    {loanSubmitted ? (
                        <SuccessCard
                            payoutAmount={loan_amount}
                            onButtonClick={onCloseModal}
                        />
                    ) : (
                        <OrderCard
                            formData={formData}
                            handleChange={handleChange}
                            loanSubmitted={loanSubmitted}
                            onSubmitLoan={onSubmitLoanRequest}
                            loanMetaData={loanMetaData}
                        />
                    )}
                </ModalContent>
                <ModalActions>
                    <Button
                        content="Close"
                        labelPosition='right'
                        icon='window close'
                        onClick={() => setOpen(false)}
                        negative
                    />
                </ModalActions>
            </Modal>
        </div>
    )
}

export default MainLayout;
