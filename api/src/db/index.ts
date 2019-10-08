import { Sequelize } from 'sequelize-typescript';
import { Dog, User } from './models';

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const sequelize = new Sequelize(config);

sequelize.addModels([Dog, User]);

export default sequelize;
