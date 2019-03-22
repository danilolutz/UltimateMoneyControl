import {app, BrowserWindow, Menu} from 'electron';
import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';
import {enableLiveReload} from 'electron-compile';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) {
    enableLiveReload({strategy: 'react-hmr'});
}

const createWindow = async () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    if (isDevMode) {
        await installExtension(REACT_DEVELOPER_TOOLS);
        mainWindow.webContents.openDevTools();
    }
    const template = [
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
                    click: function() {
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
                    click: function() {
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
                    label: 'Documentation'
                },
                {
                    label: 'Tips and Tricks'
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
                    label: 'Report Issue'
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
                    label: 'View License'
                },
                {
                    label: 'Privacy Statement'
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

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
