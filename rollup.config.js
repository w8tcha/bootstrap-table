import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import inject from '@rollup/plugin-inject'
import multiEntry from '@rollup/plugin-multi-entry'

// Custom plugin to replace @ in core-js comments to avoid email detection
function removeCoreJsAtSymbol () {
  return {
    name: 'remove-core-js-at-symbol',
    renderChunk (code) {
      // Replace any core-js@... occurrence with core-js [at] ...
      // to avoid email detection by security scanners
      return code.replace(/core-js@([^\s]+)/g, 'core-js [at] $1')
    }
  }
}

// Custom plugin to copy static assets into dist, replacing rollup-plugin-copy
function copyAssets (targets) {
  return {
    name: 'copy-assets',
    buildStart () {
      for (const { src, dest } of targets) {
        fs.mkdirSync(dest, { recursive: true })
        for (const file of globSync(src)) {
          fs.copyFileSync(file, path.join(dest, path.basename(file)))
        }
      }
    }
  }
}

const files = globSync('src/**/*.js', {
  ignore: [
    'src/constants/**',
    'src/modules/**',
    'src/helpers/**',
    'src/utils/**',
    'src/virtual-scroll/**',
    'src/vue/**'
  ]
})

const config = []

// Plugin shared by all bundles
const basePlugins = [
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**'
  }),
  copyAssets([
    { src: 'src/themes/bootstrap-table/fonts/*', dest: 'dist/themes/bootstrap-table/fonts' }
  ]),
  removeCoreJsAtSymbol()
]

// Inject BootstrapTable for extension/locale/theme files (everything except the main file)
const injectPlugin = inject({
  include: ['src/extensions/**/*.js', 'src/locale/**/*.js', 'src/themes/**/*.js'],
  exclude: 'node_modules/**',
  BootstrapTable: 'bootstrap-table'
})

const externalDeps = ['bootstrap-table']
const globals = { 'bootstrap-table': 'BootstrapTable' }

if (process.env.NODE_ENV === 'production') {
  basePlugins.push(terser({
    output: {
      comments () {
        return false
      }
    }
  }))
}

for (const file of files) {
  const normalizedFile = file.replace(/\\/g, '/')
  let out = `dist/${normalizedFile.replace('src/', '')}`

  if (process.env.NODE_ENV === 'production') {
    out = out.replace(/.js$/, '.min.js')
  }

  const isMainFile = normalizedFile === 'src/bootstrap-table.js'
  const isLocaleFile = normalizedFile.startsWith('src/locale/')

  if (isMainFile) {
    // Main file: UMD, no external deps, no inject.
    // exports: 'default' keeps window.BootstrapTable as the class itself (not
    // {default, initBootstrapTable}) since every extension bundle expects to
    // receive the class as its injected 'BootstrapTable' global.
    config.push({
      input: file,
      output: {
        name: 'BootstrapTable',
        file: out,
        format: 'umd',
        exports: 'default'
      },
      external: [],
      plugins: [...basePlugins]
    })
  } else if (isLocaleFile) {
    // Locale files: IIFE, no global assignment (side-effect only)
    config.push({
      input: file,
      output: {
        file: out,
        format: 'iife',
        globals
      },
      external: externalDeps,
      plugins: [injectPlugin, ...basePlugins]
    })
  } else {
    // Extension / theme files: UMD, BootstrapTable as external, export extended class
    config.push({
      input: file,
      output: {
        name: 'BootstrapTable',
        file: out,
        format: 'umd',
        globals
      },
      external: externalDeps,
      plugins: [injectPlugin, ...basePlugins]
    })
  }
}

let out = 'dist/bootstrap-table-locale-all.js'

if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}

// Locale-all bundle: IIFE (side-effect only, no global assignment)
config.push({
  input: 'src/locale/**/*.js',
  output: {
    file: out,
    format: 'iife',
    globals
  },
  external: externalDeps,
  plugins: [
    injectPlugin,
    multiEntry(),
    ...basePlugins
  ]
})

export default config
