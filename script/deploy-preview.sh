# Publishes preview branch to Github Pages
# initialize()
# - Delete/Create new preview branch
# prepare()
# - Switch to main and reset modules
# patch()
# - Update package.json version
# build()
# - Build production bundle
# reset()
# - Return to main

initialize() {
  echo "Delete/Create new preview branch :: start"
  git push origin --delete preview
  git checkout -b preview
  git push --set-upstream origin preview
  echo "Delete/Create new preview branch :: end"
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
  npm version patch
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
  git checkout -b preview
  git add -f dist
  git commit -m '[deploy-preview.sh] automated => populate deploy branch'
  git push
  preview -d dist
  echo "Create preview and add dist :: done"
}

reset() {
  echo "Return to main :: start"
  git checkout main
  echo "Return to main :: done"
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
