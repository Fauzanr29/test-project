import Recipe from "../models/ProductModels.js";
import path from 'path'
import fs from 'fs'

export const getRecipe = async (req, res) => {
    try {
        const response = await Recipe.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getRecipeById = async (req, res) => {
    try {
        const response = await Recipe.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}



export const saveRecipe = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" })
    const name = req.body.title;
    const bahan = req.body.bahan;
    const steps = req.body.steps;
    const file = req.files.file;
    const fileSize = file.data.length;
    const extention = path.extname(file.name);
    const fileName = file.md5 + extention;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpeg', '.jpg'];

    if (!allowedType.includes(extention.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
    if (fileSize > 5000000) return res.status(422).json({ msg: "Invalid must be less than 5MB" })

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message })
        try {
            await Recipe.create({ name: name, bahan: bahan, steps: steps, image: fileName, url: url })
            res.status(201).json({ msg: "Recipe created successfully" })
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const deleteRecipe = async (req, res) => {
    const recipe = await Recipe.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!recipe) return res.status(404).json({ msg: "No Data Found" })
    try {
        const filepath = `./public/images/${recipe.image}`;
        fs.unlinkSync(filepath);
        await Recipe.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Product deleted successfully" })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRecipe = async (req, res) => {
    const recipe = await Recipe.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!recipe) return res.status(404).json({ msg: "No Data Found" })
    let fileName = '';
    if (req.files === null) {
        fileName = Recipe.image;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const extention = path.extname(file.name);
        fileName = file.md5 + extention;
        const allowedType = ['.png', '.jpeg', '.jpg'];

        if (!allowedType.includes(extention.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" })
        if (fileSize > 5000000) return res.status(422).json({ msg: "Invalid must be less than 5MB" })

        const filepath = `./public/images/${recipe.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message })
        })
    }
    const name = req.body.title;
    const bahan = req.body.bahan;
    const steps = req.body.steps;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Recipe.update({ name: name, bahan: bahan, steps: steps, image: fileName, url: url }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ msg: "Recipe Updated Successfully" })
    } catch (error) {
        console.log(error.message);
    }
}