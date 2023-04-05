var express = require("express");
var router = express.Router();
const Controller = require("../controller/indexController");
const { check } = require("express-validator");
const { validate } = require("../middlewares/validateId");

router.get("/ver", Controller.list);
router.post(
  "/crear",
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("name is required.")
      .isString()
      .withMessage("name must be a string."),
    check("brand")
      .not()
      .isEmpty()
      .withMessage("brand is required.")
      .isString()
      .withMessage("brand must be a string."),
    check("size")
      .not()
      .isEmpty()
      .withMessage("size is required.")
      .isString()
      .withMessage("size must be a string."),
    check("price").not().isEmpty().withMessage("price is required"),
    check("stock")
      .not()
      .isEmpty()
      .withMessage("stock is required.")
      .isBoolean()
      .withMessage("stock must be a boolean."),
    check("img")
      .not()
      .isEmpty()
      .withMessage("img is required.")
      .isString()
      .withMessage("img must be a string."),
    check("desc").isString().withMessage("desc must be a string."),
  ],
  Controller.create
);
router.put(
  "/actualizar/:id",
  validate,
  [
    check("name")
      .not()
      .isEmpty()
      .withMessage("name is required.")
      .isString()
      .withMessage("name must be a string."),
    check("brand")
      .not()
      .isEmpty()
      .withMessage("brand is required.")
      .isString()
      .withMessage("brand must be a string."),
    check("size")
      .not()
      .isEmpty()
      .withMessage("size is required.")
      .isString()
      .withMessage("size must be a string."),
    check("price")
      .not()
      .isEmpty()
      .withMessage("price is required.")
      .isDecimal()
      .withMessage("price must be a number."),
    check("stock")
      .not()
      .isEmpty()
      .withMessage("stock is required.")
      .isBoolean()
      .withMessage("stock must be a boolean."),
    check("img")
      .not()
      .isEmpty()
      .withMessage("img is required.")
      .isString()
      .withMessage("img must be a string."),
    check("desc").isString().withMessage("desc must be a string."),
  ],
  Controller.update
);
router.delete("/eliminar/:id", validate, Controller.delete);

module.exports = router;
