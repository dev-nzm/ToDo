const { Client } = require('pg')
const client = new Client({
   host: "localhost",
   user: "postgres",
   port: "5432",
   password: "12345678",
   database: "todo",
})

client.connect();

client.query(`Select * from users`, (err, res) => {
   if (!err) {
      console.log("response==>", res.rows);
   } else {
      console.log("error=>", err.message)
   }
   client.end;
})