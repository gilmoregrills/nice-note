module.exports = function(app) {
    app.post('/webhook', (req, res, next) => {
        // You'll create your note here.
        console.log(Object.keys(req))
        console.log(req.body)
        res.send({
            "fulfillmentText": "textetxtetxt"
        })
    });
};