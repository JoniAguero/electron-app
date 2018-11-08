import url from 'url';

window.addEventListener('load', () => {
    addImageEvents();
    searchImagesEvent();
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

function searchImagesEvent() {
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('keyup', function () {
        const regex = new RegExp(this.value.toLowerCase(), 'gi');
        if (this.value.length > 0) {
            const thumbs = document.querySelectorAll('li.list-group-item img')
            for (let i = 0; i < thumbs.length; i++) {
                const fileUrl = url.parse(thumbs[i].src)
                const fileName = path.basename(fileUrl.pathname)
                if (fileName.match(regex)) {
                    thumbs[i].parentNode.classList.remove('hidden')
                } else {
                    thumbs[i].parentNode.classList.add('hidden')
                }
            }
            selectFirstImage()
        }
    })
}

function selectFirstImage () {
    const image = document.querySelector('li.list-group-item:not(.hidden)')
    changeImage(image)
}