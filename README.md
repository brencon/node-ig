[![Build Status](https://travis-ci.org/brencon/node-ig.svg?branch=master)](https://travis-ci.org/brencon/node-ig) [![Coverage Status](https://coveralls.io/repos/github/brencon/node-ig/badge.svg?branch=master)](https://coveralls.io/github/brencon/node-ig?branch=master)

[![NPM](https://nodei.co/npm/node-ig.png)](https://nodei.co/npm/node-ig/)

# node-ig
An npm module for working with the Instagram API.

## Overview
TBD

## Installation

### npm
`npm install node-ig -S`

## Tests
`npm test`

## Code Quality
Code quality will be checked using eslint with the `--fix` argument so repair easily-fixed rule-breaking code.

`npm run lint`

## Code Coverage
Code coverage is maintained by using the nyc command-line-client for [Istanbul](https://istanbul.js.org/) with [Coveralls](https://coveralls.io) reporting.

## Continuous Integration
Continuous integration provided by [Travis CI](https://travis-ci.org).

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Community
Updates and discussions about this module can be found [@symBrendan on Twitter](https://twitter.com/symBrendan).

## Versioning
For transparency into a common release cycle to strive toward maintaining backward compatibility, word-forward is maintained under [the Semantic Versioning guidelines](http://semver.org/).

### Creating a New Version
The following commands will create a new version of the module, automatically create a new tag with the same value as the version, push the tags to the remote, and, finally, push the code to the remote.

#### Stage your files
`git add .`

#### Commit with message
`git commit -m "your commit message"`

#### Publish the module to npmjs.org
The `npm publish` command will create a patch in package.json, add a new tag, push the tag, and publish the changes to npmjs.

`npm publish`

## Creator

**Brendan Conrad**

- <https://twitter.com/symBrendan>

## License
This project is licensed under the terms of the MIT license.
