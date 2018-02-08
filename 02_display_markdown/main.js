const { app, BrowserWindow } = require('electron')

let win 
const appURL = `file://${__dirname}/index.html`

function createElectronShell() {
    win = new BrowserWindow({ width: 1200, height: 600 })
    win.loadURL(appURL)
    win.on('close', () => {
        win = null
    })

    win.webContents.openDevTools()
}

app.on('ready', createElectronShell)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createElectronShell()
    }
})