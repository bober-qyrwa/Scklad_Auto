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
const Clue = document.querySelector(".clue");
const quantityButton = document.querySelector(".quantityButton");
const quantityBtn = document.querySelector(".quantityBtn");
const modal = document.querySelector(".modal");
const file_button = document.querySelector(".file_button");
const file_label = document.querySelector(".custom-file-upload");
const modal_cancel = document.querySelector(".modal_cancel");
const modal_file = document.querySelector(".modal_file");
const closeClue = document.querySelector(".closeClue");
const ClueTxt_from_sendData = document.querySelector(".from_sendData");
var ClueTxt_from_quantityZero_p = document.querySelector(".quantityZero");
let ClueTxt_from_quantityZero;
const dictionary = {};
const detailSearch = document.querySelector('.detailSearch');
const modal_f = document.querySelector('.modal_f');
const output = document.getElementById('output');
const plus = document.querySelector(".quantityPlus");


function handleKeyPress1(event) {
    if (event.key === "ArrowRight" || event.key === "Enter") {
        event.preventDefault();
        const nextInput = document.querySelector(".quantityInput");
        const trimmedValue = input.value.trim();

        if (trimmedValue === "") {
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
    fileInput.classList.add("hidden");
    // fileInput.style.display = 'none';
    file_label.classList.add("hidden");
    file_button.classList.remove("hidden");
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
                // quantityInput_isEmpty();
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

    if (quantityInput.value.trim() === '') {
        quantityInput.classList.add("inputInvalid");
        quantityInput.classList.remove('inputValid');
    } else {
        quantityInput.classList.remove("inputInvalid");
    }
    if (quantityInput.value.trim() === '0') {
        ClueTxt_from_quantityZero_p.textContent += ' ' + '"' + input.value + '"';
        ClueTxt_from_quantityZero = ClueTxt_from_quantityZero_p;
        quantityInput.classList.add("inputInvalid");
        quantityInput.classList.remove('inputValid');
    }
});

function removeLeadingZero(num) {
    // Проверяем, является ли число нулем
    if (num === 0) {
        return parseInt(num); // Возвращаем 0 без изменений
    }

    // Преобразуем число в строку
    let strNum = num.toString();

    // Проверяем, равна ли первая цифра '0'
    if (strNum.charAt(0) === '0') {
        // Удаляем первый символ и возвращаем результат
        return parseInt(strNum.slice(1), 10);
    }

    // Если первой цифры '0' нет, возвращаем число как есть
    return parseInt(num);
}

quantityInput.addEventListener('click', () => {
    quantityInput.classList.remove("inputInvalid");
})

quantityInput.addEventListener('blur', () => {
    if (quantityInput.value.trim() === ''|| quantityInput.value.trim() === '0') {
        quantityInput.classList.add("inputInvalid");
        quantityInput.classList.remove("inputValid");
    } else {
        quantityInput.classList.remove("inputInvalid");
        quantityInput.classList.add("inputValid");
    }
    if (Clue.classList.contains("clue_isVisible")) {
        setTimeout(() => {
            if (quantityInput.value.trim() === '0') {
                quantityInput.classList.add("inputInvalid");
                quantityInput.classList.remove("inputValid");
                Clue.classList.add("clue_isVisible");
                Clue.classList.remove("clue_is_NOT_Visible");
                header.classList.add("header_onClue");
                ClueTxt_from_quantityZero.classList.remove("hidden");
        
                const timeline = document.querySelector(".clue-timeline");
                const initialWidth = 100;
                const decreaseAmount = initialWidth / 4;
                let currentWidth = initialWidth;
                
                timeline.style.width = initialWidth + 'vw';
        
                let intervalId = setInterval(() => {
                    currentWidth -= decreaseAmount;
                    timeline.style.width = currentWidth + 'vw';
        
                    if (currentWidth <= 0) {
                        clearInterval(intervalId);
                    }
                }, 1000);
        
                if (Clue.classList.contains("clue_isVisible")) {
                    sendData.classList.add('sendData_formValid');
                }
        
                const timeoutId = setTimeout(() => {
                    Clue.classList.add("clue_is_NOT_Visible");
                    header.classList.remove("header_onClue");
                    ClueTxt_from_quantityZero.classList.add("hidden");
                    timeline.style.width = 100 + "vw";
                    clearInterval(intervalId);
                }, 5000);
        
                closeClue.addEventListener("click", () => {
                    Clue.classList.add("clue_is_NOT_Visible");
                    header.classList.remove("header_onClue");
                    clearInterval(intervalId);
                    clearTimeout(timeoutId);
                    timeline.style.width = 100 + "vw";
                    ClueTxt_from_quantityZero.classList.add("hidden");
                });
            } else {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
            }
        }, 1000);
    } else {
        if (quantityInput.value.trim() === '0') {
            Clue.classList.add("clue_isVisible");
            Clue.classList.remove("clue_is_NOT_Visible");
            header.classList.add("header_onClue");
            ClueTxt_from_quantityZero.classList.remove("hidden");
    
            const timeline = document.querySelector(".clue-timeline");
            const initialWidth = 100;
            const decreaseAmount = initialWidth / 4;
            let currentWidth = initialWidth;
            
            timeline.style.width = initialWidth + 'vw';
    
            let intervalId = setInterval(() => {
                currentWidth -= decreaseAmount;
                timeline.style.width = currentWidth + 'vw';
    
                if (currentWidth <= 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
    
            if (Clue.classList.contains("clue_isVisible")) {
                sendData.classList.add('sendData_formValid');
            }
    
            const timeoutId = setTimeout(() => {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
                ClueTxt_from_quantityZero.classList.add("hidden");
                timeline.style.width = 100 + "vw";
                clearInterval(intervalId);
            }, 5000);
    
            closeClue.addEventListener("click", () => {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
                clearInterval(intervalId);
                clearTimeout(timeoutId);
                timeline.style.width = 100 + "vw";
                ClueTxt_from_quantityZero.classList.add("hidden");
            });
        } else {
            Clue.classList.add("clue_is_NOT_Visible");
            header.classList.remove("header_onClue");
        }
    }
})

document.querySelector(".quantityArrow").addEventListener('click', function() {
    const inputField = document.querySelector('.nameInput');
    const trimmedValue = inputField.value.trim();

    if (trimmedValue === "") {
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
    const maxLength = 20;
    if (newNameInput_p.textContent.length > maxLength) {
        newNameInput_p.textContent = newNameInput_p.textContent.slice(0, maxLength) + '...';
    };

    document.getElementById('quantityInput').value = '';
    document.getElementById('nameInput').value = '';


    const quantityPlus_p = document.createElement('button');
    quantityPlus_p.className = 'quantityPlus_p';
    quantityPlus_p.textContent = "✔";

    newDiv.appendChild(newNameInput_p);
    newDiv.appendChild(qInput_p);
    newDiv.appendChild(quantityPlus_p);
    allInputsContainer.appendChild(newDiv);

    if (nameValue && quantityValue) {
        dictionary[nameValue.trim()] = removeLeadingZero(quantityValue.trim()); // Добавляем в словарь
    }

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
    plus.classList.add("hidden");
    input.blur();
    quantityInput.classList.remove("inputValid");
    quantityInput.value = '1';
    quantityArrow.classList.remove("clickMe");

    removesendData_formValid();

    setTimeout(plusScroll, 300);
    plus.classList.remove('plus_valid');
    plus.textContent = '+';
}

plus.addEventListener("mouseenter", () => {
    plus.classList.remove('plus_valid');
    plus.textContent = '+';
})






sendData.addEventListener('mouseenter', function(event) {
    if (input.classList.contains("inputValid") && quantityInput.classList.contains("inputValid")) {
        sendData.classList.add("sendData_formValid");
        plus.classList.add('plus_valid');
        plus.textContent = '✔';
    } else {
        event.preventDefault();
        sendData.classList.remove("sendData_formValid");
        plus.classList.remove('plus_valid');
        plus.textContent = '+';
    }
});





sendData.addEventListener('click', () => {
    if (!quantityArrow.classList.contains("hidden")) {
        quantityArrow.classList.add("clickMe");
    }

    if (Clue.classList.contains("clue_isVisible")) {
        setTimeout(() => {
            if (input.classList.contains("inputValid") && quantityInput.classList.contains("inputValid")) {
                Clue.classList.add("clue_isVisible");
                Clue.classList.remove("clue_is_NOT_Visible");
                header.classList.add("header_onClue");
                ClueTxt_from_sendData.classList.remove("hidden");
        
                const timeline = document.querySelector(".clue-timeline");
                const initialWidth = 100;
                const decreaseAmount = initialWidth / 4;
                let currentWidth = initialWidth;
                
                timeline.style.width = initialWidth + 'vw';
        
                let intervalId = setInterval(() => {
                    currentWidth -= decreaseAmount;
                    timeline.style.width = currentWidth + 'vw';
        
                    if (currentWidth <= 0) {
                        clearInterval(intervalId);
                    }
                }, 1000);
        
                if (Clue.classList.contains("clue_isVisible")) {
                    sendData.classList.add('sendData_formValid');
                }
        
                const timeoutId = setTimeout(() => {
                    Clue.classList.add("clue_is_NOT_Visible");
                    header.classList.remove("header_onClue");
                    ClueTxt_from_sendData.classList.add("hidden");
                    timeline.style.width = 100 + "vw";
                    clearInterval(intervalId);
                }, 5000);
        
                closeClue.addEventListener("click", () => {
                    Clue.classList.add("clue_is_NOT_Visible");
                    header.classList.remove("header_onClue");
                    clearInterval(intervalId);
                    clearTimeout(timeoutId);
                    timeline.style.width = 100 + "vw";
                    ClueTxt_from_sendData.classList.add("hidden");
                });


            } else {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
            }
        }, 10);
    } else {
        if (input.classList.contains("inputValid") && quantityInput.classList.contains("inputValid")) {
            Clue.classList.add("clue_isVisible");
            Clue.classList.remove("clue_is_NOT_Visible");
            header.classList.add("header_onClue");
            ClueTxt_from_sendData.classList.remove("hidden");
    
            const timeline = document.querySelector(".clue-timeline");
            const initialWidth = 100;
            const decreaseAmount = initialWidth / 4;
            let currentWidth = initialWidth;
            
            timeline.style.width = initialWidth + 'vw';
    
            let intervalId = setInterval(() => {
                currentWidth -= decreaseAmount;
                timeline.style.width = currentWidth + 'vw';
    
                if (currentWidth <= 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
    
            if (Clue.classList.contains("clue_isVisible")) {
                sendData.classList.add('sendData_formValid');
            }
    
            const timeoutId = setTimeout(() => {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
                ClueTxt_from_sendData.classList.add("hidden");
                timeline.style.width = 100 + "vw";
                clearInterval(intervalId);
            }, 5000);
    
            closeClue.addEventListener("click", () => {
                Clue.classList.add("clue_is_NOT_Visible");
                header.classList.remove("header_onClue");
                clearInterval(intervalId);
                clearTimeout(timeoutId);
                timeline.style.width = 100 + "vw";
                ClueTxt_from_sendData.classList.add("hidden");

            });
        } else {
            Clue.classList.add("clue_is_NOT_Visible");
            header.classList.remove("header_onClue");
        }
    }
});

function removesendData_formValid() {
    sendData.classList.remove('sendData_formValid');
}

input.addEventListener('input', () => {
    if (input.value.trim() === "" && !quantityArrow.classList.contains('hidden')) {
        input.classList.remove("inputValid");
    }

    if (input.value.trim() === "" && quantityArrow.classList.contains('hidden')) {
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


file_button.addEventListener("click", () => {
    modal.classList.add("modal_isVisible");
    modal.classList.remove("modal_isHidden");
})

modal_cancel.addEventListener("click", () => {
    modal.classList.remove("modal_isVisible");
    modal.classList.add("modal_isHidden");
})



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search_form');

    form.addEventListener('submit', function(event) {
        if (sendData.classList.contains("sendData_formValid")){
            event.preventDefault();

            const goodName = document.getElementById('nameInput').value.trim();
            const goodQuantity = document.getElementById('quantityInput').value.trim();

            dictionary[goodName] = removeLeadingZero(goodQuantity);
    

            const entries = Object.entries(dictionary);
            const textContent = entries.map(function(entry) {
                return entry[0] + ":" + entry[1];
            }).join(',');
            
            const blob = new Blob([textContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dictionary.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            URL.revokeObjectURL(url);
        }
    });
});

setInterval(() => {
    if (!ClueTxt_from_sendData.classList.contains("hidden")) {
        detailSearch.classList.add("form_hidden");
    }
}, 1000)


document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const content = e.target.result;
            const file_dictionary = {};
            
            const entries = content.split(',').map(entry => entry.trim());
            
            entries.forEach(entry => {
                const parts = entry.split(':');
                if (parts.length === 2) {
                    const key = parts[0].trim();
                    const value = parseInt(parts[1].trim(), 10);
                    if (!isNaN(value)) {
                        file_dictionary[key] = value;
                    }
                }
            });
            
            modal_f.classList.add("modal_isVisible");
            modal_f.classList.remove("modal_isHidden");
            output.textContent = JSON.stringify(file_dictionary, null, 2);
            const maxLength = 85;
            if (output.textContent.length > maxLength) {
                output.textContent = output.textContent.slice(0, maxLength) + '...';
            };
            document.getElementById('cancel_f').addEventListener('click', () => {
                modal_f.classList.remove("modal_isVisible");
                modal_f.classList.add("modal_isHidden");
            });
            document.getElementById('enter_f').addEventListener('click', () => {
                detailSearch.classList.add("form_hidden");
                modal_f.classList.remove("modal_isVisible");
                modal_f.classList.add("modal_isHidden");

                const entries = Object.entries(file_dictionary);
                const textContent = entries.map(function(entry) {
                    return entry[0] + ":" + entry[1];
                }).join(',');
                
                const blob = new Blob([textContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = 'dictionary.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                URL.revokeObjectURL(url);



                if (Clue.classList.contains("clue_isVisible")) {
                    setTimeout(() => {
                        Clue.classList.add("clue_isVisible");
                        Clue.classList.remove("clue_is_NOT_Visible");
                        header.classList.add("header_onClue");
                        ClueTxt_from_sendData.classList.remove("hidden");
                
                        const timeline = document.querySelector(".clue-timeline");
                        const initialWidth = 100;
                        const decreaseAmount = initialWidth / 4;
                        let currentWidth = initialWidth;
                        
                        timeline.style.width = initialWidth + 'vw';
                
                        let intervalId = setInterval(() => {
                            currentWidth -= decreaseAmount;
                            timeline.style.width = currentWidth + 'vw';
                
                            if (currentWidth <= 0) {
                                clearInterval(intervalId);
                            }
                        }, 1000);
                
                        if (Clue.classList.contains("clue_isVisible")) {
                            sendData.classList.add('sendData_formValid');
                        }
                
                        const timeoutId = setTimeout(() => {
                            Clue.classList.add("clue_is_NOT_Visible");
                            header.classList.remove("header_onClue");
                            ClueTxt_from_sendData.classList.add("hidden");
                            timeline.style.width = 100 + "vw";
                            clearInterval(intervalId);
                        }, 5000);
                
                        closeClue.addEventListener("click", () => {
                            Clue.classList.add("clue_is_NOT_Visible");
                            header.classList.remove("header_onClue");
                            clearInterval(intervalId);
                            clearTimeout(timeoutId);
                            timeline.style.width = 100 + "vw";
                            ClueTxt_from_sendData.classList.add("hidden");
                        });
                    }, 10);
                } else {
                    Clue.classList.add("clue_isVisible");
                    Clue.classList.remove("clue_is_NOT_Visible");
                    header.classList.add("header_onClue");
                    ClueTxt_from_sendData.classList.remove("hidden");
            
                    const timeline = document.querySelector(".clue-timeline");
                    const initialWidth = 100;
                    const decreaseAmount = initialWidth / 4;
                    let currentWidth = initialWidth;
                    
                    timeline.style.width = initialWidth + 'vw';
            
                    let intervalId = setInterval(() => {
                        currentWidth -= decreaseAmount;
                        timeline.style.width = currentWidth + 'vw';
            
                        if (currentWidth <= 0) {
                            clearInterval(intervalId);
                        }
                    }, 1000);
            
                    if (Clue.classList.contains("clue_isVisible")) {
                        sendData.classList.add('sendData_formValid');
                    }
            
                    const timeoutId = setTimeout(() => {
                        Clue.classList.add("clue_is_NOT_Visible");
                        header.classList.remove("header_onClue");
                        ClueTxt_from_sendData.classList.add("hidden");
                        timeline.style.width = 100 + "vw";
                        clearInterval(intervalId);
                    }, 5000);
            
                    closeClue.addEventListener("click", () => {
                        Clue.classList.add("clue_is_NOT_Visible");
                        header.classList.remove("header_onClue");
                        clearInterval(intervalId);
                        clearTimeout(timeoutId);
                        timeline.style.width = 100 + "vw";
                        ClueTxt_from_sendData.classList.add("hidden");
                    });
    
    
                }
            })
        };

        
        reader.readAsText(file);
    }
});






document.getElementById('modal-fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    modal.classList.remove("modal_isVisible");
    modal.classList.add("modal_isHidden");
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const content = e.target.result;
            const file_dictionary = {};
            
            const entries = content.split(',').map(entry => entry.trim());
            
            entries.forEach(entry => {
                const parts = entry.split(':');
                if (parts.length === 2) {
                    const key = parts[0].trim();
                    const value = parseInt(parts[1].trim(), 10);
                    if (!isNaN(value)) {
                        file_dictionary[key] = value;
                    }
                }
            });
            
            modal_f.classList.add("modal_isVisible");
            modal_f.classList.remove("modal_isHidden");
            output.textContent = JSON.stringify(file_dictionary, null, 2);
            const maxLength = 85;
            if (output.textContent.length > maxLength) {
                output.textContent = output.textContent.slice(0, maxLength) + '...';
            };
            document.getElementById('cancel_f').addEventListener('click', () => {
                modal_f.classList.remove("modal_isVisible");
                modal_f.classList.add("modal_isHidden");
            });
            document.getElementById('enter_f').addEventListener('click', () => {
                detailSearch.classList.add("form_hidden");
                modal_f.classList.remove("modal_isVisible");
                modal_f.classList.add("modal_isHidden");

                const entries = Object.entries(file_dictionary);
                const textContent = entries.map(function(entry) {
                    return entry[0] + ":" + entry[1];
                }).join(',');
                
                const blob = new Blob([textContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = 'dictionary.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                URL.revokeObjectURL(url);

                if (Clue.classList.contains("clue_isVisible")) {
                    setTimeout(() => {
                        Clue.classList.add("clue_isVisible");
                        Clue.classList.remove("clue_is_NOT_Visible");
                        header.classList.add("header_onClue");
                        ClueTxt_from_sendData.classList.remove("hidden");
                
                        const timeline = document.querySelector(".clue-timeline");
                        const initialWidth = 100;
                        const decreaseAmount = initialWidth / 4;
                        let currentWidth = initialWidth;
                        
                        timeline.style.width = initialWidth + 'vw';
                
                        let intervalId = setInterval(() => {
                            currentWidth -= decreaseAmount;
                            timeline.style.width = currentWidth + 'vw';
                
                            if (currentWidth <= 0) {
                                clearInterval(intervalId);
                            }
                        }, 1000);
                
                        if (Clue.classList.contains("clue_isVisible")) {
                            sendData.classList.add('sendData_formValid');
                        }
                
                        const timeoutId = setTimeout(() => {
                            Clue.classList.add("clue_is_NOT_Visible");
                            header.classList.remove("header_onClue");
                            ClueTxt_from_sendData.classList.add("hidden");
                            timeline.style.width = 100 + "vw";
                            clearInterval(intervalId);
                        }, 5000);
                
                        closeClue.addEventListener("click", () => {
                            Clue.classList.add("clue_is_NOT_Visible");
                            header.classList.remove("header_onClue");
                            clearInterval(intervalId);
                            clearTimeout(timeoutId);
                            timeline.style.width = 100 + "vw";
                            ClueTxt_from_sendData.classList.add("hidden");
                        });
                    }, 10);
                } else {
                    Clue.classList.add("clue_isVisible");
                    Clue.classList.remove("clue_is_NOT_Visible");
                    header.classList.add("header_onClue");
                    ClueTxt_from_sendData.classList.remove("hidden");
            
                    const timeline = document.querySelector(".clue-timeline");
                    const initialWidth = 100;
                    const decreaseAmount = initialWidth / 4;
                    let currentWidth = initialWidth;
                    
                    timeline.style.width = initialWidth + 'vw';
            
                    let intervalId = setInterval(() => {
                        currentWidth -= decreaseAmount;
                        timeline.style.width = currentWidth + 'vw';
            
                        if (currentWidth <= 0) {
                            clearInterval(intervalId);
                        }
                    }, 1000);
            
                    if (Clue.classList.contains("clue_isVisible")) {
                        sendData.classList.add('sendData_formValid');
                    }
            
                    const timeoutId = setTimeout(() => {
                        Clue.classList.add("clue_is_NOT_Visible");
                        header.classList.remove("header_onClue");
                        ClueTxt_from_sendData.classList.add("hidden");
                        timeline.style.width = 100 + "vw";
                        clearInterval(intervalId);
                    }, 5000);
            
                    closeClue.addEventListener("click", () => {
                        Clue.classList.add("clue_is_NOT_Visible");
                        header.classList.remove("header_onClue");
                        clearInterval(intervalId);
                        clearTimeout(timeoutId);
                        timeline.style.width = 100 + "vw";
                        ClueTxt_from_sendData.classList.add("hidden");
        
                    });
    
    
                }
            })
        };

        
        reader.readAsText(file);
    }
});