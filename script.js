//your JS code here. If required.
//your JS code here. If required.
const inputField = document.getElementById("ip");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

button.addEventListener("click", () => {
    const number = parseFloat(inputField.value);

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${number}`;
            resolve(number);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = num * 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = num - 3;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = num / 2;
                outputDiv.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = num + 10;
                outputDiv.textContent = `Final Result: ${result}`;
                resolve();
            }, 1000);
        });
    });
});

