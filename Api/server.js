const { db } = require('./utils/database');

const { app } = require('./app');

db.sync()
.then(()=> {
    console.log('Database connected');
    startServer()
})
.catch(err => console.log(err));


const startServer = () => {
    app.listen(4001, () => {
    console.log('Todos app is running good in port 4001');
});
};

