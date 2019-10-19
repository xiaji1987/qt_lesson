const data = require('./mock-data')
const LATENCY = 1600
export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY);
}