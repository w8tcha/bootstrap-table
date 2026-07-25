import path from 'path'
import { execSync } from 'child_process'
import { globSync } from 'glob'
import chalk from 'chalk'

const args = process.argv.slice(2)
const pattern = args[args.indexOf('-g') + 1]
const template = args[args.indexOf('-x') + 1]

if (!pattern || !template) {
  console.error('Usage: node tools/foreach.js -g <glob pattern> -x <command template>')
  process.exit(1)
}

const files = globSync(pattern).sort()

for (const file of files) {
  const normalized = file.replace(/\\/g, '/')
  const command = template
    .replaceAll('#{path}', normalized)
    .replaceAll('#{dir}', path.dirname(normalized))
    .replaceAll('#{name}', path.basename(normalized, path.extname(normalized)))

  console.log(chalk.gray(`Executing: ${command}`))
  execSync(command, { stdio: 'inherit' })
}
