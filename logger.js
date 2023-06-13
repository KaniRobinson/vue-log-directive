const logger = (binding) => {
  if (binding.oldValue === binding.value) return;
  if (!Object.keys(binding.modifiers).length) return logger({ ...binding, modifiers: { log: true } });

  Object.keys(binding.modifiers)
    .filter((modifier) => typeof console[modifier] === "function")
    .forEach(
      (modifier) =>
        console.debug(`[vue-log-directive] (${new Date().toISOString()}) ${modifier}`) ||
        console[modifier](binding.value)
    );
};

export default logger;
