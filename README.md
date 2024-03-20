# smoketest-npm

<img width="250px" src="assets/campfire.png">

A minimal template project demonstrating how to bundle Typescript code for distribution as a nodejs package, and as a umd-compatible download through [unpkg.com](https://unpkg.com/@rshaker/smoketest-npm).

## Usage

```
git clone https://github.com/rshaker/smoketest-npm
```

```
cd smoketest-npm
npm install
```

```
node test/testNode.js
```
Node.js test passed successfully.

```
npm publish
```

```
open test/testBrowser.html
```
Browser test passed successfully.