import assert from "power-assert"
import { createReduxContainers } from '../src/generate'
import { readFileSync } from 'fs';
import { join } from 'path';

describe('handlebars components', () => {
  it('compiled handlebars ', () => {
    const template = createReduxContainers()
    const payload = { 
      sourcePath: join(__dirname, `../jest_execute`),
      filePath: 'src/components/organisms/itemProduct/index.js',
      componentName: 'itemProduct',
      ComponentName: 'ItemProduct',
      COMPONENT_NAME: 'ITEM_PRODUCT' 
    }
    const componentSource = template(payload);
    const testComponentSource = readFileSync(join(__dirname, `../jest_execute/fixtures/output_item_product_containers.js`), 'utf-8')
    assert(componentSource, testComponentSource);
  })
})
