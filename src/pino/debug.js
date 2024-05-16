import pino from 'pino';
import {debConfig} from './config/debug';

const debLog = pino(debConfig);





export {debLog};