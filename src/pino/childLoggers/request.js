import {http} from '../secondary/http';

const reqLog = httpLog.child({  
  level: process.env.REQUEST_LOG_LEVEL || 'http', 
  transport: {options: {destination: '@/logs/requests.log'}}
});

function reqLogger(req, next, err) {
  reqLog.http(`Incoming Request: ${req}`)
  reqLog.http(`User Agent: ${req.headers.agent}`)
  if (err) {
    reqLog.error(err);
    next();
  }
  next()
}

export {reqLog, reqLogger };