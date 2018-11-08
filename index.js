'use strict'

const { app, BrowserWindow } = require('electron');

app.on('before-quit', () => {
    console.log('saliendo');
});

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'My first Electro App',
        center: true,
        maximizable: false
    });
    win.on('move', () => {
        const position = win.getPosition();
        console.log(`Posicion: ${position}`);
        
    })
    win.on('closed', () => {
        win = null;
        app.quit();
    })
})