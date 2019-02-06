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
  var out = {};

  for (const elem in salesData) {
    var sales = 0;
    comp = salesData[elem];
    if (!out[comp.name]) {
      out[comp.name] = {
        sales: 0,
        taxes: 0
      };
    }

    for (const elem in comp.sales) {
      sales += comp.sales[elem];
    }

    out[comp.name].sales += sales;
    out[comp.name].taxes += sales * salesTaxRates[comp.province];
  }

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