# How does it work

It takes `help-full.json` and `help-console.json` as input. The output is generated in src/\*\*.ts files.

## Obtaining the helps

Both helps can be obtained by GET request to the LCU API:

- `help-console.json` - https://127.0.0.1:65308/Help?format=Console
- `help-full.json` - https://127.0.0.1:65308/Help?format=Full

> Note that the port along with authorization token can be found in the lockfile (or loli client).

TODO make this automatic
