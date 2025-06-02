const { exec } = require('child_process');
const open = require('open');

const BUILD_COMMAND = 'npm run build';
const SERVE_COMMAND = 'npx serve -s build -l 5000';
const LOCAL_URL = 'http://localhost:5000';

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const proc = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      } else {
        resolve({ stdout, stderr });
      }
    });
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
  });
}

async function main() {
  console.log('Starting build process...');
  try {
    await runCommand(BUILD_COMMAND);
    console.log('Build completed successfully.');
  } catch (buildError) {
    console.error('Build failed with error:');
    console.error(buildError.stderr || buildError.error.message);
    process.exit(1);
  }

  console.log('Starting static server to serve the build directory...');
  const serveProcess = exec(SERVE_COMMAND);

  serveProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
    if (data.includes('Accepting connections at')) {
      console.log(`Opening browser at ${LOCAL_URL} ...`);
      open(LOCAL_URL).catch(() => {
        console.log(`Please open your browser and navigate to ${LOCAL_URL} to verify the app.`);
      });
    }
  });

  serveProcess.stderr.on('data', (data) => {
    process.stderr.write(data);
  });

  serveProcess.on('error', (err) => {
    console.error('Failed to start static server:');
    console.error(err.message);
    process.exit(1);
  });

  serveProcess.on('exit', (code) => {
    console.log(`Static server exited with code ${code}`);
  });

  // Keep the script running while the server is active
}

main();