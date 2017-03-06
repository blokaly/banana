module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      mkdocs: {
         options: {
            clean: true
         },
         build: {
            src: '.',
            dest: './site'
         }
      },
      "http-server": {

         dev: {

            // the server root directory
            root: "./site",

            port: 8000,

            host: "127.0.0.1",

            cache: 10,
            showDir : true,
            autoIndex: true,

            ext: "html",

            runInBackground: false,

            openBrowser : false

         }

      }

   });
   grunt.loadNpmTasks('grunt-mkdocs');
   grunt.loadNpmTasks('grunt-http-server');
   grunt.registerTask('default', ['mkdocs', 'http-server']);

};
