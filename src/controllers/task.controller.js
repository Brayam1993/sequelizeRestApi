import { Task } from "../models/Task.js"

export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export const createTask = async (req, res) => {
    try{
        const { name, done, projectId } = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectId,
        });
        res.json(newTask);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export const getTask = async(req, res) => {
    const { id } = req.params;
    try{
        const task = await Task.findOne({
            where: { id },
            attributes: ["id","projectId","name","done"],
        });
        res.json(task);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    try{
        const task = await Task.findOne({
            //attributes: ["name","projectId","done","id"],
            where: {id},
        });
        task.set(req.body);
        await task.save();
        return res.json(task);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    try{
        const result = await Task.destroy({
            where: { id },
        });
        console.log(result);
        return res.sendStatus(204);
    }catch(e){
        return res.status(500).json({ message: e.message });
    }
}
