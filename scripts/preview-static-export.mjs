#!/usr/bin/env node

import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const [directory = 'out'] = process.argv.slice(2);
const root = resolve(process.cwd(), directory);
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '127.0.0.1';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

function isInsideRoot(filePath) {
  return filePath === root || filePath.startsWith(`${root}${sep}`);
}

function resolveStaticPath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const cleanPath = normalize(decodedPath).replace(/^(\.\.(\/|\\|$))+/, '');
  const directPath = resolve(root, `.${cleanPath}`);

  if (!isInsideRoot(directPath)) {
    return null;
  }

  if (existsSync(directPath)) {
    const stats = statSync(directPath);
    if (stats.isDirectory()) {
      const indexPath = join(directPath, 'index.html');
      return existsSync(indexPath) ? indexPath : null;
    }
    return directPath;
  }

  if (!extname(directPath)) {
    const htmlPath = `${directPath}.html`;
    return existsSync(htmlPath) ? htmlPath : null;
  }

  return null;
}

if (!existsSync(root)) {
  console.error(`Static export directory not found: ${root}`);
  console.error('Run npm run build before npm run start.');
  process.exit(1);
}

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const filePath = resolveStaticPath(url.pathname);

  if (!filePath) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const type = contentTypes[extname(filePath)] || 'application/octet-stream';
  response.writeHead(200, { 'content-type': type });
  createReadStream(filePath).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Previewing ${root} at http://${host}:${port}`);
});
