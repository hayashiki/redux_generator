import generate from '../src/generate'
import assert from "power-assert"

describe('command args', () => {
  it('return redux type', () => {
    const program = { args: [ 'redux', 'item' ] } 
    const redux = generate(program, { cwd: process.cwd() })
    assert("redux" === redux);
  })

  it('return router type', () => {
    const program = { args: [ 'router', 'item' ] } 
    const router = generate(program, { cwd: process.cwd() })
    assert("router" === router);
  })

  it('return invalid type', () => {
    const program = { args: [ 'invalid', 'item' ] } 
    const invalidType = generate(program, { cwd: process.cwd() })
    assert( invalidType == null );
  })
})
