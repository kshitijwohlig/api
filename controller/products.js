// const { Products }  = require("../models/products");
const Products  = require("../models/products");
const Ajv = require("ajv");
const ajv = new Ajv();

const SchemaP = {
  type: "object",
  properties: {
    catid: {
      type: "string",
    },
    name: {
      type: "string",
    },
    stock: {
      type: "integer",
    },
    price: {
      type: "integer",
    },
    colors: {
      type: "array",
    },
    sizes: {
      type: "array",
    },
    material: {
      type: "string",
    },
    product_detail: {
      type: "string",
    },
  },
  required: [
    "catid",
    "name",
    "stock",
    "price",
    "colors",
    "sizes",
    "material",
    "product_detail",
  ],
};

// products function

// 1. Get Product

const getProducts = async (req, res) => {
  try {
    const result = await Products.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 2. Get Product

const createProducts = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    const validate = ajv.compile(SchemaP);
    // console.log(validate,"dfd");
    const valid = validate(data);
    console.log(valid, "valid");
    if (!valid) throw new Error(validate.errors[0].message);
    else {
      console.log("Hello");
      const result = await Products.insertMany([data]);
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 3. Upddate Product



// 4. Delete Product

// 5. Get Single Product


module.exports = { createProducts, getProducts };
