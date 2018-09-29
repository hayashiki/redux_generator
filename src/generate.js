import pluralize from 'pluralize';
import upperCamelCase from 'simple-uppercamelcase';
import camelcase from 'camelcase';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { outputFileSync, removeSync } from 'fs-extra';
import Handlebars from 'handlebars';

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
        const defaultBase = 'src';
        const base = defaultBase
        const componentName = camelcase(pluralize.singular(name));
        const ComponentName = upperCamelCase(pluralize.singular(name));
        const COMPONENT_NAME = pluralize.singular(name).toUpperCase();
        const componentPath = `${base}/components/organisms/${componentName}/index.js`;
        const payload = {
          sourcePath: cwd,
          filePath: componentPath,
          componentName,
          ComponentName,
          COMPONENT_NAME
        }

        const template = createReduxContainers(payload)
        const source = template(payload);

        // outputFileSync(componentPath, source, 'utf-8');
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

export const createReduxContainers = () => {
  const filePath = join(__dirname, `../boilerplates/reduxContainers.create.handlebars`)
  // todo isExists?
  // existsSync(filePath)
  const source = readFileSync(filePath, 'utf-8');
  return Handlebars.compile(source);
}


export default generate;