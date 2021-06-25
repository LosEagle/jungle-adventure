const Application = {
  keepAlive: () => setInterval(() => {}, 1 << 30),
  exit: () => {
    process.exit(0);
  },
}

module.exports = { Application };
