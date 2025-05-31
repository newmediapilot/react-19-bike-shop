# Publishes preview branch to Github Pages
# deploy()
#   - prepare()
#     - Switch to main
#     - Reset modules
#   - patch()
#     - Update package.json version
#   - build()
#     - Build production bundle
# reset()
#   - Return to branch main

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
  git commit -m '[deploy-preview.sh] automated => version patch --no-git-tag-version'
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
  git push --set-upstream origin preview
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

deploy
build
tag
deploy
reset

echo ""
echo "Build complete..."
echo "https://newmediapilot.github.io/react-19-bike-shop/dist"
