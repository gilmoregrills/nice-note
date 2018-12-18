const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 8443

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))