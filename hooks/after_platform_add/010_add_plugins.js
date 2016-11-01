#!/usr/bin/env node

// this hook installs all your plugins

// add your plugins to this list--either
// the identifier, the filesystem location
// or the URL
var pluginlist = [
  'cordova-plugin-device',
  'cordova-plugin-console',
  'cordova-plugin-whitelist',
  'cordova-plugin-splashscreen',
  'cordova-plugin-statusbar',
  'ionic-plugin-keyboard'
]

// no need to configure below

var sys = require('sys')
var exec = require('child_process').exec

function puts(error, stdout, stderr) {
  sys.puts(stdout)
}

pluginlist.forEach(function (plug) {
  exec('ionic plugin add ' + plug, puts)
})
