

    window.onload = function() {
        //Criando elementos 2d no canvas
        var stage = document.getElementById('stage')
        var ctx = stage.getContext("2d")

        document.addEventListener("keydown", KeyPush)
        setInterval(game, 80)
        const vel = 1
        var velocidadex = 0
        var velocidadey = 0
        var cabecax = 10
        var cabecay = 15
        var tamanhop = 30
        var quantidadep = 20
        var frutax = 15
        var frutay = 15
        var rastro = []
        rabo = 5

        function game() {
        cabecax += velocidadex
        cabecay += velocidadey

        //Movimento da cobra ao bater nas bordas
        if (cabecax < 0){
            cabecax = quantidadep - 1
        }
        if (cabecax > quantidadep - 1) {
            cabecax = 0
        }
        if (cabecay < 0){
            cabecay = quantidadep - 1
        }
        if (cabecay > quantidadep - 1) {
            cabecay = 0
        }

        //Plano de fundo
        ctx.fillStyle = "rgb(0,128,128)"
        ctx.fillRect(0,0, stage.width, stage.height)
        //Fruta
        ctx.fillStyle = "rgb(255,182,193)" 
        ctx.fillRect(frutax*tamanhop, frutay*tamanhop, tamanhop, tamanhop)
        //Cobra
        ctx.fillStyle = "rgb(173,255,47)"
        for(var i = 0; i < rastro.length; i++){
            ctx.fillRect(rastro[i].x*tamanhop, rastro[i].y*tamanhop, tamanhop-1, tamanhop-1)
            //Verificação se a cabeça da cobra encostou no corpo
            if (rastro[i].x == cabecax && rastro[i].y == cabecay) {
                velocidadex = velocidadey = 0
                rabo = 5
                
            }
        }
        
         
        //Movimentação da cobra
        rastro.push({x:cabecax, y:cabecay})
        //Mantém o rastro e a cauda da cobra do mesmo tamanho
        while(rastro.length > rabo) {
            rastro.shift()
        }
          //Placar
     var placar = window.document.getElementById('placar')
     function pontos() {
         placar.innerHTML = `Placar: ${rastro.length - 4}`
    
 }
        //Aumentar a cauda da cobra ao comer a fruta e fruta recolocada randomicamente
        if (frutax == cabecax && frutay == cabecay) {
            rabo++
            frutax = Math.floor(Math.random() * quantidadep)
            frutay = Math.floor(Math.random() * quantidadep)
            pontos()
        }        
    }

    //Movimentação através das teclas
    function KeyPush(event) {
        switch (event.keyCode) {
            case 37: //tecla left
                velocidadex = -vel
                velocidadey = 0                
                break;
            case 38: //tecla up
                velocidadex = 0
                velocidadey = -vel                
                break;
            case 39: //tecla right
                velocidadex = vel
                velocidadey = 0                
                break;
            case 40: //tecla down
                velocidadex = 0
                velocidadey = vel                
                break;
            default:
                break;
                //Para subir a velocidade é negativa, para descer positiva
        }

    }
   
   
    }
