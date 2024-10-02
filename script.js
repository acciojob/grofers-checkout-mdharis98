const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	 const priceElements = document.querySelectorAll(".price");
  
  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach((priceElement) => {
    totalPrice += parseFloat(priceElement.textContent);
  });
  
  // Create a new row for the total price
  const table = document.getElementById("groceryTable");
  const newRow = document.createElement("tr");
  
  // Create a single cell that spans both columns
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", 2); // Span across both columns
  totalCell.textContent = `Total Price: Rs ${totalPrice}`;

  // Append the new cell to the row, and the row to the table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

