const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 480,  // Disesuaikan agar pas dengan max-width 450px dari file HTML Anda
    height: 900, // Disesuaikan dengan tinggi tampilan aplikasi
    autoHideMenuBar: true, // Menyembunyikan menu bar standar Windows (File, Edit, View)
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Memuat file HTML Anda secara verbatim
  win.loadFile('APP APM EMAS Final (1).html') 
}

app.whenReady().then(() => {
  createWindow()
})