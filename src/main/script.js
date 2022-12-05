
let image = document.querySelector('.image');
let list = document.querySelector('.list')

image.onmouseenter = () => {
    list.style.display = 'block';
}

image.onmouseleave = () => {
    list.style.display = 'none';
}

