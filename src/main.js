import express from 'express';
import {logger} from './logger.js';
import {debLog} from './debug.js';
import {errLog} from './error.js';
const app = express;
logger.info('Hello Log!');
debLog.meta('Hello Debug!');
errLog.crit('Oh No!');

