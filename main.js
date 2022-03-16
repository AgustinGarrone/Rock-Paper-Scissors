
let timeout
let points=0
let resultsMostrados=false

const fx1= new Audio("fx1.mp3")
const fx2= new Audio("fx2.mp3")
const winMp3= new Audio("win.mp3")

startMenu()

function showRules () {
    let main= document.getElementsByTagName("main")[0]
    let footer=document.getElementsByTagName("footer")[0]
    /* body.style.setProperty("filter","brightness(50%)") */
    main.setAttribute("style","filter:brightness(50%);")
    footer.setAttribute("style","filter:brightness(50%);")
    document.getElementsByTagName("body")[0].style.background="black"
    document.getElementsByTagName("body")[0].innerHTML+=`
    <div class=rules> 
        <img class="rulesimg" src="img/image-rules.svg" alt="">
        <div class=rulestext>
           <p>RULES</p>
           <img class="rulesclose" src="img/icon-close.svg" alt="">
    </div>
    `
    document.querySelector(".rulesclose").addEventListener("click",closeRules)
}

function closeRules() {
    let main= document.getElementsByTagName("main")[0]
    let footer=document.getElementsByTagName("footer")[0]
    document.querySelector(".rules").remove()
    document.getElementsByTagName("body")[0].style.background="#1b2647"
    document.querySelector(".footer__rules").addEventListener("click",showRules)
    main.setAttribute("style","filter:brightness(100%);")
    footer.setAttribute("style","filter:brightness(100%);")
    startMenu()
}

function startMenu() {
    if (resultsMostrados==false) {
        let rules = document.querySelector(".footer__rules")
        let paper= document.querySelector(".game__options--paper")
        let rock= document.querySelector(".game__options--rock")
        let scissors= document.querySelector(".game__options--scissors")
        rules.addEventListener("click",showRules)
        paper.addEventListener("click",()=>startGame("paper"))
        rock.addEventListener("click",()=>startGame("rock"))
        scissors.addEventListener("click",()=>startGame("scissors")) 
    } else {
        document.querySelector(".result__content--btn").addEventListener("click",reset)
    }
}


