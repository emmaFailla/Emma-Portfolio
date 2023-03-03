

let time = new Date();
const sliderImage = document.querySelector('.sliderImage');
let powerInfoArray = document.querySelectorAll('.powerInfo')

//Secciones principales del DOM
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')


let cumple = 'Sat Jun 14 2023 00:00:00 GMT-0300 (hora estándar de Argentina)'

let bthdayRegExp  = /(Mon|Tue|Wen|Thu|Fri|Sat|Sun).Jun.14.20[0-9]+.00:00:00.GMT-0300..hora.estándar.de.Argentina./g


function updateLvl(date) {
    //Verificamos si el valor de Date() resulta true en base
    let boolean = bthdayRegExp.test(date);
    let lvl = document.querySelector('.lvl');
    let lvlNumber = 18;
    lvl.innerHTML = 'Lvl ' + lvlNumber
    //Si GetDate() coincide con una posible fecha de cumpleaños, el numero de lvl sera actualizado.
    if(boolean){
        lvlNumber++
        console.log(lvlNumber)
            lvl.innerHTML = 'Lvl ' + lvlNumber
    }
    else{
        console.log('Hoy no es tu cumple')
    }
}

function howManyDays(){

        if(time.getMonth() == 0|2|4|6|7|9|11){
            return 31;
        }

        else if(time.getMonth() == 3|5|8|10){
            return 30;
        }
    };


function chargingLvlBar (date) {
    
    let daysContainer = document.querySelector('.experienceAmount')
    let start = 0;
    let actual = parseInt(time.getMonth()+ 1) * howManyDays() - (parseInt(-time.getDate()) + howManyDays())
    let end = 35;
    let dayFinishedRegExp = /(Mon|Tue|Wen|Thu|Fri|Sat|Sun).(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dic).(\d)+.20(\d)+.00:00:00 GMT-0300 (hora estándar de Argentina)/g;
    let boolean  = dayFinishedRegExp.test(date)
    daysContainer.innerHtml = `${actual}/${end}`
    console.log(actual) //42, hoy es el dia 42 del año, despues uso esto para usar una barra de porcentaje.

    
        

    };

    //Calculando la cantidad de dias atuales
   

    console.log(parseInt(time.getDate()))
    //6? nos devuelve el numero de dia, no el dia en si
    console.log(time.getDate())


chargingLvlBar(Date())
updateLvl(Date())
//Yo voy a estar pasando como argumento a Date() :D



//Slider Function
//Atributos : Responsable-Resilente-Cooperador-Consciente

let position = 0;
let imagenesSlider = ["imgs/clock.gif","imgs/waterTornado.gif","imgs/star.gif","imgs/magicBook.gif",]
let atributtesNames = document.querySelectorAll(".atributteName")


function showPixelImage () {

    sliderImage.src = imagenesSlider[position]
    atributtesNames.forEach(name => {
        name.style.display = "none"
    })
return    atributtesNames[position].style.display = "block";

}

showPixelImage()

let leftButton = document.querySelector('.leftButton');
let rightButton = document.querySelector('.rightButton');

//Sonido
let changingSound = new Audio('audio/changingClick.wav');
let closingSound = new Audio('audio/closingSound.wav');
let infoSound = new Audio('audio/infoClick.wav');



// Sonidos de cambio + cambio
leftButton.addEventListener('click',()=>{
    if(position == 0){
        position = 4
    }
    changingSound.currentTime = 0;
    changingSound.play()
    position--
    showPixelImage()
})

rightButton.addEventListener('click',()=>{
    if(position == 3){
        position = -1
    }
    changingSound.currentTime = 0;
    changingSound.play()
    position++
    showPixelImage()
})

//Sonido de informacion + mostramos info
sliderImage.addEventListener('click', e =>{
    infoSound.currentTime = 0;
    infoSound.play();
    e.stopImmediatePropagation()
    powerInfoArray[position].classList.toggle('powerInfoOff')

})

//Points Handler

let initialPoints = 1;
let addedPoints = 0;

