const express = require('express');
const router = express.Router();
const Task = require('../models/Task')


// GETS BACK ALL POST
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch (err) {
        res.json({ message: err })
    }
});


//  SUBMITS A POST
router.post('/', async (req, res) => {
    const newTask = new Task({
        task: req.body.task,
    });
    try {
        const savedTask = await newTask.save();
        res.json(savedTask);
    }
    catch (err) {
        res.json({ message: err })
    }
});


// GETS BACK A SPECIFIC TASK
router.get('/:taskId', async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        res.json(task);
    }
    catch (err) {
        res.json({ message: err });
    }
});


// DELETE A TASK
router.delete('/:taskId', async (req, res) => {
    try {
        const deletedTask = await Task.deleteOne({ _id: req.params.taskId });
        res.json(deletedTask);
    }
    catch (err) {
        res.json({ message: err });
    }
});


// DELETE MANY
router.delete('/', async (req, res) => {
    try {
        const deleteAllTask = await Task.deleteMany({})
        res.json(deleteAllTask)
    }
    catch (err) {
        res.json({ message: err })
    }
})


// Edit a Task
router.patch('/:taskId', async (req, res) => {
    try {
        const editedTask = await Task.updateOne(
            { _id: req.params.taskId },
            { $set: { task: req.body.task } }
        );
        res.json(editedTask);
    }
    catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;