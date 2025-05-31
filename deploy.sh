# Get latest
git fetch
git pull

# Build the app
npm run build

# Checkout gh-pages
git checkout gh-pages

# Remove non-build files
rm -rf ./node_modules
rm -rf ./public
rm -rf ./.gitignore
rm -rf ./deploy.sh
rm -rf ./eslint.config.js
rm -rf ./index.html
rm -rf ./package.json
rm -rf ./README.md
rm -rf ./vite.config.js

# Dist to root folder
mv dist/* .

# Deploy gh-pages
gh-pages -d .

# Reset to original
git reset --hard

# Move back to main
git checkout main

echo "Build complete..."
