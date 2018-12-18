module.exports = function(app) {
    app.post('/', (req, res) => {
        // You'll create your note here.
        console.log(req.body)
        res.send({
            "fulfillmentText": "This is a text response"
        })
    });
};