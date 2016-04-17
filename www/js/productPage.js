    var fill = 0;
    var update = setInterval(function() {
        fill += 1;
        $('#fillIcon').css('height', (fill+'%')); 
        if (fill === 20) {
            clearInterval(update);        
        }
    }, 100);
    var fill = 0;
    var update = setInterval(function() {
        fill += 1;
        $('#fillIcon').css('height', (fill+'%')); 
        if (fill === 80) {
            clearInterval(update);        
        }
    }, 100);