const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
const routes = require("./routes");

// remove line below once all endpoints have been created

const { comments, contacts, products, vehicles } = require("./data");

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

// app.get("/contacts", (req, res) => {
//   res.json(contacts);
// });
// app.get("/contacts/:id", (req, res) => {
//   res.json(contacts.find((contact) => contact._id === parseInt(req.params.id)));
// });

// app.post("/contacts", (req, res) => {
//   const contact = {
//     _id: contacts.length + 1,
//     ...req.body,
//   };
//   contacts.push(contact);
//   res.json(contact);
// });

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
