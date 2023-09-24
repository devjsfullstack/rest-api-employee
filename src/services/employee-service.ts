import { Service } from "typedi";
import { Employee, IEmployee } from "../models/EmployeModel";

@Service()
export class EmployeeService {

    public async getEmployeeById(id: number) {
        return await Employee.findByPk(id)
    }

    public async getEmployees() {
        return await Employee.findAll()
    }

    public async createEmploye(employee: IEmployee) {
        return await Employee.create({...employee})
    }

    public async updateEmployee(id: number, employe: IEmployee) {
        return await Employee.update(employe, {where: {id: id}})
    }

    public async deleteEmployee(id: number) {
        return await Employee.destroy({where: {id: id}})
    }
}