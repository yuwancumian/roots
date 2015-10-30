#!/usr/bin/env node
require('shelljs/global');
var project_name = process.argv[2];
mkdir(project_name);
cd(project_name);
mkdir('app');
mkdir('dist');
cd('app');
mkdir('views');
mkdir('public');
cd('public');
mkdir('less');
mkdir('js');
mkdir('images');

console.log(project_name + ' was inited!')
