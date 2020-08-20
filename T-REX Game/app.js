// document.addEventListener('DOMContentLoaded', () => {

// })


window.addEventListener('DOMContentLoaded', () => {

    const dino = document.querySelector(".dino");
    const grid = document.querySelector(".grid");
    const alert = document.getElementById("alert");
    let isJuming = false;
    let gravity = 0.9;
    let isGameOver = false;

    function control(e){
        if(e.keyCode === 32){
            if(!isJuming){
                isJuming = true;
                jump();
            }
        }
    }

    window.addEventListener("keyup",control);

    let position = 0;
    
    function jump(){
        let count = 0;
        let timeId = setInterval(function(){
            if(count === 15){
                clearInterval(timeId);
                let downTimeId = setInterval(function(){
                    if(count === 0){
                        clearInterval(downTimeId);
                        isJuming = false;
                    }
                    position -=5;
                    count--;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';
                },20)
            }
            //move up
            position += 30;
            count++;
            position = position * gravity;
            dino.style.bottom = position + 'px';
        },20)
    }


    function generateObstacles(){
        let obstaclePosition = 1000;
        let randomTime = Math.random() * 4000;
        const obstacle = document.createElement("div")
        if(!isGameOver) obstacle.classList.add("obstacle");
        grid.appendChild(obstacle);
        obstacle.style.left = obstaclePosition + 'px';

        let timerId = setInterval(function(){
            if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
                clearInterval(timerId);
                isGameOver = true
                alert.innerHTML = "Game Over"
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild);
                }
            }
            obstaclePosition-=10;
            obstacle.style.left = obstaclePosition + 'px';
        },20)

        if(!isGameOver) setTimeout(generateObstacles,randomTime);
    }


    generateObstacles();

})