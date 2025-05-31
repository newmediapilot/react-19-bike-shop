# Build the app
git checkout main
git fetch
git pull
npm run build

# Deploy gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
git push --set-upstream origin gh-pages
git add -f dist/**/*
git commit -m '[deploy-gh-pages.sh] automated commit build to origin/gh-pages'
git push
gh-pages -d dist

# Move back to main
git checkout main

echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop/dist"