function addEntry() {
    const container = document.getElementById("entries");
  
    const div = document.createElement("div");
    div.className = "entry";
  
    div.innerHTML = `
      <input type="number" placeholder="Quantity" class="quantity">
      <input type="number" placeholder="Price per Share" class="price">
    `;
  
    container.appendChild(div);
  }
  
  function calculateInvestmentAverage() {
    const quantities = document.querySelectorAll(".quantity");
    const prices = document.querySelectorAll(".price");
  
    let totalCost = 0;
    let totalShares = 0;
  
    for (let i = 0; i < quantities.length; i++) {
      const quantity = parseFloat(quantities[i].value);
      const price = parseFloat(prices[i].value);
  
      if (!isNaN(quantity) && !isNaN(price)) {
        totalCost += quantity * price;
        totalShares += quantity;
      }
    }
  
    if (totalShares === 0) {
      document.getElementById("result").innerText = "Please enter valid data for at least one purchase.";
      return;
    }
  
    const averagePrice = totalCost / totalShares;
  
    document.getElementById("result").innerText =
      `Total Shares: ${totalShares} | Total Cost: ₹${totalCost.toFixed(2)} | Average Price: ₹${averagePrice.toFixed(2)} per share`;
  }
  