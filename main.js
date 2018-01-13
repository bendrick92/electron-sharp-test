const sharp = require('sharp');
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window = null;

app.once('ready', function () {
    createWindow();
});

app.on('activate', function () {
    if (window === null) {
        createWindow();
    }
})

function createWindow() {    
    window = new BrowserWindow({
        width: 800,
        height: 800
    });

    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    window.on('closed', function () {
        window = null;
    });

    window.webContents.openDevTools();
}