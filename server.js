var express = require("express")
var app = express()
var port = process.env.port || 3000;

// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Route to handle adding two numbers
app.get("/addTwoNumbers", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if numbers are provided and valid
    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({
            message: "Invalid parameters",
            status: 400
        });
    } else {
        const result = addNumbers(num1, num2);
        res.status(200).json({
            message: "Addition successful",
            status: 200,
            result: result
        });
    }
});

app.listen(port, ()=>{
    console.log("App listening to: "+port)
})