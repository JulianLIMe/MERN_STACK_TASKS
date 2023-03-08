import { Router } from 'express';
import modelTask from '../models/task.js';

const router = Router();

// tets
router.get('/test', (req, res) => {
    modelTask.find()
        .then(dataPromise => console.log('db', dataPromise))
        .catch(err => console.log(err))

    res.json({
        "Developer": "Julian"
    });
})

// get database
router.get('/tasks', async (req, res) => {
    const dataPromise = await modelTask.find();
    res.status(302).json(dataPromise);
})

// get a single task from the database
router.get('/task/:id', async (req, res) => {
    const { id } = req.params;
    const task = await modelTask.findById(id);
    res.status(302).json({ task });
})

// post(send) data from the database
router.post('/task', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new modelTask({ title, description });
    await newTask.save();
    res.status(201).json({ message: "Created" });
})

// update database
router.put('/task/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await modelTask.findByIdAndUpdate(id, { title, description });
    res.json({ message: "Updated" });
})

// delete a task from the database
router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    await modelTask.findByIdAndRemove(id);
    res.json({ message: 'Deleted' })
})

export default router;
