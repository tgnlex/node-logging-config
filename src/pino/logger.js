import pino from 'pino';
import {config} from './config/info';

/* TODO */
// Setup logfile rotation
// Setup cutom color config
// Child Error Loggers. 

const logger = pino(config);







export {logger};