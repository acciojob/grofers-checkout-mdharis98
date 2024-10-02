// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all the elements with class "price"
    const prices = document.querySelectorAll(".price");
    
    // Initialize total to 0
    let total = 0;
    
    // Loop through the prices and sum them
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Create a new row for the total
    const table = document.getElementById("grocery-table");
    const newRow = document.createElement("tr");
    
    // Create a single cell spanning two columns to show the total price
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;  // Span across two columns
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalCell.style.fontWeight = "bold"; // Optional styling
    
    // Append the new cell to the row and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Add event listener to the button to calculate total on click
getSumBtn.addEventListener("click", getSum);
