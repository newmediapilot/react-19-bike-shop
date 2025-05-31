# Build the app
git checkout main
git fetch
git pull
npm run build

# Deploy gh-pages
git checkout gh-pages
git add -f dist/**/*
git commit -m '[deploy.sh] commit build to gh-pages'
git push
gh-pages -d dist

# Move back to main
git checkout main

echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop/dist"