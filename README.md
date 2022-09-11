# Process Manager UI for Electron Apps

This package has been forked from https://github.com/getstation/electron-process-manager but it doesn't work on electron 11 +.
So I have fixed and upgraded some featuers.
This package provides a process manager UI for Electron applications.
This package works on any electron version.
The old package didn't work on electron 11 +.
So I have upgraded this package.

It opens a window displaying a table of every processes run by the Electron application with information (type, URL for `webContents`, memory..).

[![npm version](https://badge.fury.io/js/ksy-electron-process-manager.svg)](https://badge.fury.io/js/ksy-electron-process-manager)

![screenshot](https://github.com/getstation/ksy-electron-process-manager/raw/master/.github/screenshots/window.png)

It can be useful to debug performance of an app with several `webview`.

It's inspired from Chrome's task manager.

## Features

- [x] Memory reporting
- [x] Link memory data to web-contents (for electron >=1.7.1)
- [x] Kill a process from the UI
- [x] Open developer tools for a given process
- [x] CPU metrics
- [x] Sort by columns

## Installation

```bash
$ npm install @electron/remote
$ npm install ksy-electron-process-manager
```

## Usage
```js
require('@electron/remote/main').initialize();
const processManager = require('ksy-electron-process-manager');
const win = processManager.open({
                defaultSorting: {
                    path: 'cpu.percentCPUUsage',
                    how: 'descending'
                }
            });
require('@electron/remote/main').enable(win.webContents);
```

## Options
`openProcessManager` function can take options in paramters

#### options.defaultSorting
**defaultSorting.how**: `'ascending' | 'descending'`

**defaultSorting.path**:

| Field name         | path                       |
|--------------------|----------------------------|
| Pid                | 'pid'                      |
| WebContents Domain | 'webContents.0.URLDomain'  |
| Process Type       | 'webContents.0.type'       |
| Private Memory     | 'memory.privateBytes'      |
| Shared Memory      | 'memory.sharedBytes'       |
| Working Set Size   | 'memory.workingSetSize'    |
| % CPU              | 'cpu.percentCPUUsage'      |
| Idle Wake Ups /s   | 'cpu.idleWakeupsPerSecond' |
| WebContents Id     | 'webContents.0.id'         |
| WebContents Type   | 'webContents.0.type'       |
| WebContents URL    | 'webContents.0.URL'        |


## Future

- Add physical memory (noted as "Memory" in Chrome's task manager)
- Add networks metrics

Pull requests welcome :)

## License

MIT License
