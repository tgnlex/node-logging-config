import {logger} from '../logger';


function reqLogger(req, next, err) {
  const reqLog = logger.child({transport: {options: {destination: '@/logs/requests.log'}}})  
  reqLog.event(`Incoming Request: ${req}`)
  reqLog.details(`User Agent: ${req.headers.agent}`)
  if (err) {
    reqLog.error(err);
    next();
  }
  next()
}

export { reqLogger };