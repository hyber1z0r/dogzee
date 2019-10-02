import { Sequelize } from 'sequelize-typescript';
import { Dog } from './models';

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const sequelize = new Sequelize(config);

sequelize.addModels([Dog]);

export default sequelize;
