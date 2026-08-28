/**
 * 把 src 下的 wxml/wxss/json 复制到 miniprogram_dist
 * 小程序构建工具只认 miniprogram_dist 目录
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
const DEST = path.join(__dirname, '..', 'miniprogram_dist');
const EXTS = ['.wxml', '.wxss', '.json', '.wxs'];

function walk(dir, cb) {
  fs.readdirSync(dir).forEach((name) => {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p, cb);
    } else {
      cb(p);
    }
  });
}

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

walk(SRC, (file) => {
  if (EXTS.includes(path.extname(file))) {
    const rel = path.relative(SRC, file);
    const target = path.join(DEST, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
    console.log('copied:', rel);
  }
});

console.log('copy-wxml done ->', DEST);