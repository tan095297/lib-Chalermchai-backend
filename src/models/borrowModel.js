const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowSchema = new Schema({
    borrower: {
        type:String,
        required:true
    },
    book: {
        type:String,
        required:true
    },
    dateborrow:{
        type:String,
    },
    // borrowDate: { type: Date, default: Date.now },
    // dueDate: Date,
    limit: {
        type:Number
        // บวก 7
    },
    lender:{
        type:String,
    }
}, { timestamps: true });

// export Product Schema to be usable in other components
module.exports = mongoose.model("Borrow", borrowSchema);
