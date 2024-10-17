// function checkProduct() {
//     const product = document.getElementById('pswd_sign_in').value;

//     if (product.length < 10) {
//         console.log('Пароль должен содержать не более 10 символов.');
//     } else {
//         //Тут будет отправка данных из формы
//         console.log('Вход выполнен успешно!');
//     }
// }

// function checkElement() {
//     const element = document.getElementById('nameInput');
//     if (element) {
//         console.log('Элемент найден:', element);
//     } else {
//         console.log('Элемент не найден');
//     }
// }

// checkElement();




function quantityUlAppearance() {
    const inputs = document.querySelector(".inputs");
    const quantityLi = document.querySelectorAll(".quantityLi");
    const quantityInput = document.querySelector(".quantityInput");
    const btn1 = document.querySelector(".quantityButton");
    const btn2 = document.querySelector(".quantityBtn");
    btn1.style.display = "none";
    btn2.style.display = "flex";
    quantityInput.focus();
    quantityInput.classList.add("ulOpenned");
    quantityLi.forEach((li, index) => {
        li.classList.add("quantityLi-isVisible");
        li.classList.remove("quantityLi-isHidden");
        const delay = index * 0.075;
        li.style.animationDelay = delay + 's';
    });
    if (quantityInput.classList.contains("ulOpenned")) {
      quantityInput.classList.remove("inputValid");
    }
    divScroll();
    setTimeout(autoScroll, 1675);
}

function quantityUlDisappearance() {
    const inputs = document.querySelector(".inputs");
    const quantityLi = document.querySelectorAll(".quantityLi");
    const quantityInput = document.querySelector(".quantityInput");
    const btn1 = document.querySelector(".quantityButton");
    const btn2 = document.querySelector(".quantityBtn");
    btn1.style.display = "flex";
    btn2.style.display = "none";
    quantityInput.classList.remove("ulOpenned")
    quantityLi.forEach(li => {
        li.classList.remove("quantityLi-isVisible");
        li.classList.add("quantityLi-isHidden");
    });
    quantityInput.classList.add("inputValid");
    quantityInput.classList.add("inputValid_leftSlide");
    var scrollableElement = document.querySelector(".allInputs");
    scrollableElement.style.height = "max-content";
}


//Инициализация
const input = document.querySelector(".nameInput");
const qContainer = document.querySelector(".quantityContainer");
const quantityInput = document.querySelector(".quantityInput");
const search_form = document.querySelector(".search_form");
const inputContainer = document.querySelector(".nameInputContainer");
const quantityContainer = document.querySelector('.quantityContainer');
const sendData = document.querySelector(".sendData");
const quantityArrow = document.querySelector(".quantityArrow");
const header = document.querySelector(".main-header");
const textSearch = document.querySelector('.textSearch');
const quantityLi = document.querySelectorAll(".quantityLi");
const fileInput = document.querySelector('.fileInput');
const quantityInputClue = document.querySelector(".clue");

function handleKeyPress1(event) {
    if (event.key === "ArrowRight" || event.key === "Enter") {
        event.preventDefault();
        const nextInput = document.querySelector(".quantityInput");
        const trimmedValue = input.value.trim();

        if (trimmedValue === "") {
            console.log("Поле ввода пусто!");
        } else {
            addNewInput();
            nameInput_left_slide_2rem();
            nameInputContainer_margin_2rem();
            checkNameInputValid();
            qContainer.style.display = "flex";
            quantityArrow.classList.add("hidden");
            if (nextInput) {
                nextInput.focus();
                const length = nextInput.value.length;
                nextInput.setSelectionRange(length, length);
            }
        }
    }
}

function handleKeyPress2(event) {
    if (quantityInput.classList.contains("inputValid")) {
    } else {
        if (event.key === "ArrowDown") {
            quantityUlAppearance();
        }
        if (event.key === "ArrowUp" || event.key === "ArrowRight" || event.key === "Enter") {
            if (quantityInput.value.trim() === '') {
                quantityInput_isEmpty();
            } else {
                quantityUlDisappearance();
                quantityPlusAppearance();
                quantityInput.blur();
            }
        }
    }
}

function addNewInput() {
    quantityContainer.classList.add("newInputContainer-isVisible");
    quantityContainer.classList.remove("hidden");
}

function nameInput_left_slide_2rem() {
    input.classList.add("nameInput_left_slide_2rem");
}

function nameInputContainer_margin_2rem() {
    inputContainer.classList.add("nameInputContainer_margin-right_2rem");
}

function show_quantityArrow() {
    const searchTitle = document.querySelector(".searchTitle");
    quantityArrow.classList.remove("hidden");
    if (quantityContainer.classList.contains("newInputContainer-isVisible")) {
        quantityArrow.classList.add("hidden");
    } else {
        quantityArrow.classList.remove("hidden");
    };
    searchTitle.textContent = "Строка поиска"
}

function checkNameInputValid() {
    //Логика проерки базы данных
    input.classList.add("inputValid");
}

