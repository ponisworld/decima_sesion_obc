import * as controller from './controller.js'
const suma = controller.suma;
const multiplica = controller.multiplica;

console.log(multiplica(suma(1,2), suma(4,5)));

import chalk from 'chalk';

console.log(chalk.green('Hello world!'));