import chalk from "chalk"
import { Service } from "typedi";

@Service()
export class Logger {
    
    public static getTimeStamp(): string {
        return new Date().toISOString();
    }

    public static info(namespace: string, message: string, object?: any): void | string {
        if (object) {
            return console.log(chalk.blue(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`, JSON.stringify(object)));
        }
        return console.log(chalk.blue(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`));
    }

    public static warn(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(chalk.yellow(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`, JSON.stringify(object)));
        }
        console.log(chalk.yellow(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`));
    }

    public static error(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(chalk.red(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`, JSON.stringify(object)));
        }
        console.log(chalk.red(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
    }

    public static debug(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(chalk.green(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, JSON.stringify(object)));
        }
        console.log(chalk.green(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`));
    }
}