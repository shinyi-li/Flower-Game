const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 480,
    resizable: false,
    webPreferences: {
      nodeIntegration: true, // Allows require() in the renderer
      contextIsolation: false, // Required for direct IPC (security tradeoff)
    },
  });

  // Load the startpage.html file
  win.loadFile('startpage.html');
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  //updateCountdown();
  //const timer = setInterval(updateCountdown, 1000);

  //document.getElementById('Close').addEventListener('click', closeHandler, false);
});

function closeHandler() {
  BrowserWindow.getCurrentWindow().close();
}
