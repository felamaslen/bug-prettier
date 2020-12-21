# prettier bug reproduction

The bug is that the output from `prettier.format()` differs from that of `node_modules/.bin/prettier`.

To reproduce, run:

0. `yarn install`
1. `node break-prettier.js > with_api`
2. `./node_modules/.bin/prettier testfile.js > with_cli`
3. `diff with_api with_cli`

Observe that the diff contains an extra new line at the end of the file.

**Expected behaviour**: the diff is empty.