const pointsContainer = document.querySelector('.upgradePoints')
pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`
    

let upgradeButtonsArray = document.querySelectorAll('.upgradeButton');
let addedStat = ''
upgradeButtonsArray.forEach(button => {
    button.addEventListener('click', (e)=>{

    if(initialPoints == 0) return;
    let upgradeSound = new Audio('audio/upgradeSound.wav')
        initialPoints--
        pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`
        let statsContainer = e.currentTarget.parentNode.querySelector('.stadistics__container')
        console.log(statsContainer)
        upgradeSound.play()
        //Css
        if(statsContainer.classList.contains('cssStats__container')){
            let AddedBar = document.createElement('DIV')
            AddedBar.classList.add('cssGreen','statsBar','addedBar')
            statsContainer.appendChild(AddedBar) 
            addedPoints += 1;
            return addedStat = 'css';
        }
        //Html
        else if(statsContainer.classList.contains('htmlStats__container')){
            let AddedBar = document.createElement('DIV')
            AddedBar.classList.add('htmlGreen','statsBar','addedBar')
            statsContainer.appendChild(AddedBar)
            addedPoints += 1;
            return addedStat = 'html';
        }
        //Javascript
        else if(statsContainer.classList.contains('jsStats__container')){
            let AddedBar = document.createElement('DIV')
            AddedBar.classList.add('jsGreen','statsBar','addedBar')
            statsContainer.appendChild(AddedBar)
            addedPoints += 1;
            return addedStat = 'js';
        }
        //Git
        else if(statsContainer.classList.contains('gitStats__container')){
            let AddedBar = document.createElement('DIV')
            AddedBar.classList.add('gitLightGreen','statsBar','addedBar')
            statsContainer.appendChild(AddedBar);
            addedPoints += 1;
            return addedStat = 'git';
        }
       
})


})

//Escribiendo la info

let i = 0;
let text = 'Libros, videos y cursos fueron victimas de este desarollador. La leyenda cuenta que se metio en el mundo de la programacion con el objetivo de saber cada vez mas y mas. Actualmente cuenta con conocimientos de Html, Scss (css) y Javascript. Pocos lo han visto, pero se dice que sus paginas son algo "Diferentes" '

function typing(){
    if(i < text.length){
        if(text.charAt(i - 1) == "." || text.charAt(i - 1) == "," ){
            document.querySelector('.info__container-info').innerHTML +=text.charAt(i);
        i++
        return setTimeout(()=>{
            typing()
        },1000)
        }
        document.querySelector('.info__container-info').innerHTML +=text.charAt(i);
        i++
        return setTimeout(()=>{
            typing()
        },100)
    }

}

typing()

//Closing Power Sound and Function
let closePowerinfoButtonArray = document.querySelectorAll('.closePowerinfo__button')
function playClosingSound(){
    closingSound.currentTime = 0;
    closingSound.play()
}

closePowerinfoButtonArray.forEach((btn) =>{
    btn.addEventListener('click',(e)=>{
        playClosingSound()
        powerInfoArray[position].classList.toggle('powerInfoOff')
})
})


//PortFolio Hover Managment
let webPage = document.querySelectorAll('.webPage')

webPage.forEach(webpage => {
    webpage.addEventListener('mouseover',(e)=>{
        console.log('mouse por arriba')
        let linkPagina = e.currentTarget.querySelector('.pageLink__container');
        let linkGit = e.currentTarget.querySelector('.gitLink__container');
        linkPagina.classList.toggle('pageLink__containerOff')
        linkGit.classList.toggle('gitLink__containerOff')

    })
})
webPage.forEach(webpage => {
    webpage.addEventListener('mouseout',(e)=>{
        console.log('mouse por arriba')
        let linkPagina = e.currentTarget.querySelector('.pageLink__container');
        let linkGit = e.currentTarget.querySelector('.gitLink__container');
        linkPagina.classList.toggle('pageLink__containerOff')
        linkGit.classList.toggle('gitLink__containerOff')

    })
})
//Necesito lograr que al clickear solo se active objeto en si y no todos los demas

//Screens Managment
function showingScreens () {
    //Si la primera pantalla se encuentra deshabilitada:
    header.style.display = "none"
    footer.style.display = "none"
    main.style.display = "none"
    if(document.querySelector('.firstScreen__container').classList.contains('firstScreen__containerOff')){
        //Mostramos la pantalla de seleccion
        return document.querySelector('.chooseYourCharacter__container').classList.toggle('chooseYourCharacter__containerOff')
    }

    else{
        return;
    }
}

showingScreens()

//Managing Game Arrow
let gameArrowPosition = 0;
//<i class="fa-solid fa-chevron-right gameArrow"></i>
let gameOptions = document.querySelectorAll('.gameOptions')
let gameArrows = document.querySelectorAll('.gameArrow')

function showingGameArrow(){

    for(let i = 0; i < gameOptions.length ; i++){
        gameArrows[i].style.display = "none"
    }
    for(let i = 0; i < gameOptions.length ; i++){
        gameOptions[i].style.color = "#fff"
    }
    gameArrows[gameArrowPosition].style.display = "block"
    gameOptions[gameArrowPosition].style.color = "yellow"

}

showingGameArrow()

