import { parse } from 'vue-docgen-api'
const path = require('path')

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app.use(async function (req, res) {
  try {
    console.log(req.body)

    const componentFolder1 = path.resolve('./node_modules/')

    const componentParsed = await parse(
      `${componentFolder1}/watson-vue/src/components/Button/Button.vue`
    )

    res.status(200).json({ data: componentParsed })
  } catch (error) {
    res.end(`Failed parsing component`)
  }
})
