/**
 * Created by vvtommy on 16/1/13.
 */
'use strict';

var juicer = require('juicer');

function compile(str) {
  return juicer.compile(str).render;
}

module.exports = {
  compile: compile
};
