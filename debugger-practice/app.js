// app.js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function processOrders(orders) {
  const result = [];

  for (const order of orders) {
    const total = order.items.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);

    result.push({
      id: order.id,
      customer: order.customer,
      total: total,
      vat: total * 0.2,
      grandTotal: total * 1.2,
    });
  }

  return result;
}

const orders = [
  {
    id: 1,
    customer: "Иванов",
    items: [
      { name: "Ноутбук", price: 85000, qty: 1 },
      { name: "Мышь", price: 1200, qty: 2 },
    ],
  },
  {
    id: 2,
    customer: "Петров",
    items: [
      { name: "Монитор", price: 32000, qty: 2 },
      { name: "Клавиатура", price: 4500, qty: 1 },
    ],
  },
];

document.getElementById("calcBtn").addEventListener("click", () => {
  const processed = processOrders(orders);
  console.log(processed);

  const total = processed.reduce((sum, o) => sum + o.grandTotal, 0);
  document.getElementById("result").textContent =
    `Итого с НДС: ${total.toLocaleString()} ₽`;
});

console.log("5! =", factorial(5));
console.log("10! =", factorial(10));
