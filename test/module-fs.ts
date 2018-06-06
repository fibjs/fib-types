/// <reference path="../declare/index.d.ts" />
/// <reference path="../declare/_test_env.d.ts" />

import * as fs from 'fs'
import * as path from 'path'
const test = require('test')

test.setup()

const targetDir = path.resolve(__dirname, 'temp')
if (!fs.exists(targetDir)) {
    fs.mkdir(targetDir)
}

describe('basic', () => {
    it('writeTextFile', () => {
        const testContent = 'testContent'
        const targetFile = path.resolve(targetDir, './output.txt')
        fs.writeTextFile(targetFile, testContent)
        assert.equal(testContent, fs.readTextFile(targetFile))
    })
})

test.run()
