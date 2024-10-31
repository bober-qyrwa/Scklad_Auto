function open_sidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function close_sidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


function turn_overlay() {
    const overlay = document.getElementById('overlay');
    const right_overlay_btn = document.getElementById('right_overlay_btn');
    const left_overlay_btn = document.getElementById('left_overlay_btn');
    const h2 = document.getElementById('overlay_h2');
    const paragraph = document.getElementById('overlay_p1');
    const overlay_p_a = document.getElementById('overlay_p_a');
    const paragraph2 = document.getElementById('overlay_p2');
    h2.textContent = 'Выберите название и введите количество наименований';
    paragraph.style.marginRight = 5 + 'px';
    paragraph2.style.marginLeft = 5 + 'px';
    paragraph.textContent = 'Не получается?';
    overlay_p_a.textContent = 'Поддержка';
    paragraph2.textContent = 'или';
    overlay.style.right = 50 + '%';
    overlay.style.borderBottomLeftRadius = 15 + 'px';
    overlay.style.borderBottomRightRadius = 0 + 'px';
    overlay.style.borderTopLeftRadius = 15 + 'px';
    overlay.style.borderTopRightRadius = 0 + 'px';
    right_overlay_btn.style.display = 'none';
    left_overlay_btn.style.display = 'flex';
}

function turn_overlay_back() {
    const overlay = document.getElementById('overlay');
    const right_overlay_btn = document.getElementById('right_overlay_btn');
    const left_overlay_btn = document.getElementById('left_overlay_btn');
    const h2 = document.getElementById('overlay_h2');
    const paragraph = document.getElementById('overlay_p1');
    const overlay_p_a = document.getElementById('overlay_p_a');
    const paragraph2 = document.getElementById('overlay_p2');
    h2.textContent = 'Введите название и количество наименований';
    paragraph.style.marginRight = 0 + 'px';
    paragraph2.style.marginLeft = 0 + 'px';
    paragraph.textContent = 'Не получается? Используйте';
    overlay_p_a.textContent = '';
    paragraph2.textContent = '';
    overlay.style.right = 0;
    overlay.style.borderBottomLeftRadius = 0 + 'px';
    overlay.style.borderBottomRightRadius = 15 + 'px';
    overlay.style.borderTopLeftRadius = 0 + 'px';
    overlay.style.borderTopRightRadius = 15 + 'px';
    right_overlay_btn.style.display = 'flex';
    left_overlay_btn.style.display = 'none';
}

function handleResize() {
    console.log("aaa")
};

document.addEventListener('DOMContentLoaded', () => {
    handleResize();
})

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const { width, height } = entry.contentRect;
        handleResize();
    }
});

observer.observe(document.body);