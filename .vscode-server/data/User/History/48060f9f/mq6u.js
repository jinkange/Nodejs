const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});
app.get('/test', (req, res) => {
    console.log(`test`);
    res.json({
        success: true,
        test: true
    });
});


app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);

});
