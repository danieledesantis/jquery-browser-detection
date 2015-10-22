module.exports = function(grunt) {

		var file = grunt.file.read('jquery.browser.detection.js');
		var credits = file.match(/\/\*\![\s\S]*\*\//);
		var banner = credits[0] + '\n';
	
	  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
				
				copy: {
					main: {
						files: [
							{
								expand: true,
								src: 'jquery.browser.detection.js',
								dest: 'dist/'
							},
						],
					},
				},
				
				uglify: {
					build: {
							src: 'dist/jquery.browser.detection.js',
							dest: 'dist/jquery.browser.detection.min.js'
					},
					options: {
						banner: banner
					}
				}

    });

		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		
    grunt.registerTask('default', ['copy','uglify']);

};