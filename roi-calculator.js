(function() {
  const htmlContent = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
      }

      .container {
        width: 90%;
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }

      h1 {
        text-align: center;
        font-weight: 500;
        margin-bottom: 20px;
      }

      label {
        display: block;
        font-weight: 500;
        margin-top: 10px;
      }

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
      }

      button {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: #0056B3;
      }

      #result {
        margin-top: 20px;
        text-align: center;
      }

      #roiResult {
        font-size: 24px;
        font-weight: 600;
      }

      /* Responsive styles */
      @media screen and (max-width: 768px) {
        .container {
          width: 95%;
        }
      }

      @media screen and (max-width: 480px) {
        h1 {
          font-size: 24px;
        }

        label {
          font-size: 14px;
        }

        input, button {
          font-size: 14px;
        }

        #roiResult {
          font-size: 20px;
        }
      }
    </style>
    <div class="container">
        <h1>ROI Calculator</h1>
        <form id="roi-form">
            <label for="purchasePrice">Purchase Price:</label>
            <input type="number" id="purchasePrice" required>
            <label for="downPayment">Down Payment:</label>
            <input type="number" id="downPayment" required>
            <label for="loanInterest">Loan Interest (%):</label>
            <input type="number" id="loanInterest" required>
            <label for="loanTerm">Loan Term (years):</label>
            <input type="number" id="loanTerm" required>
            <label for="monthlyRent">Monthly Rent:</label>
            <input type="number" id="monthlyRent" required>
            <button type="submit">Calculate ROI</button>
        </form>
        <div id="result">
            <p id="roiResult"></p>
        </div>
    </div>
    <script>
      document.getElementById("roi-form").addEventListener("submit", function (event) {
          event.preventDefault();
          const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
          const downPayment = parseFloat(document.getElementById("downPayment").value);
          const loanInterest = parseFloat(document.getElementById("loanInterest").value);
          const loanTerm = parseFloat(document.getElementById("loanTerm").value);
          const monthlyRent = parseFloat(document.getElementById("monthlyRent").value);

          const loanAmount = purchasePrice - downPayment;
          const monthlyInterestRate = loanInterest / 100 / 12;
          const numberOfPayments = loanTerm * 12;

          const mortgagePayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

          const annualMortgagePayment = mortgagePayment * 12;
          const annualRentIncome = monthlyRent * 12;
          const annualCashFlow = annualRentIncome - annualMortgagePayment;
          const roi = (annualCashFlow / downPayment) * 100;

          document.getElementById("roiResult").innerHTML = `ROI: ${roi.toFixed(2)}%`;
      });
    </script>
  `;

  const container = document.createElement("div");
  container.innerHTML = htmlContent;
  document.body.appendChild(container);
})();