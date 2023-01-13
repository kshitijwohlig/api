const Customer_Infos  = require("../models/customer_info");
const Ajv = require("ajv")
const ajv = new Ajv()

//schemas of customer, product
const SchemaCustomer = {
    type: 'object',
    properties: {
        catid: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        dob: {
            type: 'string'
        },
        pass: {
            type: 'string'
        },
        address: {
            type: 'string'
        }
    },
    required: ["name", "phone", "email", "dob", "pass", "address"]
}

// Schemas of Many Customer Maybe
const SchemaCustomerMany = {
    type: 'array',
    properties: {
        catid: {    
            type: 'string'
        },
        name: {
            type: 'string'
        },
        phone: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        dob: {
            type: 'string'
        },
        pass: {
            type: 'string'
        },
        address: {
            type: 'string'
        }
    },
    required: ["name", "phone", "email", "dob", "pass", "address"]

}

//  Some Useful Details for the Pagination  

let a = {
    options: {
        page: 1,
        limit: 1,
        keyword: ""
    },
    results: [{}, {}],
    totalcount: 10
}


// 1. Create Customer Data, Schema = SchemaCustomer
const createCustomers = async (req, res) => {
    try {
        const data = req.body
        const validate = ajv.compile(SchemaCustomer)
        const valid = validate(data)
        const add = new Customer_Infos(data)
        if (!valid) throw new Error(validate.errors[0].message)
        else {
            const result = await add.save()
            res.status(200).json(result)
        }
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

// 2. Get Customer Data

const getCustomers = async (req, res) => {
    try {
        const result = await Customer_Infos.find()
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}

// 3. Get Particular Customer Data

const getCustomerOne = async (req, res) => {
    try {
        const data = req.query._id
        console.log(data,"this is data");
        const result = await Customer_Infos.findById({ _id: data })
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}


module.exports = { createCustomers, getCustomers, getCustomerOne}






