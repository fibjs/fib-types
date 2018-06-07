/// <reference path="../declare/index.d.ts" />
/// <reference path="../declare/_test_env.d.ts" />

import * as fs from 'fs'
import * as path from 'path'
import vm = require('vm')

const test = require('test')

test.setup()

describe('basic', () => {
    it('Sandbox', () => {
        const sbox = new vm.SandBox({
            'orm': {}
        });

        const orm = sbox.require('orm', __dirname);
    })
})

test.run()
