import chalk from 'chalk';

export default {
  clear() {
    console.log("\x1Bc");
  },
  log(
    message = 'Message...',
    title = 'TITLE',
    primary = '#FFFFFF',
    secondary = '#FFFFFF',
  ) {
    const status = chalk.bgHex(primary)
    const label = chalk.hex(primary)
    const text = chalk.hex(secondary)
    console.log(`\n${status(' ')} ${label(title)}`);
    console.log(text(`└ ${message} \n`));
  },

  obj(title, o) {
    const status = chalk.bgBlue
    const label = chalk.blue(` ${title} `)
    const prop = chalk.gray
    console.log(`\n${status(' ')} ${label}`);
    for (const key in o) {
      console.log(` ${prop(key.toUpperCase() + ':')} ${o[key]}`)
    }
  },

  error(message) {
    this.log(
      message,
      'ERROR',
      '#ee7878',
    )
  },

  warning(message) {
    this.log(
      message,
      'WARNING',
      '#eede78',
    )
  },

  sucsess(message) {
    this.log(
      message,
      'SUCSESS',
      '#4ed07a',
    )
  },

  info(message) {
    this.log(
      message,
      'INFO',
      '#999999',
    )
  }
}