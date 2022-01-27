#!/usr/bin/env node

import c from './services/logger.servise.js'
import scenes from './services/scenes.service.js'
import inquirer from 'inquirer'
import commander from 'commander'


// log service
// c.info(123)
// c.sucsess(123)
// c.warning(123)
// c.error(123)
// c.obj('OBJ', {
//   a: 123,
//   b: '123'
// })

// food c  СОЗДАНИЕ ИЛИ ПЕРЕЗАПИСЬ КОНФИГА
// Ввод роста
// Ввод веса
// Ввод возраста
// Расчет необходимых вешеств
// Запись конфига

async function scene(array) {
  const result = {}
  for (const q of array) {
    await inquirer.prompt(q).then(answer => {
      result[q.name] = answer[q.name]
    })
  }
  return result
}

commander
    .command('config')
    .alias('c')
    .description('Настройка данных о себе')
    .action(async function () {
      const config = await scene(scenes.config)
      c.obj('CONFIG', config)
    });

commander.parse(process.argv);