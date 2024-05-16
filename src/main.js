import express from 'express';
import {pinoHTTP} from 'pino-http'
import {logger, httpLog, debLog, errLog} from './pino/logger.js';
const app = express;
log = logger;
logger.info('Hello Log!');
debLog.meta('Hello Debug!');
errLog.crit('Oh No!');

app.use(pinoHTTP({logger: httpLog}))


