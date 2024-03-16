import Sequelize from 'sequelize';
import env from 'process'
import path from 'path';

import configJson from '../config/config.json' assert { type: 'json' };
const config = configJson[env] || configJson['development']; 


//const env = process.env.NODE_ENV || 'development';
//const config = path.join(__dirname, '..', 'config', 'config.json')[env];

const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password,{
        host:config.host,
        dialect:config.dialect,
        port:config.port,
        define:{
            timestamps:false
        }
    });

export default sequelize;
