import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import CleanCSS from 'clean-css'
import chalk from 'chalk'

const files = globSync('dist/**/*.css').sort()
const cleanCss = new CleanCSS()

for (const file of files) {
  const normalized = file.replace(/\\/g, '/')
  const out = path.join(path.dirname(normalized), `${path.basename(normalized, '.css')}.min.css`)

  console.log(chalk.gray(`Minifying: ${normalized} -> ${out}`))
  const { styles } = cleanCss.minify(fs.readFileSync(normalized, 'utf8'))
  fs.writeFileSync(out, styles)
}
