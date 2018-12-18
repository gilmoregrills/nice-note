module.exports = function(app) {
    app.post('/create', (req, res) => {
        // You'll create your note here.
        console.log(req.body)
        var parameters = req.body["queryResult"]["parameters"]
        res.send('Creating a new note')
    });

    app.post('/update', (req, res) => {
        // You'll create your note here.
        res.send('Updating your note')
    });

    app.post('/delete', (req, res) => {
        // You'll create your note here.
        res.send('Deleting your note')
    });

    app.post('/read', (req, res) => {
        // You'll create your note here.
        res.send('Fetching your note')
    });

    app.post('/', (req, res) => {
        // You'll create your note here.
        res.send('This is home')
    });
};