input.addEventListener('focus', () => {
    input.classList.add('nameInputFocused');
    show_quantityArrow();
    input.classList.remove("inputInvalid");
    sendData.classList.remove("inputInvalid_sendData");
});

input.addEventListener('blur', () => {
    const quantityContainer = document.querySelector(".quantityContainer");
    // Здесь можно добавить логику, чтобы убрать класс при определенных условиях
    // Например, если поле не пустое, оставляем стиль
    if (input.value.trim() === '') {
        input.classList.remove('nameInputFocused');
        input.classList.add("inputInvalid");
        quantityArrow.classList.add("hidden");
        sendData.classList.add("inputInvalid_sendData");
        quantityContainer.style.display = "none";
    }
});

qContainer.addEventListener("keydown", handleKeyPress2);

// quantityInput.addEventListener("input", function() {
//     this.value = this.value.replace(/[^0-9]/g, '');
//     // Написать добавление класса, который добавляет инвалидный класс, если инпут пуст
//     if (this.value.trim() === '') {
//         quantityInput.classList.add("inputInvalid");
//     }
// });

const quantityBtn = document.querySelector(".quantityBtn");
quantityBtn.addEventListener("click", () => {
    quantityUlDisappearance();
    quantityPlusAppearance();
    quantityInput.blur();
});

const quantityItems = document.querySelectorAll('.quantityLi');

function quantityPlusAppearance() {
    const plus = document.querySelector(".quantityPlus");
    plus.classList.remove("hidden");
    quantityInput.blur();
}

quantityItems.forEach(item => {
    quantityItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const value = item.querySelector('div').textContent;
            quantityInput.value = value;
            quantityInput.classList.remove("inputInvalid");
        });

        item.addEventListener('click', () => {
            if (quantityInput.value.trim() === '') {
                quantityInput_isEmpty();
            } else {
                quantityUlDisappearance();
                quantityPlusAppearance();
                quantityInput.blur();
            }
        });
    });
});

const quantityLis = document.querySelectorAll('.quantityLi');
const quantityLi_1 = document.getElementById("quantityLi_1");
const quantityLi_2 = document.getElementById("quantityLi_2");
const quantityLi_30 = document.getElementById("quantityLi_30");
const quantityLi_50 = document.getElementById("quantityLi_50");

function checkInputValue() {
    const inputValue = quantityInput.value;

    quantityLis.forEach(li => {
        const liValue = li.textContent.trim();
        if (inputValue === liValue) {
            li.classList.add('hidden');
        } else {
            li.classList.remove('hidden');
        }

        if (quantityLi_1.classList.contains("hidden")) {
            quantityLi_2.classList.add("quantityLi_first")
        } else {
            quantityLi_2.classList.remove("quantityLi_first")
        }

        if (quantityLi_2.classList.contains("hidden")) {
            quantityLi_1.classList.add("quantityLi_first")
        } else {
            quantityLi_1.classList.remove("quantityLi_first")
        }

        if (quantityLi_30.classList.contains("hidden")) {
            quantityLi_50.classList.add("quantityLi_last")
        } else {
            quantityLi_50.classList.remove("quantityLi_last")
        }

        if (quantityLi_50.classList.contains("hidden")) {
            quantityLi_30.classList.add("quantityLi_last")
        } else {
            quantityLi_30.classList.remove("quantityLi_last")
        }});
}

checkInputValue();

quantityInput.addEventListener('input', () => {
    checkInputValue();
    quantityInput.value = quantityInput.value.replace(/[^0-9]/g, '');
    // Написать добавление класса, который добавляет инвалидный класс, если инпут пуст
    if (quantityInput.value.trim() === '') {
        quantityInput.classList.add("inputInvalid");
        quantityInput.classList.remove('inputValid');
    } else {
        quantityInput.classList.remove("inputInvalid");
    }
});

quantityInput.addEventListener('click', () => {
    quantityInput.classList.remove("inputInvalid");
})

quantityInput.addEventListener('blur', () => {
    if (quantityInput.value.trim() === '') {
        quantityInput.classList.add("inputInvalid");
    } else {
        quantityInput.classList.remove("inputInvalid");
        quantityInput.classList.add("inputValid");
    }
})

document.querySelector(".quantityArrow").addEventListener('click', function() {
    const inputField = document.querySelector('.nameInput');
    const trimmedValue = inputField.value.trim();

    if (trimmedValue === "") {
        console.log("Поле ввода пусто!!!");
    } else {
        const event_quantityArrow = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            bubbles: true
        });

        inputField.dispatchEvent(event_quantityArrow);
    }
});

VanillaTilt.init(document.querySelector(".sendData"), {
    max: 5,
    speed: 50,
    perspective: 1000,
    scale: 1,
    glare: true,
    "max-glare": 0.1
});

function autoScroll() {
    var scrollableElement = document.querySelector(".allInputs");
    scrollableElement.scrollTo({
        top: scrollableElement.scrollHeight,
        behavior: 'smooth'
    });
}


