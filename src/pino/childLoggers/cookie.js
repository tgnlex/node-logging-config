import {logger} from '../logger';

const cookieLog = logger.child({  
  level: process.env.COOKIE_LOG_LEVEL || 'details', 
  transport: {options: {destination: '@/logs/requests.log'}}
});
function cookieLogger(req, next, err) {
  cookieLog.details(`[Req] Unsigned Cookies: ${req.cookies}`);
  cookieLog.details(`[Req] Signed Cookies: ${req.signedCookies}`);
  if (err) {
    cookieLog.error(err);
    next();
  };
  next();
}
export { cookieLogger };