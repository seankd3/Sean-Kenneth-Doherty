# SeanKennethDoherty

This is a personal photography website created as a custom alternative to Squarespace. The project was formerly known as "seandohertyphotos" and has been renamed to "SeanKennethDoherty" to better reflect the personal brand.

## Project Description

This website showcases photography work organized into albums with high-quality images. It is built as a React application and deployed as a static site on GitHub Pages. The project includes image assets organized in the `public/assets/images` directory, which are referenced by the application via an image manifest.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SeanKennethDoherty.git
   cd SeanKennethDoherty
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   This will run the app locally at `http://localhost:3000`.

## Dependency & Security Maintenance

To keep the project secure and up to date, follow these steps regularly:

### 1. Update Dependencies
- To update all dependencies to their latest safe versions:
  ```bash
  npm update
  ```
- For major version upgrades, review release notes and update `package.json` manually, then run:
  ```bash
  npm install
  ```

### 2. Remove Unused Dependencies
- To identify unused dependencies, use:
  ```bash
  npx depcheck
  ```
- Remove any listed unused dependencies from `package.json`, then run:
  ```bash
  npm prune
  ```

### 3. Maintain Lockfile
- Always commit the updated `package-lock.json` after running `npm install` or `npm update` to ensure reproducible builds.

### 4. Security Audit
- To check for vulnerabilities:
  ```bash
  npm audit
  ```
- To automatically fix issues that do not require breaking changes:
  ```bash
  npm audit fix
  ```
- For remaining issues, review the output and consider running:
  ```bash
  npm audit fix --force
  ```
  **Note:** This may introduce breaking changes. Test the application thoroughly after using `--force`.

Document all dependency and security maintenance actions in your pull requests or commit messages for traceability.
## Usage

- Browse photography albums and view images in a gallery format.
- Use the navigation to switch between albums.
- The site supports lightbox viewing for images.

## Deployment to GitHub Pages

1. Build the production version of the site:
   ```bash
   npm run build
   ```

2. Deploy the `build` directory to the `gh-pages` branch of your GitHub repository. You can use the `gh-pages` npm package or GitHub Actions for automated deployment.

3. Ensure your repository settings have GitHub Pages enabled, serving from the `gh-pages` branch or the `docs` folder as configured.

## Testing & Test Automation

### Testing Strategy

- **Unit Tests:** All major React components and custom hooks are covered by unit tests to ensure correct behavior and increase code reliability.
- **Integration Tests:** Key user flows and gallery interactions are tested to verify the application works as expected from the user's perspective.

### Running Tests Locally

To run all tests, use:

```bash
npm test
```

This will execute all unit and integration tests using Jest and React Testing Library.

### Continuous Integration (CI)

All tests are automatically run in the CI pipeline using GitHub Actions on every push and pull request to the `main` or `master` branch. The workflow is defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml:1).

### Test Locations

- Component tests: `src/components/*.test.js`
- Hook tests: `src/hooks/*.test.js`
- Integration tests: `src/App.test.js`

### Adding or Expanding Tests

To add a new test, create a `*.test.js` file next to the component or hook, or expand an existing test file. See the provided test files for examples.

## Important Notes on Images and Git

- The image assets used by the website are located in the `public/assets/images` directory.
- The following image folders are essential and **must be committed to git** to ensure the website functions correctly on GitHub Pages:
  - `public/assets/images/Big Bend Auroa`
  - `public/assets/images/CineStill`
  - `public/assets/images/Ultra`
- The `src/assets/images` directory is ignored by git (as per `.gitignore`) and is not used for the deployed site.
- Make sure to commit the `public/assets/images` folder and its contents to your repository.

## Additional Information

- The image manifest file `src/assets/imageManifest.json` lists all images used by the site and their organization.
- For any image updates, add the images to the appropriate folder under `public/assets/images` and update the manifest accordingly.

---
## Contribution Guidelines

We welcome contributions! To contribute:

- Fork the repository and create a feature branch.
- Follow the code style enforced by ESLint and Prettier.
- Write or update tests for new features or bug fixes.
- Ensure all tests pass locally (`npm test`) before submitting a pull request.
- Use clear, descriptive commit messages and reference related issues when applicable.
- Open a pull request against the `main` branch and describe your changes.

## Maintenance Procedures

- Regularly update dependencies as described in the "Dependency & Security Maintenance" section.
- Review and address security vulnerabilities promptly.
- Keep the image manifest and assets up to date when adding or removing images.
- Document all significant changes in the [CHANGELOG.md](CHANGELOG.md).
- Ensure CI tests pass before merging changes.
- For major updates, increment the version and update the changelog.

## Component & Hook API

See [docs/API.md](docs/API.md) for detailed documentation of all major components and custom hooks, including their props, return values, and usage examples.


This README provides all necessary information to set up, use, and deploy the SeanKennethDoherty photography website, along with clear guidance on managing image assets for GitHub Pages deployment.