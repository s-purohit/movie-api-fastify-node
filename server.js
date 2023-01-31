const app = require("fastify")({
    logger: true
})
const fs = require('fs');

let db = [];
// let db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

// app.get('/db', (request, reply) => {
//     reply.send(db);
//   });

app.post('/data', (request, reply) => {
    // console.log("hello");
    db.push(request.body);
    fs.writeFileSync('./db.json', JSON.stringify(db));
    reply.send(db);
  });
   

const port = 3000;
app.listen(port, (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
  });
  