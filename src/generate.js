const generate = (program, {cwd}) => {
  const [type, name] = program.args;
  try {
    switch (type) {
      case 'redux':
      (() => {
        console.log(type)
      })();
      break;
      case 'router':
      (() => {
        console.log(type)
      })();
      break;
      default:
        return null
        console.error(`ERROR: uncaught type ${type}`);
      break;
    }
  } catch (err) {
    console.error(err)
  }
  return type
}

export default generate;