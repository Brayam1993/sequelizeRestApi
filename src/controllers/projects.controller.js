import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
    
    try{
        const projects = await Project.findAll()
        console.log(projects)
        res.json(projects)
    }catch(e){
        return res.status(500).json({message: error.message});
    }
};

export const getProject = async (req, res) => {
    
    try {
        const { id } = req.params
            const project = await Project.findOne({
                where: {
                    id
                }
            })
            res.json(project);
    }catch(e){
        return res.status(500).json({ message: error.message });
    }
};

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

export const updateProject = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();

        res.json(project);
    }catch(e){
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try{
        const { id } = req.params;
        await Project.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    }catch(e){
        return res.status(500).json({ message: error.message });
    }
};
