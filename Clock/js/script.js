window.addEventListener('load', () => {
    document.querySelector('.clock').classList.remove("blur-effect")

    let getedRightColor = localStorage.getItem('rightColor')
    let getedLeftColor = localStorage.getItem('leftColor')
    let getedBoxColor = localStorage.getItem('boxColor')
    let getedTextColor = localStorage.getItem('textColor')

    colorRight.value = getedRightColor
    colorLeft.value = getedLeftColor
    colorBox.value = getedBoxColor
    colorText.value = getedTextColor

    document.documentElement.style.setProperty('--right-color', getedRightColor)
    document.documentElement.style.setProperty('--left-color', getedLeftColor)
    document.documentElement.style.setProperty('--box-color', getedBoxColor)
    document.documentElement.style.setProperty('--text-color', getedTextColor)
})

const secondElem = document.getElementById('seconds')
const hourElem = document.getElementById('hour')
const minuteElem = document.getElementById('minute')

setInterval(() => {
    let myDate = new Date()
    let second = myDate.getSeconds()
    let hour = myDate.getHours()
    let minute = myDate.getMinutes()

    secondElem.innerHTML = String(second).padStart(2, '0')
    hourElem.innerHTML = String(hour).padStart(2, '0')
    minuteElem.innerHTML = String(minute).padStart(2, '0')

}, 1000)

//////////////


const settingBtn = document.getElementById('setting-active')
const close = document.getElementById('close')

const settingBox = document.querySelector('.setting-box')

settingBtn.addEventListener('click', activeBox)

close.addEventListener('click', closeBox)

const colorRight = document.getElementById('color-picker-back-right')
const colorLeft = document.getElementById('color-picker-back-left')
const colorBox = document.getElementById('color-picker-box')
const colorText = document.getElementById('color-picker-text')

function closeBox() {
    settingBox.style.left = "-1000px"
    settingBtn.style.left = "0"
}

function activeBox() {
    settingBox.style.left = "10px"
    settingBtn.style.left = "-100px"
}


function handleColorChange(element, cssVar, storageKey) {
    element.addEventListener('input', (e) => {
        const value = e.target.value;
        document.documentElement.style.setProperty(cssVar, value);
        localStorage.setItem(storageKey, value);
    });
}

handleColorChange(colorRight, '--right-color', 'rightColor');
handleColorChange(colorLeft, '--left-color', 'leftColor');
handleColorChange(colorBox, '--box-color', 'boxColor');
handleColorChange(colorText, '--text-color', 'textColor');
