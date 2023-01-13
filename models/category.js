const mongoose = requier('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:25
    },
},
{ timestamps: true })

module.exports = mongoose.model('Category',CategorySchema)

// From Excel
// Categorys
// catid : Objectid
// cat_name : String