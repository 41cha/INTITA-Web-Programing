for (let i = 1; i <= 10; i++) {
    let row = "";

    for (let j = 1; j <= 10; j++) {

        if (j * i % 2 == 1) {
            row += (j * i) + "\t";

        } else {
            row += "\t";

        }
    }

    console.log(row);
}