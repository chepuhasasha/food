#!/usr/bin/env node

import c from './services/logger.servise.js'
import scene from './services/scenes.service.js'
import commander from 'commander'

commander
  .command('config')
  .alias('c')
  .description('Настройка данных о себе')
  .action(async function () {
    const config = await scene.start('config')
    c.obj('CONFIG', config)
  });

commander.parse(process.argv);