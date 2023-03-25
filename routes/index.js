const router = require("express").Router();
const contacts = require("./contacts");
const comments = require("./comments");
const vehicles = require("./vehicles");
const products = require("./products");

router.use("/contacts", contacts);
router.use("/comments", comments);
router.use("/vehicles", vehicles);
router.use("/products", products);

module.exports = router;
