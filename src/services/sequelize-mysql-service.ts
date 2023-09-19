import {Sequelize} from 'sequelize'
import { Logger } from './logger-service'

export const sequelize = new Sequelize(`${process.env.DBNAME}`,`${process.env.DBUSER}`,`${process.env.BDPASS}`, {
    host: `${process.env.DBHOST}`,
    dialect: 'mysql'
})

export const sequelizeConnection = () => {
    try {
        sequelize.authenticate()
        sequelize.sync()
        Logger.info('Sequelize', 'Connection has been established successfully.', {ok: true})
    } catch (error) {
        Logger.error('Sequelize', 'Unable to connect to the database:', error)
    }
}