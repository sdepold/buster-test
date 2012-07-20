var config = module.exports

config["node tests"] = {
  rootPath: '../',
  tests: [
    "spec/node/*.spec.js"
  ],
  environment: "node"
}

config["browser tests"] = {
  rootPath: '../',
  tests: [
    "spec/browser/*.spec.js"
  ],
  environment: 'browser',
  sources: [
    "lib.js"
  ]
}
