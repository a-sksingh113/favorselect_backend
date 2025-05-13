const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.FS_UPSTASH_REDIS_REST_URL,
  token: process.env.FS_UPSTASH_REDIS_REST_TOKEN,
});

module.exports = redis;
