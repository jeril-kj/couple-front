export const generateCode = () => {
  return Math.random().toString(36).substring(2, 7).toUpperCase(); // e.g. 'XK91J'
};
