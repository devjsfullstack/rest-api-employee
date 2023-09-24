import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { Service } from "typedi";
import { IEmployee } from "../models/EmployeModel";
import { EmployeeService } from "../services/employee-service";
import { Logger } from "../services/logger-service";


@Service()
@JsonController(`${process.env.URL_CONTEXT}`)
export class EmployeeController {

    constructor(
        private employeeSerice: EmployeeService,
        private logger: Logger
    ) {}
    
    @Get('/employee/:id')
    public async getEmployee(@Param('id') id: number): Promise<IEmployee | any> {
        try {
            const employes = await this.employeeSerice.getEmployeeById(id)

            if (!employes) return {status: 404, message: `Employee not found`}

            Logger.info('getEmployee', 'SUCCESS', employes)

            return employes
        } catch (error) {
            Logger.error('getEmployee', 'ERROR', error)
            return await Promise.reject(error)
        }
    }

    @Get('/employee')
    public async getEmployees(): Promise<IEmployee[] | any[]> {
        try {
            const employees = await this.employeeSerice.getEmployees()

            if (!employees.length) return []

            Logger.info('getEmployees', 'SUCCESS', employees)

            return employees
        } catch (error) {
            Logger.error('getEmployees', 'ERROR', error)
            return await Promise.reject(error)
        }
    }

    @Post('/employee')
    public async createEmployee(@Body() employee: IEmployee): Promise<IEmployee | any> {
        try {
            const newEmployee = await this.employeeSerice.createEmploye(employee)

            if (!newEmployee) return {status: 400, message: `Employee not created`}

            Logger.info('getEmployee', 'SUCCESS', newEmployee)
            
            return newEmployee
        } catch (error: any) {
            Logger.error('createEmployee', 'ERROR', error)
            return await Promise.reject(error)
        }
    }

    @Put('/employee/:id')
    public async updateEmployee(@Param('id') id: number, @Body() employee: IEmployee): Promise<IEmployee | any> {
        try {
            const update = await this.employeeSerice.updateEmployee(id, employee)

            console.log('UPDATE:', update)

            if (!update) return {status: 400, message: `Employee not updated`}

            Logger.info('updateEmployee', 'SUCCESS', update)

            return update
        } catch (error: any) {
            Logger.error('updateEmployee', 'ERROR', error)
            return await Promise.reject(error)
        }
    }

    @Delete('/employee/:id')
    public async deleteEmployee(@Param('id') id:number): Promise<IEmployee | any> {
        try {
            const _delete = await this.employeeSerice.deleteEmployee(id)

            console.log('DELETE:', _delete)

            if (!_delete) return {status: 400, message: `Employee no deleted`}

            Logger.info('deleteEmployee', 'SUCCESS', _delete)

            return _delete
        } catch (error) {
            Logger.error('deleteEmployee', 'ERROR', error)
            return await Promise.reject(error)
        }
    }
}