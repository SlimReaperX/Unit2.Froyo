const userInputString = prompt(
    "enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  function displayOrder() {
    const orderDetails = {
        vanilla: 3,
        coffee: 2,
        strawberry: 1
    };

    let message = "Your frozen yogurt order:\n";

    for (const flavor in orderDetails) {
        if (orderDetails.hasOwnProperty(flavor)) {
            message += `${orderDetails[flavor]} ${flavor} froyo\n`;
        }
    }

    alert(message);
}

// Call the function to display the order
displayOrder();