# Get latest
git checkout main
git fetch
git pull

# Build the app
npm run build

# Checkout gh-pages
git checkout gh-pages

# Dist to root folder
mv dist/* .

# Deploy gh-pages
git add .
git commit -m '[deploy.sh] commit build to gh-pages'
git push

# Move back to main
git checkout main

echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop"
echo "https://newmediapilot.github.io/react-19-bike-shop"
echo "https://newmediapilot.github.io/react-19-bike-shop"
