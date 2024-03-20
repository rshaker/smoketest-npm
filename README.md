# smoketest-npm

<img width="250px" src="assets/campfire.png">

A minimal template project demonstrating how to bundle Typescript code for distribution as a nodejs package, and as a umd-compatible download through [unpkg.com](https://unpkg.com/@rshaker/smoketest-npm).

## Usage

```sh
% git clone https://github.com/rshaker/smoketest-npm
% cd smoketest-npm
```

```sh
% nvm use

Found '/Users/rshaker/smoketest-npm/.nvmrc' with version <v18.12.1>
Now using node v18.12.1 (npm v9.2.0)
```

```sh
% npm install
% npm build
```

```sh
% node test/testNode.js

Node.js test passed successfully.
```

```sh
% open test/testBrowser.html

Browser test passed successfully.
```
