module.exports = function(app) {
    app.post('/create', (req, res) => {
        // You'll create your note here.
        res.send('Creating a new note')
    });

    app.post('/update', (req, res) => {
        // You'll create your note here.
        res.send('Saving your note')
    });

    app.post('/delete', (req, res) => {
        // You'll create your note here.
        res.send('Saving your note')
    });

    app.post('/read', (req, res) => {
        // You'll create your note here.
        res.send('Saving your note')
    });
};