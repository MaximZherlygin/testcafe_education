## Testcafe. Steam

### Installation
Make sure you have working `node` and `npm`.

First, run
```shell
npm install
```
from root directory of project to install the required libraries.

### Run

If it needs, run
```shell
npm run eslint
```
to run eslint.

To perform testing, run:
```shell
npm run test
```

### Configuration

You can specify configuration of test performing (for example, browser, language, timeouts, url) in `test/config/.testcaferc.json` file.

### Dataset

You can change/remove/add test data in `test/test_data/test_data.json`, where `gameName` - name of game to search, `count` - number of results to check if them is sorted by descending.