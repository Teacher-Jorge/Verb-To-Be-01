let btn1_am = document.getElementById('btn1_am')
let btn1_is = document.getElementById('btn1_is')
let btn1_are= document.getElementById('btn1_are')

let word1 = document.getElementById('word1')

let btn1_translate = document.getElementById('btn1_translate')

btn1_am.addEventListener('click', function() {
    word1.innerText = 'am'
    word1.style.color = 'limegreen'
    btn1.style.backgroundColor = 'chartreuse'
})

btn1_is.addEventListener('click', function() {
    word1.innerText = 'is'
    word1.style.color = 'red'
    btn1_is.style.backgroundColor = 'red'
    btn1_is.style.color = 'yellow'
})

btn1_are.addEventListener('click', function() {
    word1.innerText = 'are'
    word1.style.color = 'red'
    btn1_are.style.backgroundColor = 'red'
    btn1_are.style.color = 'yellow'
})

btn1_translate.addEventListener('click', function() {
    btn1_translate.textContent = 'Eu sou feliz. / Eu estou feliz.'
    btn1_translate.style.color = 'red'
    setTimeout(() => {
        btn1_translate.textContent = 'Translate'
        btn1_translate.style.color = 'darkorange'
    }, 3000);
})

//WORD 2
let btn2_am = document.getElementById('btn2_am')
let btn2_is = document.getElementById('btn2_is')
let btn2_are= document.getElementById('btn2_are')

let word2 = document.getElementById('word2')

let btn2_translate = document.getElementById('btn2_translate')

btn2_are.addEventListener('click', function() {
    word2.innerText = 'are'
    word2.style.color = 'limegreen'
    btn2_are.style.backgroundColor = 'chartreuse'
})

btn2_is.addEventListener('click', function() {
    word2.innerText = 'is'
    word2.style.color = 'red'
    btn2_is.style.backgroundColor = 'red'
    btn2_is.style.color = 'yellow'
})

btn2_am.addEventListener('click', function() {
    word2.innerText = 'am'
    word2.style.color = 'red'
    btn2_am.style.backgroundColor = 'red'
    btn2_am.style.color = 'yellow'
})

btn2_translate.addEventListener('click', function() {
    btn2_translate.textContent = 'Você está cansado/a.'
    btn2_translate.style.color = 'red'
    setTimeout(() => {
        btn2_translate.textContent = 'Translate'
        btn2_translate.style.color = 'darkorange'
    }, 3000);
})

//WORD 3
let btn3_am = document.getElementById('btn3_am')
let btn3_is = document.getElementById('btn3_is')
let btn3_are= document.getElementById('btn3_are')

let word3 = document.getElementById('word3')

let btn3_translate = document.getElementById('btn3_translate')

btn3_is.addEventListener('click', function() {
    word3.innerText = 'is'
    word3.style.color = 'limegreen'
    btn3_is.style.backgroundColor = 'chartreuse'
})

btn3_are.addEventListener('click', function() {
    word3.innerText = 'are'
    word3.style.color = 'red'
    btn3_are.style.backgroundColor = 'red'
    btn3_are.style.color = 'yellow'
})

btn3_am.addEventListener('click', function() {
    word3.innerText = 'am'
    word3.style.color = 'red'
    btn3_am.style.backgroundColor = 'red'
    btn3_am.style.color = 'yellow'
})

btn3_translate.addEventListener('click', function() {
    btn3_translate.textContent = 'Ele é professor.'
    btn3_translate.style.color = 'red'
    setTimeout(() => {
        btn3_translate.textContent = 'Translate'
        btn3_translate.style.color = 'darkorange'
    }, 3000);
})

//WORD 4
let btn4_am = document.getElementById('btn4_am')
let btn4_is = document.getElementById('btn4_is')
let btn4_are= document.getElementById('btn4_are')

let word4 = document.getElementById('word4')

let btn4_translate = document.getElementById('btn4_translate')

btn4_is.addEventListener('click', function() {
    word4.innerText = 'is'
    word4.style.color = 'limegreen'
    btn4_is.style.backgroundColor = 'chartreuse'
})

btn4_are.addEventListener('click', function() {
    word4.innerText = 'are'
    word4.style.color = 'red'
    btn4_are.style.backgroundColor = 'red'
    btn4_are.style.color = 'yellow'
})

btn4_am.addEventListener('click', function() {
    word4.innerText = 'am'
    word4.style.color = 'red'
    btn4_am.style.backgroundColor = 'red'
    btn4_am.style.color = 'yellow'
})

btn4_translate.addEventListener('click', function() {
    btn4_translate.textContent = 'Ela é uma aluna here.'
    btn4_translate.style.color = 'red'
    setTimeout(() => {
        btn4_translate.textContent = 'Translate'
        btn4_translate.style.color = 'darkorange'
    }, 3000);
})