function divScroll() {
    var scrollableElement = document.querySelector(".allInputs");
    var startHeight = parseFloat(getComputedStyle(scrollableElement).height);
    var targetHeight = 21.5;
    var duration = 1000;
    var startTime = performance.now();

    function animate() {
        var currentTime = performance.now();
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);

        var newHeight = startHeight + (targetHeight - startHeight) * progress;
        scrollableElement.style.height = newHeight + "rem";

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function plusScroll() {
    var scrollableElement = document.querySelector(".allInputs");
    scrollableElement.scrollTo({
        top: scrollableElement.scrollHeight,
        behavior: 'smooth'
    });
}


function addNewInputs() {
    const allInputsContainer = document.querySelector('.allInputs');

    if (quantityInput.value.trim() === "") {
        quantityInput.value += "0";
    } else {}

    const newDiv = document.createElement('div');
    newDiv.className = 'LastInputs';

    const newNameInput_p = document.createElement('p');
    newNameInput_p.className = 'newNameInput_p';

    const qInput_p = document.createElement('p');
    qInput_p.className = 'qInput_p';


        const quantityValue = document.getElementById('quantityInput').value;
        const nameValue = document.getElementById('nameInput').value;

        qInput_p.textContent = quantityValue;
        newNameInput_p.textContent = nameValue;

        document.getElementById('quantityInput').value = '';
        document.getElementById('nameInput').value = '';


    const quantityPlus_p = document.createElement('button');
    quantityPlus_p.className = 'quantityPlus_p';
    quantityPlus_p.textContent = "✔";

    newDiv.appendChild(newNameInput_p);
    newDiv.appendChild(qInput_p);
    newDiv.appendChild(quantityPlus_p);
    allInputsContainer.appendChild(newDiv);

    const inputsContainer = document.querySelector('.inputs');
    allInputsContainer.appendChild(inputsContainer);

    input.blur();
    input.classList.remove("nameInputFocused");
    input.classList.remove("inputValid");
    input.classList.remove("nameInput_left_slide_2rem");
    inputContainer.classList.remove("nameInputContainer_margin-right_2rem");
    quantityContainer.classList.remove("newInputContainer-isVisible");
    quantityInput.classList.remove("inputValid_leftSlide");
    quantityContainer.style.display = "none";
    const plus = document.querySelector(".quantityPlus");
    plus.classList.add("hidden");
    input.blur();
    quantityInput.classList.remove("inputValid");

    removesendData_formValid();

    quantityArrow.classList.remove("clickMe");

    setTimeout(plusScroll, 300);
}

sendData.addEventListener('mouseenter', function(event) {
    if (input.classList.contains("inputValid") && quantityInput.classList.contains("inputValid")) {
        sendData.classList.add("sendData_formValid");
    } else {
        event.preventDefault();
        sendData.classList.remove("sendData_formValid");
    }
});

sendData.addEventListener('click', () => {
    if (!quantityArrow.classList.contains("hidden")) {
        quantityArrow.classList.add("clickMe");
    }


    if (input.classList.contains("inputValid") && quantityInput.classList.contains("inputValid")) {
        // Уведомление об отправке формы
        quantityInputClue.classList.add("clue_isVisible");
        quantityInputClue.classList.remove("clue_is_NOT_Visible");
        header.classList.add("header_onClue");

        const timeline = document.querySelector(".clue-timeline");
        const initialWidth = timeline.offsetWidth;
        const decreaseAmount = initialWidth / 4;
        let currentWidth = initialWidth;

        let intervalId = setInterval(() => {
            currentWidth -= decreaseAmount; // Уменьшаем ширину
            timeline.style.width = currentWidth + 'px'; // Применяем новую ширину

            // Если прошло 5 секунд, останавливаем интервал
            if (currentWidth <= 0) {
                clearInterval(intervalId);
            }
        }, 1000);

        setTimeout(() => {
            quantityInputClue.classList.add("clue_is_NOT_Visible");
            header.classList.remove("header_onClue");
            timeline.style.width = 100 + "vw";
        }, 5000);
    } else {
        quantityInputClue.classList.add("clue_is_NOT_Visible");
        header.classList.remove("header_onClue");
    }
})

function removesendData_formValid() {
    sendData.classList.remove('sendData_formValid');
}

input.addEventListener('input', () => {
    if (input.value.trim() === "") {
        input.blur();
        input.classList.remove("nameInputFocused");
        input.classList.remove("inputValid");
        input.classList.remove("nameInput_left_slide_2rem");
        inputContainer.classList.remove("nameInputContainer_margin-right_2rem");
        quantityContainer.classList.remove("newInputContainer-isVisible");
        quantityInput.classList.remove("inputValid_leftSlide");
        quantityContainer.style.display = "none";
        const plus = document.querySelector(".quantityPlus");
        plus.classList.add("hidden");
        input.blur();
        quantityInput.classList.remove("inputValid");

        removesendData_formValid();

        quantityArrow.classList.remove("clickMe");

        setTimeout(plusScroll, 300);


        input.classList.add('inputInvalid');
    }
})

// fileInput.addEventListener('mouseenter', () =>{
//     modalBG.classList.remove("hidden");
// })
