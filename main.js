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

/*
// trying timer part
// Set the initial time (5 minutes = 300 seconds)
let timeLeft = 180;

// Function to update the countdown display
function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Format to "MM:SS" (e.g., 04:59)
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  document.querySelector('.countdown').textContent = formattedTime;

  // Decrease time by 1 second
  timeLeft--;

  // Stop the timer when it reaches 0
  if (timeLeft < 0) {
    clearInterval(timer);
    document.querySelector('.countdown').textContent = '00:00';
  }
}
 */
