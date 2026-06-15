const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((total, customer) => {
  return total + customer.amount;
}, 0);

console.log(totalSpending);