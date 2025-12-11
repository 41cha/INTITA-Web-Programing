function calculate() {
    do {

        let firstnum = prompt("Enter the first number:");
        let secondnum = prompt("Enter the second number:");
        let operation = prompt("Enter the operation (+, -, *, /):");

        switch (operation) {
            case "+":
                alert("Result: " + (Number(firstnum) + Number(secondnum)));
                continue;

            case "-":
                alert("Result: " + (Number(firstnum) - Number(secondnum)));
                continue;

            case "*":
                alert("Result: " + (Number(firstnum) * Number(secondnum)));
                continue;

            case "/":
                if (secondnum == 0) {
                    alert("Error: Division by zero is not allowed.");
                    break;
                }

                alert("Result: " + (Number(firstnum) / Number(secondnum)));
                continue;

            default:
                alert("Invalid operation. Please enter one of +, -, *, /.");
                continue;

        }

    } while (confirm("Do you want to perform another calculation?"));

}

calculate();