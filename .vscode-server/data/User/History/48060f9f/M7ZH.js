const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});
app.get('/test', (req, res) => {
    res.json({
        success: true
    });
});


app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);

});
