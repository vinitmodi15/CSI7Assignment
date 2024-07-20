const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./routes/routes.js');


let dbUrl = 'mongodb://localhost/mydatabasewithauthentication'; //mongoatlas ko iss variable m leke aaye hai
main()
  .then(() => {
    console.log("connected to the DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});