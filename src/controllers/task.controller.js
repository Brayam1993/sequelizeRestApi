import { Task } from "../models/Task.js"

export async function createTask(req, res) {
    try{
        const { name, done, projectId } = req.body;
        const newTask = await Task.create({
            projectId,
            name,
            done,
        });
        res.json(newTask);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export async function getTasks(req, res) {
    try{
        const task = await Task.findAll({
            attributes: ["id","projectId","name","done"],
            order: [["id","DESC"]],
        });
        res.json(tasks);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export async function updateTask(req, res) {
    const { id } = req.params;
    try{
        const task = await Task.findOne({
            attributes: ["name","projectId","done","id"],
            where: {id},
        });

        task.set(req.body);

        await task.save();

        res.json(task);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export async function deleteTasks(req, res) {
    const {id} = req.params;
    try{
        await Task.destroy({
            where: { id },
        });

        return res.sendStatus(204);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export async function getTask(req, res) {
    const { id } = req.params;
    try{
        const task = await Task.findOne({
            where: { id },
            attributes: ["id","projectId","name","done"],
        });
        res.json(Task);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}
