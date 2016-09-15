const {app, BrowserWindow} = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({width: 1000, height: 800})
  win.loadURL('https://soundcloud.com')
  win.on('closed', () => {
    win = nill
  } )
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
