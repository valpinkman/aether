// @ts-check
require('dotenv').config()
const webpack = require('webpack')
const { appendWebpackPlugin } = require('@rescripts/utilities')

module.exports = [
  require.resolve('./.rescripts.env.js'),
  appendWebpackPlugin(new webpack.DefinePlugin({
    'process.env.FIRE_API_KEY': JSON.stringify(process.env.FIRE_API_KEY),
    'process.env.FIRE_AUTH_DOMAIN': JSON.stringify(process.env.FIRE_AUTH_DOMAIN),
    'process.env.FIRE_DB_URL': JSON.stringify(process.env.FIRE_DB_URL),
    'process.env.FIRE_PROJECT_ID': JSON.stringify(process.env.FIRE_PROJECT_ID),
    'process.env.FIRE_STORAGE_BUCKET': JSON.stringify(process.env.FIRE_STORAGE_BUCKET),
    'process.env.FIRE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIRE_MESSAGING_SENDER_ID),
    'process.env.FIRE_APP_ID': JSON.stringify(process.env.FIRE_APP_ID),
  }))
]
