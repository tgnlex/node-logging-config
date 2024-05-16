import pino from 'pino';
import {errConfig} from './config/error';

const errLog = pino(errConfig);







export {errLog};