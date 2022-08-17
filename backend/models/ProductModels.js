import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Recipe = db.define('recipe', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bahan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    steps: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

export default Recipe;

(async()=>{
    await db.sync();
})();