var bodyParser = require('body-parser')

module.exports = function(app) {
    app.post('/webhook', (req, res) => {
        // You'll create your note here.
        console.log(Object.keys(req['next']))
        console.log(req.body)
        res.send({
            "fulfillmentText": "session : " + req['body'].toString()
        })
    });
};