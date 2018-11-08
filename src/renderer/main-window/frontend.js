import { setIpc, openDirectory, saveFile, openPreferences, uploadImage, pasteImage } from './ipcRendererEvents'
import { addImagesEvents, searchImagesEvent, selectEvent, print } from './images-ui'
import createMenu from './menu'

window.addEventListener('load', () => {
  createMenu()
  setIpc()
  addImagesEvents()
  searchImagesEvent()
  selectEvent()
  buttonEvent('open-directory', openDirectory)
  buttonEvent('open-preferences', openPreferences)
  buttonEvent('save-button', saveFile)
  buttonEvent('print-button', print)
  buttonEvent('upload-button', uploadImage)
  buttonEvent('paste-button', pasteImage)
})

function buttonEvent (id, func) {
  const openDirectory = document.getElementById(id)
  openDirectory.addEventListener('click', func)
}