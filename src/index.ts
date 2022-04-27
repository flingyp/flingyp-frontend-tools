import path from 'path'

const sayHello = (): string => {
  console.log('Hello Npm Package', path.resolve(__dirname, './dist'))
  return 'Hello Npm Packagem'
}

const username: string = 'Hello Rollup'

console.log('username', username)

export { sayHello, username }
