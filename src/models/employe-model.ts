import {Sequelize, DataTypes, Model} from 'sequelize'
import { sequelize } from '../services/sequelize-mysql-service'

export interface IEmployee extends Model<IEmployee> {
    id?: number
    nombre: string
    apellido: string,
    email: string,
    telefono: string,
    password: string,
    createdAt?: string,
    updatedAt?: string
}

export const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})