'use strict'

import { app, BrowserWindow } from 'electron';
import devtools from './devtools';

if (process.env.NODE_ENV === 'DEV') {
    devtools()
}

app.on('before-quit', () => {
    console.log('saliendo');
});

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'My first Electro App',
        center: true,
        maximizable: false,
        show: false
    });
    // win.on('move', () => {
    //     const position = win.getPosition();
    //     console.log(`Posicion: ${position}`);
        
    // })
    win.once('ready-to-show', () => {
        win.show();
    });

    win.loadURL(`file://${__dirname}/src/renderer/index.html`);

    win.on('closed', () => {
        win = null;
        app.quit();
    })
})