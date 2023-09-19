import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { Service } from "typedi";
import { IEmployee } from "../models/employe-model";
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
            Logger.error('getEmployee', 'ERROR INFO', error)
            return Promise.reject(error)
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
            Logger.error('getEmployees', 'ERROR INFO', error)
            return Promise.reject(error)
        }
    }

    @Post('/employee')
    public async createEmployee(@Body() employee: IEmployee): Promise<IEmployee | any> {
        try {
            const newEmployee = await this.employeeSerice.createEmploye(employee)

            if (!newEmployee) return {status: 400, message: `Employee not created`}

            Logger.info('getEmployee', 'SUCCESS', newEmployee)
            
            return newEmployee
        } catch (error) {
            Logger.error('createEmployee', 'ERROR INFO', error)
            return Promise.reject(error)
        }
    }
}