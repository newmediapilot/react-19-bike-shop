# Publishes gh-pages branch to Github Pages
# initialize()
# - Delete/Create new gh-pages branch
# prepare()
# - Switch to main and reset modules
# patch()
# - Update package.json version
# build()
# - Build production bundle
# reset()
# - Return to main and delete dist

initialize() {
  echo "Delete/Create new gh-pages branch :: start"
  git push origin --delete gh-pages
  git checkout -b gh-pages
  git push --set-upstream origin gh-pages
  echo "Delete/Create new gh-pages branch :: end"
}

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
  V=$(npm version patch --no-git-tag-version)
  git commit -m "[automated] automated patch version => $V"
  git push
  echo "Update package.json version :: done"
}

build() {
  echo "Build production bundle :: start"
  npm run build
  echo "Build production bundle :: done"
}

deploy() {
  echo "Checkout gh-pages and add dist :: start"
  git checkout gh-pages
  git add -f dist
  git commit -m '[automated] => populate gh-pages'
  git push
  gh-pages -d dist
  echo "Checkout gh-pages and add dist :: done"
}

reset() {
  echo "Return to main and delete dist :: start"
  git checkout main
  rm -rf dist
  echo "Return to main and delete dist :: done"
}

#initialize
deploy
build
tag
deploy
reset

echo ""
echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop/dist"
