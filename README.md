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

This README provides all necessary information to set up, use, and deploy the SeanKennethDoherty photography website, along with clear guidance on managing image assets for GitHub Pages deployment.