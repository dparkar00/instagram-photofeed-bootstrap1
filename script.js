function changeColor(id) {
    let buttons = document.getElementsByClassName('nav-link')
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        button.style.color = (button.id == id) ? '#0000ff' : '#808080';
    }
}