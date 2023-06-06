#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv

switch (argv._[0]) {
  case 'add':
    if (argv.day || argv.d) {
      console.log(setDay('add'))
    }
    break
  case 'sub':
    if (argv.month || argv.m) {
      console.log(setMonth('sub'))
    }
}

if (!argv._[0]) {
  if (argv.y || argv.year) {
    console.log(new Date().getFullYear())
  } else if (argv.m || argv.month) {
    console.log(new Date().getMonth() + 1)
  } else if (argv.d || argv.date) {
    console.log(new Date().getDate())
  } else {
    console.log(new Date())
  }
}

function setDay(param) {
  if (param === 'add'){
    let d = new Date()
    d.setDate(d.getDate() + (argv.d || argv.date))
    return d
  }
}

function setMonth(param) {
  if (param === 'sub'){
    let m = new Date()
    m.setMonth(m.getMonth() - (argv.m || argv.month))
    return m
  }
}

