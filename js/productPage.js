    



    var fill = 100;
    var update = setInterval(function() {
        fill -= 1;
        $('#fillIcon').css('height', (fill+'%')); 
        if (fill === 40) {
            clearInterval(update);        
        }
    }, 100);

    var fill1 = 100;
    var update1 = setInterval(function() {
        fill1 -= 1;
        $('#fillIcon1').css('height', (fill1+'%')); 
        if (fill1 === 60) {
            clearInterval(update1);        
        }
    }, 100);