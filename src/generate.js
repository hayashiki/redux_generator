import pluralize from 'pluralize';
import upperCamelCase from 'simple-uppercamelcase';
import camelcase from 'camelcase';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { outputFileSync, removeSync } from 'fs-extra';
import Handlebars from 'handlebars';

const singularedCamelCase = name => {
  return camelcase(pluralize.singular(name))
}

const singularedUpperCamelCase = name => {
  return upperCamelCase(pluralize.singular(name));
}

const singularedUpperCase = name => {
  return pluralize.singular(name).toUpperCase();
}

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
        const componentName = singularedCamelCase(name);
        const ComponentName = singularedUpperCamelCase(name)
        const COMPONENT_NAME = singularedUpperCase(name)
        const componentPath = `${base}/components/organisms/${componentName}/index.js`;
        const reduxPath = `${base}/redux/${componentName}/ducks.js`;

        const payload = {
          componentName,
          ComponentName,
          COMPONENT_NAME
        }

        const containerTemplate = createReduxContainers();
        const containerSource = containerTemplate(payload);
        const reduxTemplate = createReduxActions();
        const reduxSource = reduxTemplate(payload);

        outputFileSync(componentPath, containerSource, 'utf-8');
        outputFileSync(reduxPath, reduxSource, 'utf-8');
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

export const createReduxActions = () => {
  const filePath = join(__dirname, `../boilerplates/reduxActions.create.handlebars`)
  // todo isExists?
  // existsSync(filePath)
  const source = readFileSync(filePath, 'utf-8');
  return Handlebars.compile(source);
}


export default generate;