import assert from "power-assert"
import { createReduxContainers, createReduxActions } from '../src/generate'
import { readFileSync } from 'fs';
import { join } from 'path';

describe('handlebars components', () => {
  it('compiled components handlebars ', () => {
    const template = createReduxContainers()
    const payload = { 
      componentName: 'itemProduct',
      ComponentName: 'ItemProduct',
      COMPONENT_NAME: 'ITEM_PRODUCT' 
    }
    const componentSource = template(payload);
    const testComponentSource = readFileSync(join(__dirname, `../jest_execute/fixtures/output_item_product_containers.js`), 'utf-8')
    assert(componentSource, testComponentSource);
  })

  it('compiled redux handlebars ', () => {
    const template = createReduxActions()
    const payload = { 
      componentName: 'itemProduct',
      ComponentName: 'ItemProduct',
      COMPONENT_NAME: 'ITEM_PRODUCT' 
    }
    const componentSource = template(payload);
    const testComponentSource = readFileSync(join(__dirname, `../jest_execute/fixtures/output_item_product_redux.js`), 'utf-8')
    assert(componentSource, testComponentSource);
  })
})
