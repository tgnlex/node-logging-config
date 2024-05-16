import {levels} from './options/levels';
import {redacted} from './options/redacted';
const errConfig = {
  customLevels: levels,
  useOnlyCustomLevel: true,
  level: process.env.ERROR_LOG_LEVEL || 'warn',
  transport: {
    targets: [
    {
      target: 'pino/file',
      options: { destionation: `~/logs/errors.log`}
    },
     {
      target: "pino-pretty",
     }
    ]
  },
  redact: redacted,
  timestamp: () => `, "timestamp": ${new Date(Date.now()).toISOString}`,
}
export { errConfig };