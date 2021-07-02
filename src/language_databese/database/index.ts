import { Sequelize } from "sequelize";

const connection = new Sequelize('mysql://root:password@localhost:3306/database');

export default connection;