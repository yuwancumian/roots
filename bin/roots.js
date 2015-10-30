#!/usr/bin/env node
require('shelljs/global');
var project_name = process.argv[2];
mkdir(project_name);
cd(project_name);
exec('eget ignore');
mkdir('app');
mkdir('dist');
cd('app');
mkdir('views');
cd('views');
exec('wget https://raw.githubusercontent.com/yuwancumian/rootsite/master/app/views/index.html');
cd('..');
mkdir('public');
cd('public');
mkdir('stylesheets');
mkdir('javascripts');
mkdir('images');
cd('stylesheets');
mkdir('site');
exec('git clone git@github.com:yuwancumian/bootstrap_less.git less/')
"/* Import bootstrap and site style */".to('site.less');
"\n".toEnd('site.less');
'@import "less/bootstrap.less;"'.toEnd('site.less');

cd('..');
cd('javascripts');
exec('eget jquery');
mkdir('assets');
exec('wget https://raw.githubusercontent.com/h5bp/html5-boilerplate/master/src/js/vendor/modernizr-2.8.3.min.js');

console.log(project_name + ' was inited!')
