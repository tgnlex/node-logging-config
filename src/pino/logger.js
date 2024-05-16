import pino from 'pino';
import {config} from './config/logger';
import {httpConfig} from './config/secondary/http';
import {errConfig} from './config/secondary/error';
import {debConfig} from './config/secondary/debug';







/* TODO */
// Setup logfile rotation
// Setup cutom color config
// Secondary Child Loggers. 

const logger = pino(config);
const httpLog = pino(httpConfig);
const debLog = pino(debConfig);
const errLog = pino(errConfig);




export {logger, httpLog, debLog, errLog};