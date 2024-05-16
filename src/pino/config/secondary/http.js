import {levels} from '../options/levels';
import {redacted} from '../options/redacted';

const httpConfig = {
  customLevels: levels,
  useOnlyCustomLevels: true,
  level: process.env.HTTP_LOG_LEVEL || 'http',
  transport: {
    targets: [
     {
      target: "pino/file",
      options: {destination: `~/logs/http.log`}
     },
     {
      target: "pino-pretty",
     }
    ]
  },
  redact: redacted,

  timestamp: () => `, "timestamp": ${new Date(Date.now()).toISOString}`,
}

export { httpConfig };