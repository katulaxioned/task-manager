const express = require("express")
const router = express.Router()

const {getTasks, addTask, getSingleTask, updateTask, deleteTask} = require("../controllers/tasks")

router.route("/").get(getTasks).post(addTask)
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router