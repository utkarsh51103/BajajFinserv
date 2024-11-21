import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

app.post('/bfhl', (req, res) => {
    try {
        const { data, file_b64 } = req.body;

        const numbers = [];
        const alphabets = [];
        data.forEach((item) => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (/^[a-zA-Z]$/.test(item)) {
                alphabets.push(item);
            }
        });

        const lowercase = alphabets.filter((char) => char === char.toLowerCase());
        const highestLowercase = lowercase.length
            ? [lowercaseAlphabets.sort().pop()]
            : [];

        
        const isPrimeFound = numbers.some((num) => isPrime(Number(num)));

        

        res.status(200).json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase,
            is_prime_found: isPrimeFound,
        });
    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: "An error occurred while processing the request.",
        });
    }
});

app.get('/bfhl',(req,res)=>{
    try {
        
         res.status(200).json({
            "operation_code":1 
         })

    } catch (error) {
        res.status(500).json({
            message: "An error occurred while processing the request.",
        })
    }
})

app.listen(3004, () => {
    console.log('Server is running on port 3004');
});
