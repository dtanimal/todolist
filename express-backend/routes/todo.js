const express = require("express");
const jwt = require("jsonwebtoken");
const Todo = require("../models/Todo");

const privateKey = process.env.JWT_PRIVATE_KEY;

const router = express.Router();

router.use(function (req, res, next) {
  if (req.header("Authorization")) {
    try {
      req.payload = jwt.verify(req.header("Authorization"), privateKey, {
        algorithms: ["RS256"],
      });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

router.post("/", async function (req, res) {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    author: req.payload.id,
    dateCreated: req.body.dateCreated,
    dateCompleted: req.body.dateCompleted,
  });
  return todo
    .save()
    .then((savedPost) => {
      return res.status(201).json({
        _id: savedPost._id,
        title: savedPost.title,
        description: savedPost.description,
        author: savedPost.author,
        dateCreated: savedPost.dateCreated,
        dateCompleted: savedPost.dateCompleted,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

router.get("/", async function (req, res, next) {
  const todos = await Todo.find().where("author").equals(req.payload.id).exec();
  return res.status(200).json({ todos: todos });
});

router.get("/:id", async function (req, res, next) {
  const todo = await Todo.findOne().where("_id").equals(req.params.id).exec();
  return res.status(200).json(todo);
});

router.delete("/delete/:id", async function (req, res, next) {
  const deleteTodo = await Todo.deleteOne()
    .where("_id")
    .equals(req.params.id)
    .exec();
  return res.status(200).json(deleteTodo);
});

// router.patch("/:id", async function (req, res, next) {
//   const filter = { _id: req.params.id };
//   const update = {
//     dateCompleted: req.body.dateCompleted,
//   };
//   const toggleTodo = await Todo.findOneAndUpdate(filter, update, {
//     new: true,
//   });
//   return res.status(200).json(toggleTodo);
// });

// router.patch("/patch/:id", async function (req, res, next) {
//   const toggleTodo = await Todo.findByIdAndUpdate()
//     .where("_id")
//     .equals(req.params._id)
//     .exec();
//   toggleTodo.dateCompleted = req.body.dateCompleted;
//   toggleTodo.save();
//   return res.status(200).json(toggleTodo);
// });

// router.patch("/patch/:id", async function (req, res, next) {
//   const filter = { _id: req.params.id };
//   const update = { dateCompleted: req.body.dateCompleted };

//   const toggleTodo = await Todo.findOneAndUpdate(filter, update, { new: true });
//   return res.status(200).json({ toggleTodo });
// });

router.patch("/patch/:id", async function (req, res, next) {
  const toggleTodo = await Todo.findByIdAndUpdate(req.params._id, {
    dateCompleted: req.body.dateCompleted,
  });
  return res.status(200).json({ toggleTodo });
});

// router.patch("/patch/:id", async function (req, res, next) {
//   const toggleTodo = await Todo.findByIdAndUpdate()
//     .where("_id")
//     .equals(req.params.id)
//     .exec();
//   toggleTodo.dateCompleted = req.body.dateCompleted;
//   toggleTodo.save();
//   if (toggleTodo) {
//     return res.status(200).json(toggleTodo);
//   } else {
//     return res.status(404).json({ message: "Todo not found" });
//   }
// });

// router.patch("/:id", async function (req, res, next) {
//   const toggleTodo = await Todo.findOneAndUpdate()
//     .where("_id")
//     .equals(req.params.id)
//     .exec();
//   todo.dateCompleted = req.body.dateCompleted;
//   return res.status(200).json(toggleTodo);
// });

module.exports = router;
