const Book = require('../models/bookModel');
exports.addBook = async (req, res) => {
    try {
        // define a new product schema, define data from request body
        let book = new Book({
            book_id: req.body.book_id,
            name: req.body.name,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            // student: req.body.student,
            // teacher:req.body.teacher
            // no reviews yet for now
        });
        // store result from saving
        let createdBook = await book.save();
        res.status(200).json({
            msg: "Add a Book complete.",
            data: createdBook
        });
    } catch (err) {
        // if there is an error, it will jump to here
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};

exports.getBooks = async (req, res) => {

    //equal to db.products.find();
    Book.find()      // equal to db.products.find();
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};


exports.deleteBook = async (req, res) => {
    Book.findByIdAndDelete(req.params.id)        //find product by id, then delete
        .exec((err)=>{
            if(err){
                res.status(500).json({
                    msg: err
                });
            } else{
                res.status(200).json({
                    msg: "Delete complete"
                });
            }
        });
};

exports.getBookById = async (req, res) => {
    Book.findById(req.params.id)     //find product by id
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.editWholeBook = async (req, res) => {
    let book = {
        book_id:req.body.book_id,
        name:req.body.name,
        author:req.body.author,
        publisher:req.body.publisher,
        price:req.body.price
    };
    Book.findByIdAndUpdate(req.params.id, book)       //find by id first, then update the returned document
        .exec((err, result) => {
            Book.findById(req.params.id)
                .exec((err, result) => {
                    // return doc ??????????????????????????????????????????????????????
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};

exports.editBook = async (req, res) => {
    let book = {
        // $push: {
            name:req.body.name,
            author:req.body.author,
            publisher:req.body.publisher,
            price:req.body.price
        // }
    };
    Book.findByIdAndUpdate(req.params.id, book)
        .exec((err, result) => {
            Book.findById(req.params.id)
                .exec((err, result) => {
                    // return doc ??????????????????????????????????????????????????????
                    res.status(200).json({
                        msg: "OK",
                        data: result
                    });
                });
        });
};