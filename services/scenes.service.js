import inquirer from 'inquirer'

export default {
  start: async function(name) {
    const result = {}
    for (const q of this[name]) {
      await inquirer.prompt(q).then(answer => {
        result[q.name] = answer[q.name]
      })
    }
    return result
  },

  config: [
    {
      type: "number",
      name: "age",
      message: "Ваш возраст:",
    },
    {
      type: "number",
      name: "growth",
      message: "Ваш рост:",
    },
    {
      type: "number",
      name: "weight",
      message: "Ваш вес:",
    }
  ]
}