import { build } from '../src/build'

describe('Build function', () => {
  test('Should show error with no input', async () => {
    // @ts-ignore
    let a = await build({})
    expect(a).toBe(null)
  })
})
