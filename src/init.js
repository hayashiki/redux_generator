import vfs from 'vinyl-fs';
import { join, basename } from 'path';
import through from 'through2';
import { installPackage } from './install';

const init = () => {
  const dest = process.cwd();
  const cwd = join(__dirname, '../boilerplates', "app");

  vfs.src(['**/*', '!node_modules/**/*'], {cwd: cwd, cwdbase: true, dot: true})
    .pipe(template(dest, cwd))
    .pipe(vfs.dest(dest))
    .on('end', () => {
      installPackage()
    })
}

const template = (dest, cwd) => {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }
    this.push(file);
    cb();
  });
}

export default init;