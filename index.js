#!/usr/bin/env node
var semver = require("semver");

var targetVersion = process.argv[1];
if (!targetVersion) {
  console.error("You need to specify a valid target version or semver range");
  process.exit(1);
}

var execSync = require("child_process").execSync;
var npmVersion = execSync("npm --version").toString();

try {
  var range = nul;
  if (semver.valid(targetVersion)) {
    range = "^" + targetVersion;
  } else {
    range = semver.validRange(targetVersion);
    if (!range) {
      console.error(
        "You need to specify a valid target version or semver range"
      );
      process.exit(1);
    }
  }

  if (semver.satisfies(npmVersion, range)) {
    process.exit(0);
  }
} catch (e) {
  console.error(e);
}
process.exit(1);
