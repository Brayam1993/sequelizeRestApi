import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
    
    try{
        const projects = await Project.findAll()
        console.log(projects)
        res.json(projects)
    }catch(e){
        return res.status(500).json({message: error.message});
    }
}

export const createProjects = async (req, res) => {
    const {name, priority, description} = req.body;
    
    try{
        const newProject = await Project.create({
            name,
            description,
            priority
        })

        res.json(newProject)
    }catch(e){
        return res.status(500).json({message: error.message});
    }
}
