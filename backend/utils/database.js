import Sequelize from 'sequelize';
import env from 'process'

import configJson from '../config/config.json' assert { type: 'json' };
const config = configJson[env] || configJson['development']; 

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
