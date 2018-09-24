import which from 'which';
import * as child_process from "child_process";
import packageList from "../boilerplates/package/package.template.json"

const runCmd = (cmd, args, fn) => {
  args = args || [];
  const runner = child_process.spawn(cmd, args, {
    stdio: "inherit"
  });
  runner.on('close', (code) => {
    if (fn) {
      fn(code);
    }
  });
}

const findYarnOrNpm = () => {
  const npms = ['yarn', 'npm'];
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      return npms[i];
    } catch (e) {
    }
  }
  throw new Error('please install npm or yarn');
}

export const installPackage = () => {
  const npm = findYarnOrNpm();
  const packageArray = Object.keys(packageList)
  packageArray.unshift("add")
  runCmd(which.sync(npm), packageArray, () => {
    console.log(npm + ' install end');
  });
}
