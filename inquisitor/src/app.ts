import Inquisitor from "./inquisitor";

(async () => {
  // Initialize and call Inquisitor
  const inquisitor = new Inquisitor();
  await inquisitor.process();
})();
