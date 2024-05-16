import {levels} from '../options/levels';
import {redacted} from '../options/redacted';

const debConfig = {
  customLevels: levels,
  useOnlyCustomLevels: true,
  level: process.env.DEBUG_LOG_LEVEL || 'debug',
  transport: {
    targets: [
     {
      target: "pino/file",
      options: {destination: `~/logs/debug.log`}
     },
     {
      target: "pino-pretty",
     }
    ]
  },
  redact: redacted,

  timestamp: () => `, "timestamp": ${new Date(Date.now()).toISOString}`,
}

export { debConfig };