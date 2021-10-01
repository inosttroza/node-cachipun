const app= require('./app.js');

app.listen(app.get('port'),()=>{
    console.log(`server running in port ${app.get('port')}`)
});