import {post, get} from "../Api"

const useLoan = () => {
    const getVendorStats = () => {
        const vendorInfoUrl = "http://127.0.0.1:5000/get-vendor-information";

        return get(vendorInfoUrl).then(response => {
            return response.json();
        }).catch(error => {
            console.error(error)
        })
    };

    const createNewLoan = (data) => {
        const loanUrl = "http://127.0.0.1:5000/new-loan";

        return post(loanUrl, data).then(response => {
            return response
        }).catch(error => {
            console.error(error);
        })
    };

    const loanMetaData = { //tbis will make an API request once we have a backend
        loan_fee: "$900",
        total_repayment: "$9400",
        payout_date: "Instant!",
        sales_repayment_percentage: "12%",
    };

    return {
        createNewLoan,
        getVendorStats,
        loanMetaData,
    }
};

export default useLoan;
