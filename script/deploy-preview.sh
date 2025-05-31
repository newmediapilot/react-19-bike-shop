# Publishes branch to Github Pages
# prepare() Switch to main and reset modules
# patch() Update package.json version
# build() Build production bundle
# deploy() Create preview and add dist
# reset() Return to main

prepare() {
  echo "Switch to main and reset modules :: start"
  git checkout main
  git fetch --all
  git pull
  rm -rf node_modules
  npm i
  echo "Switch to main and reset modules :: done"
}

patch() {
  echo "Update package.json version :: start"
  npm version patch --no-git-tag-version
  git add .
  git commit -m '[deploy-preview.sh] automated patch to origin/main'
  git push
  echo "Update package.json version :: done"
}

build() {
  echo "Build production bundle :: start"
  npm run build
  echo "Build production bundle :: done"
}

deploy() {
  echo "Create preview and add dist :: start"
  git push origin --delete preview
  git checkout -b preview
  git push --set-upstream origin preview
  git add -f dist
  git commit -m '[deploy-preview.sh] automated commit build to origin/preview'
  git push
  preview -d dist
  echo "Create preview and add dist :: done"
}

reset() {
  echo "Return to main :: start"
  git checkout main
  echo "Return to main :: done"
}

deploy
build
tag
deploy
reset

echo ""
echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop/dist"
