// loanController.js
const calculateEMI = (principal, rate, tenure) => {
    let monthlyRate = rate / (12 * 100); // Monthly interest rate
    let months = tenure * 12; // Total number of months

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    return {
        emi: emi.toFixed(2),
        totalInterest: (emi * months - principal).toFixed(2),
        totalAmount: (emi * months).toFixed(2),
        principal: principal.toFixed(2)
    };
};

exports.calculateLoan = (req, res) => {
    const { totalAmount, downPayment, tenure, rate } = req.body;

    if (!totalAmount || !downPayment || !tenure || !rate) {
        return res.status(400).send("Total amount, down payment, tenure, and rate are required.");
    }

    const loanAmount = parseFloat(totalAmount) - parseFloat(downPayment);
    let remainingPrincipal = loanAmount;
    let monthlyRate = parseFloat(rate) / (12 * 100); // Monthly interest rate
    const emiDetails = calculateEMI(loanAmount, rate, tenure);
    let emi = parseFloat(emiDetails.emi);

    let results = [];

    // console.log(`Loan Amount: ${loanAmount}`);
    // console.log(`EMI: ${emi}`);
    // console.log(`Monthly Rate: ${monthlyRate}`);

    for (let year = 1; year <= tenure; year++) {
        let interestPaid = 0;
        let principalPaid = 0;

        for (let month = 0; month < 12; month++) {
            if (remainingPrincipal <= 0) break;

            let monthlyInterest = remainingPrincipal * monthlyRate;
            let monthlyPrincipal = emi - monthlyInterest;
            interestPaid += monthlyInterest;
            principalPaid += monthlyPrincipal;
            remainingPrincipal -= monthlyPrincipal;

            // console.log(`Year: ${year}, Month: ${month + 1}, Monthly Interest: ${monthlyInterest}, Monthly Principal: ${monthlyPrincipal}, Remaining Principal: ${remainingPrincipal}`);
        }

        results.push({
            months: year*12,
            principalPaid: `₹ ${principalPaid.toFixed(2)}`,
            interestPaid: `₹ ${interestPaid.toFixed(2)}`,
            balance: `₹ ${remainingPrincipal <= 0 ? 0 : remainingPrincipal.toFixed(2)}`
        });

        if (remainingPrincipal <= 0) break;
    }

    res.json({
        emiPerMonth: `₹ ${emi.toFixed(2)}`,
        data: results
    });
};
