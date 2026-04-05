const fs = require('fs');
const path = require('path');
const Hexo = require('hexo');

async function buildSite() {
  const rootDir = __dirname;
  const publicDir = path.join(rootDir, 'public');
  const docsDir = path.join(rootDir, 'docs');
  const cnameSource = path.join(rootDir, 'CNAME');
  const cnameTarget = path.join(publicDir, 'CNAME');

  const hexo = new Hexo(rootDir, { silent: false });

  await hexo.init();
  await hexo.call('clean');
  await hexo.call('generate');

  if (fs.existsSync(cnameSource)) {
    fs.copyFileSync(cnameSource, cnameTarget);
  }

  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.renameSync(publicDir, docsDir);

  console.log('Static site generated in docs/.');
}

buildSite().catch((error) => {
  console.error(error);
  process.exit(1);
});
