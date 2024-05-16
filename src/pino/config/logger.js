import {levels} from './options/levels';
import {redacted} from './options/redacted';
const config = {
  customLevels: levels,
  useOnlyCustomLevels: true,
  level: process.env.LOG_LEVEL || 'details',
  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {destination: `!/logs/info.log`}
      },
      {
        target: "pino-pretty",
      }
    ]
  },
  redact: redacted,
  timestamp: () => `, "timestamp": ${new Date(Date.now()).toISOString}`,
}


export {config};