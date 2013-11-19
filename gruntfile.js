'use strict';

module.exports = function(grunt) {

  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //uglify 任务
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%=pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    //multi 任务
    multi: {
      foo: [1, 2, 3],
      bar: 'hello world',
      baz: false
    }
  });

  // 加载提供"uglify"任务的插件
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // 注册默认任务/别名任务 grunt
  grunt.registerTask('default', ['multi']);

  //注册基础任务 grunt foo:testing:123
  grunt.registerTask('basic', 'A sample task that logs stuff.', function(arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
    }
  });



  //注册多任务  grunt log, 多任务才有target,data
  grunt.registerMultiTask('multi', 'log stuff.', function() {
    //console.log(this===grunt.task.current); output true
    grunt.log.writeln(this.target + ': ' + this.data);
  });

  //异步任务 grunt log
  grunt.registerMultiTask('multi', 'log stuff.', function() {
    var done = this.async(),//递归回调runTask方法 grunt/lib/util/task.js line:220
        me = this;

    grunt.log.writeln('waiting.....');

    setTimeout(function(){

      grunt.log.writeln('start');

      grunt.log.writeln(me.target + ': ' + me.data);
      done();

    },1000)
   
  });



};