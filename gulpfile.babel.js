import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';

const paths = {
  gulpFile: './gulpfile.babel.js',
  app: './src/js/app/**/*.js',
  build: './js/lib/'
};

gulp.task('clean', () => del(paths.build));

