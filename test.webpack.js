var context = require.context('./test', true, /\**\/*.js$/);
export default context.keys().forEach(context);
