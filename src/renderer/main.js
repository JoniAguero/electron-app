import os from 'os';

window.addEventListener('load', () => {
    addImageEvents()
})

function addImageEvents () {
    const thumbs = document.querySelectorAll('li.list-group-item');

    thumbs.forEach(function (element) {
        element.addEventListener('click', () => {
            changeImage(element)
        })
    })

}

function changeImage (node) {
    document.querySelector('li.selected').classList.remove('selected');
    node.classList.add('selected');
    document.getElementById('image-displayed').src = node.querySelector('img').src;
}