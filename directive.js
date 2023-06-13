import logger from "./logger";

export default ({ directive }) => {
  directive("log", {
    mounted: (el, binding) => logger(binding),
    updated: (el, binding) => logger(binding),
  });
};