//Keys Handling Menu Buttons
function handlingMenuButtons(e){
    //ArrowUp
    if(e.key == "ArrowDown" && gameArrowPosition < 2){
        gameArrowPosition++
        changingSound.currentTime = 0;
        changingSound.play();
        return showingGameArrow();
    }

    //ArrowDown
    else if(e.key == "ArrowUp" && gameArrowPosition > 0){
        gameArrowPosition--
        changingSound.currentTime = 0;
        changingSound.play();
        return showingGameArrow();
    }
    //Enter
    else if(e.key == "Enter"){
        //Al dar "Enter" en startGame
        infoSound.currentTime = 0;
        infoSound.play()
        if(gameArrowPosition == 0){
            document.querySelector('.firstScreen__container').classList.add('firstScreen__containerOff')
            showingScreens()
            return document.removeEventListener('keydown',handlingMenuButtons)
        }
    }

    else{
        return;
    }
}

//Clicking handling Menu Buttons
gameOptions.forEach(option =>{
    option.addEventListener('click',(e)=>{
        if(e.currentTarget.classList.contains('newGameOption')){
            gameArrowPosition = 0;
            infoSound.currentTime = 0;
            infoSound.play();
            showingGameArrow();
            document.querySelector('.firstScreen__container').classList.add('firstScreen__containerOff');
            return showingScreens();
        }
        else if(e.currentTarget.classList.contains('creditsOption')){
            gameArrowPosition = 1;
            infoSound.currentTime = 0;
            infoSound.play();
            document.querySelector('.creditosScreen__container').classList.toggle('creditosScreen__containerOff')
            return showingGameArrow();
        }
        else if(e.currentTarget.classList.contains('optionsOption')){
            gameArrowPosition = 2;
            infoSound.currentTime = 0;
            infoSound.play();
            document.querySelector('.redesSocialesScreen').classList.toggle('redesSocialesScreenOff');
            return showingGameArrow();
        }
        else{
            return;
        }
    })
})

//ArrowComands for ArrowGameOptions
document.addEventListener('keydown',handlingMenuButtons);


//Al clickear sobre mi personaje
let mainCharacterSelection = document.querySelector('.characterSelectionMainCharacter')
mainCharacterSelection.addEventListener('click',()=>{
    document.querySelector('.chooseYourCharacter__container').classList.toggle('chooseYourCharacter__containerOff');
    infoSound.currentTime = 0;
    infoSound.play();
    header.style.display="flex";
    main.style.display="flex";
    footer.style.display="flex";
})


//Closing our mainCharacter
let mainCharacterClosingButton = document.querySelector('.mainCharacterClosingButton');

mainCharacterClosingButton.addEventListener('click',()=>{
    console.log(addedStat)
   
    closingSound.currentTime = 0;
    closingSound.play();
    header.style.display="none";
    main.style.display="none";
    footer.style.display="none";
    document.querySelector('.firstScreen__container').classList.toggle('firstScreen__containerOff')
    document.addEventListener('keydown',handlingMenuButtons)

    if(addedStat == "html") {
            let htmlStats = document.querySelector('.htmlStats__container');
            console.log('removiendoBarritaHtml') 
            htmlStats.removeChild(htmlStats.lastChild)
            initialPoints +=1;
            addedStat = ''
            pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`
        }

        else if(addedStat == "css") {
            let cssStats = document.querySelector('.cssStats__container');
            console.log('removiendoBarritaCss');
            cssStats.removeChild(cssStats.lastChild)
            initialPoints +=1;
            addedStat = ''
            pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`

        }

        else if(addedStat == "js") {
            let jsStats = document.querySelector('.jsStats__container');
            console.log('removiendoBarritaJs');
             jsStats.removeChild(jsStats.lastChild)   
             initialPoints +=1;
             addedStat = ''
             pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`
            
            
            
        }

        else if(addedStat == "git") {
            let gitStats =  document.querySelector('.gitStats__container');
            console.log('removiendoBarritaGit');
           gitStats.removeChild(gitStats.lastChild)
           initialPoints +=1;
           addedStat = '';
           pointsContainer.innerHTML = `Puntos disponibles : ${initialPoints}`

        }
})
//This works just using 1 point, is more of it are added the system wouldn´t work, it´s not dynamic (Something to work on in the future)


//Closing credits
document.querySelector('.creditosClosingButton').addEventListener('click',()=>{
    closingSound.currentTime = 0;
    closingSound.play()
    document.querySelector('.creditosScreen__container').classList.toggle('creditosScreen__containerOff')
})
let errorSound = new Audio('audio/error.mp3')
//Closing Social Networks
let blockedCharacterList = document.querySelectorAll('.blockedCharacter');
blockedCharacterList.forEach(character =>{
    character.addEventListener('click',()=>{
        errorSound.currentTime = 0;
        errorSound.play();
    });
});

document.querySelector('.redesSocialesClosingButton').addEventListener('click',()=>{
    closingSound.currentTime = 0;
    closingSound.play();
    document.querySelector('.redesSocialesScreen').classList.toggle('redesSocialesScreenOff')
})