function startGame(choice) {
    let game= document.querySelector(".game")
    /* game.removeChild(document.querySelector(".game__options1"))
    game.removeChild(document.querySelector(".game__options2")) */
    game.innerHTML= `
    <section class="game__choices">
        <div class="game__choices1">
            <p>YOU PICKED</p>
            <div class="game__choicesplayer--${choice} playerwin">
                <img src="img/icon-${choice}.svg" alt="">
            </div>
        </div>
        <div class="game__choices2 midNod">
            <p>THE HOUSE PICKED</p>  
            <div class="game__choices--rival rivalwin">
                <div class="game__choicesplayer--paper">
                    <img src="img/icon-paper.svg" alt="">
                </div>
            </div>
        </div>
    </section>
    `
    rivalSelect(choice)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function rivalSelect(choice) {
    let rivalChoice=document.querySelector(".game__choices--rival")
    let opcion=getRandomInt(1,4)
    let segundos=getRandomInt(1,4)
    let finish= false
    let opc
    let segundostranscurridos=0
    let houseSelection
    console.log(opcion)
    console.log(segundos)
    let intervalo=setInterval(function () {
        console.log("ejecutando interv")
        segundostranscurridos=segundostranscurridos+250
        switch(segundostranscurridos) {
            case 250:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--rock ">
                            <img class="rock" src="img/icon-rock.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="rock"
                    break
            case 500:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--scissors ">
                            <img class="scissors" src="img/icon-scissors.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="scissors"
                    break
            case 750:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--paper ">
                            <img class="paper" src="img/icon-paper.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="paper"
                    break
            case 1000:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--rock ">
                        <img class="rock" src="img/icon-rock.svg" alt="">
                     </div>`
                    fx1.play()
                    houseSelection="rock"
                    break
            fx1.play()
                     break
            case 1250:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--scissors ">
                        <img class="scissors" src="img/icon-scissors.svg" alt="">
                    </div>`
                    fx1.play()
                    houseSelection="scissors"
                    break
            case 1500:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--paper ">
                            <img class="paper" src="img/icon-paper.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="paper"
                    break
            case 1750:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--rock ">
                        <img class="rock" src="img/icon-rock.svg" alt="">
                    </div>`
                    fx1.play()
                    houseSelection="rock"
                    break
            case 2000:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--scissors ">
                        <img class="scissors" src="img/icon-scissors.svg" alt="">
                    </div>`
                    fx1.play()
                    houseSelection="scissors"
                    break
            case 2250:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--paper ">
                            <img class="paper" src="img/icon-paper.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="paper"
                    break
            case 2500:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--rock  ">
                        <img class="rock" src="img/icon-rock.svg" alt="">
                    </div>`
                    fx1.play()
                    houseSelection="rock"
                    break
            case 2750:rivalChoice.innerHTML=`
                    <div class="game__choicesplayer--scissors ">
                        <img class="scissors" src="img/icon-scissors.svg" alt="">
                    </div>`
                    fx1.play()
                    houseSelection="scissors"
                    break
            case 3000:rivalChoice.innerHTML=`
                        <div class="game__choicesplayer--paper">
                            <img class="paper" src="img/icon-paper.svg" alt="">
                        </div>`
                    fx1.play()
                    houseSelection="paper"
                    break
        }
        if (segundostranscurridos==segundos*1000) {
            clearTimeout(intervalo)
/*             fx2.play() */
            gameResult(choice,houseSelection)
        }
    }, 250);
}

function gameResult(player,house) {
    console.log("ejecutando game result")
    let insertarMid=document.querySelector(".midNod")
    let result=document.createElement("div")
    result.classList.add("result")
    document.querySelector(".game__choices").insertBefore(result,insertarMid)
    if (player=="rock") {
        if (house=="rock") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">DRAW</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("")
        } else if (house=="scissors") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU WIN</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            winMp3.play()
            score("win")
        } else if (house=="paper") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU LOSE</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("lose")
        }
    }
    if (player=="paper") {
        if (house=="paper") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">DRAW</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("")
        } else if (house=="rock") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU WIN</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            winMp3.play()
            score("win")
        } else if (house=="scissors") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU LOSE</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("lose")
        }
    }
    if (player=="scissors") {
        if (house=="scissors") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">DRAW</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("")
        } else if (house=="paper") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU WIN</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            winMp3.play()
            score("win")
        } else if (house=="rock") {
            result.innerHTML+=`
            <div class="result__content">
                <p class="result__content--txt">YOU LOSE</p>
                <div class="result__content--btn">
                    <p>PLAY AGAIN</P>
                </div>
            </div>
            `
            fx2.play()
            score("lose")
        }
    }
    document.querySelector(".result__content--btn").addEventListener("click",reset)
    resultsMostrados=true
}

function reset() {
    let game= document.querySelector(".game")
    game.innerHTML= `
    <div class="game__options">
                    <div class="game__options--paper">
                        <img class="paper" src="img/icon-paper.svg" alt="">
                    </div>
                    <div class="game__options--scissors">
                        <img class="scissors" src="img/icon-scissors.svg" alt="">
                    </div>
                </div>
                <div class="game__options2">
                    <div class="game__options--rock">
                        <img class="rock" src="img/icon-rock.svg" alt="">
                    </div>
                </div>
    </div>
    `
    resultsMostrados=false
    startMenu()
}

function score(status) {
    if (status=="win") {
        points=points+1
        document.querySelector(".main__cont--scorenumber").innerHTML=`${points}`
        document.querySelector(".playerwin").setAttribute("style","filter:drop-shadow(50px 50px 100px white);")
    } else if (status=="lose") {
        if (points>0) {
            points=points-1
            document.querySelector(".main__cont--scorenumber").innerHTML=`${points}`
        }
        document.querySelector(".rivalwin").setAttribute("style","filter:drop-shadow(50px 50px 100px white);")
    } else {
        document.querySelector(".result").setAttribute("style","filter:drop-shadow(50px 50px 100px white);")
    }
}