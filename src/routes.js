module.exports = function(app) {
    app.post('/webhook', (req, res, next) => {
        // You'll create your note here.
        var intent = req.body['queryResult']['intent']['displayName']
        var keywords = req.body['queryResult']['parameters']['keyword']
        var user = req.body['queryResult']['parameters']['user']
        var plural = req.body['queryResult']['parameters']['plural']
        var date = req.body['queryResult']['parameters']['date']
        var timePeriod = req.body['queryResult']['parameters']['time-period']
        var datePeriod = req.body['queryResult']['parameters']['date-period']

        res.send({
            "fulfillmentText": "executing function for intent: " + intent
        })
    });
};