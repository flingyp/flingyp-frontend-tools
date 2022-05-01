/**
 * 发布脚本
 * 1. 需要用户填写发布的包名称，如果不填写 默认使用 package.json 的包名
 * 2. 执行脚本后，需要用户填写发布的 包的版本号 （默认是 读取package.json 的版本 然后小版本+1）
 * 3. 修改package.json对应的字段
 * 4. 把根目录下的package.json和README.md 文件copy到dist目录下
 * 5. 发布包
 */

/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const inquirer = require('inquirer')
const shelljs = require('shelljs')

const targetPackageFile = path.resolve(__dirname, '../package.json')
const targetReadmeFile = path.resolve(__dirname, '../README.md')

// eslint-disable-next-line import/no-dynamic-require
const packageJson = require(targetPackageFile)

// 当前版本
const currentVersion = packageJson.version
const versionArr = currentVersion.split('.')
const [mainVersion, subVersion, phaseVersion] = versionArr

// 默认包名称
const defaultPackName = packageJson.name
// 设置默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion + 1}`

// 1. 需要用户填写发布的包名称，如果不填写 默认使用 package.json 的包名
// 2. 执行脚本后，需要用户填写发布的 包的版本号 （默认是 读取package.json 的版本 然后小版本+1）
const firstInquirer = async () => {
  const inquirerResult = await inquirer.prompt([
    {
      type: 'input',
      name: 'packName',
      message: '请输入需要发布的包名称',
      default: defaultPackName,
    },
    {
      type: 'input',
      name: 'nextVersion',
      message: '请输入包版本号',
      default: defaultVersion,
    },
  ])
  return inquirerResult
}

// 3. 修改package.json对应的字段
// 4. 把根目录下的package.json和README.md 文件copy到dist目录下
const changeFileInfoAndCopy = async result => {
  shelljs.sed(
    '-i',
    `"name": "${defaultPackName}"`,
    `"name": "${result.packName}"`,
    targetPackageFile
  )

  shelljs.sed(
    '-i',
    `"version": "${currentVersion}"`,
    `"version": "${result.nextVersion}"`,
    targetPackageFile
  )

  shelljs.cp([targetReadmeFile, targetPackageFile], 'dist')
}

// 5. 发布包
const publishPack = async () => {
  shelljs.exec('npm run build')
  shelljs.exec('npm publish')
}

const startPublish = async () => {
  const inquirerResult = await firstInquirer()
  await changeFileInfoAndCopy(inquirerResult)
  await publishPack()
}

startPublish()
