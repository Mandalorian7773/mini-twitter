const express = require('express');


const app = express();

app.use('/',(req, res) => {
    res.json({
        message: 'API is working',
    });
});


app.listen(3000, () => {
    console.log('Server is running on 3000');
}
);