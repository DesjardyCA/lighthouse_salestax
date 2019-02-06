// object with info stored as properties
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// array of objects
var companySalesData = [{
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var out = "{\n";

  for (const elem in salesData) {
    var company = salesData[elem];
    var sales = 0;
    var taxes = 0;

    out += "  " + company.name + ": {\n";
    for (const elem in company.sales) {
      sales += company.sales[elem];
      taxes += company.sales[elem] * salesTaxRates[company.province];
    }
    out += "    totalSales: " + sales + "\n" +
      "    totalTaxes: " + taxes + "\n" +
      "  }\n";
  }
  out += "}";

  console.log(out);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/