var mysql = require("mysql");

var con = mysql.createConnection({
  host: "192.168.99.100",
  port: "3306",
  password: "tiger"
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected");
});
