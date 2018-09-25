import vfs from 'vinyl-fs';
import { join, basename } from 'path';
import through from 'through2';
import { installPackage } from './install';
import { info, error, success } from './log';

const init = () => {
  const dest = process.cwd();
  const cwd = join(__dirname, '../boilerplates', "app");

  vfs.src(['**/*', '!node_modules/**/*'], {cwd: cwd, cwdbase: true, dot: true})
    .pipe(template(dest, cwd))
    .pipe(vfs.dest(dest))
    .on('end', () => {
      info('install package');
      installPackage()
    })
}

const template = (dest, cwd) => {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }
    info('create -> ' + file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

export default init;