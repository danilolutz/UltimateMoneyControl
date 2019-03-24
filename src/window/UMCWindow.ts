import { BrowserWindow, shell } from 'electron';

export class UMCWindow {
    static createMenu(mainWindow: BrowserWindow): Electron.MenuItemConstructorOptions[] {
        const template: Electron.MenuItemConstructorOptions[] = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Transactions',
                        accelerator: 'CmdOrCtrl+Shift+t'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Bank Account',
                        accelerator: 'CmdOrCtrl+Shift+b'
                    },
                    {
                        label: 'Categories',
                        accelerator: 'CmdOrCtrl+Shift+c'
                    },
                    {
                        label: 'Payees',
                        accelerator: 'CmdOrCtrl+Shift+p'
                    },
                    {
                        label: 'Currency',
                        accelerator: 'CmdOrCtrl+Shift+u'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Import *.CSV File'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Exit',
                        role: 'close'
                    },
                ],
            },
            {
                label: 'Edit',
                submenu: [],
            },
            {
                label: 'Reports',
                submenu: [
                    {
                        label: 'Cash Flow'
                    },
                    {
                        label: 'Incomes vs Expenses'
                    },
                    {
                        label: 'Where money goes'
                    },
                    {
                        label: 'Where money comes'
                    },
                ],
            },
            {
                label: 'View',
                submenu: [
                    {
                        label: 'Toggle Activity Bar',
                        type: 'checkbox',
                        checked: true,
                        click: function () {
                            if (mainWindow) {
                                mainWindow.webContents.send('toggle-activitybar');
                            }
                        },
                    },
                    {
                        label: 'Toggle Side Bar',
                        type: 'checkbox',
                        checked: true,
                        accelerator: 'CmdOrCtrl+b',
                        click: function () {
                            if (mainWindow) {
                                mainWindow.webContents.send('toggle-sidebar');
                            }
                        },
                    },
                ],
            },
            {
                label: 'Help',
                submenu: [
                    {
                        label: 'Welcome',
                        accelerator: 'CmdOrCtrl+Shift+w'
                    },
                    {
                        label: 'Documentation',
                        click() {
                            shell.openExternal('https://github.com/danilolutz/UltimateMoneyControl');
                        }
                    },
                    {
                        label: 'Tips and Tricks',
                        click() {
                            shell.openExternal('https://github.com/danilolutz/UltimateMoneyControl');
                        }
                    },
                    {
                        label: 'Keyboard Shortcuts Reference'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Join Us on Twitter'
                    },
                    {
                        label: 'Report Issue',
                        click() {
                            shell.openExternal('https://github.com/danilolutz/UltimateMoneyControl/issues');
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Check for Updates...'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'View License',
                        click() {
                            shell.openExternal('https://github.com/danilolutz/UltimateMoneyControl/blob/master/LICENSE');
                        }
                    },
                    {
                        label: 'Privacy Statement',
                        click() {
                            shell.openExternal('https://github.com/danilolutz/UltimateMoneyControl/blob/master/LICENSE');
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        role: 'toggleDevTools'
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'About'
                    }
                ],
            },
        ];
        return template;
    }
}
