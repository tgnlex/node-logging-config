import {logger} from '../logger';

function cookieLogger(req, next, err) {
  const cookieLog = logger.child({transport: {options: {destination: '@/logs/requests.log'}}});
  cookieLog.details(`[Req] Unsigned Cookies: ${req.cookies}`);
  cookieLog.details(`[Req] Signed Cookies: ${req.signedCookies}`);
  if (err) {
    cookieLog.error(err);
    next();
  };
  next();
}
export { cookieLogger };