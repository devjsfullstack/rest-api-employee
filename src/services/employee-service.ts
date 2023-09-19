import { Service } from "typedi";
import { Employee, IEmployee } from "../models/employe-model";

@Service()
export class EmployeeService {

    public async getEmployeeById(id: number) {
        return await Employee.findByPk(id)
    }

    public async getEmployees() {
        return await Employee.findAll()
    }

    public async createEmploye(employee: any) {
        const {nombre, apellido, email, telefono, password} = employee;
        return await Employee.create({nombre, apellido, email, telefono, password})
    }
}