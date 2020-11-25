$( document ).ready(function() {
    let gifURL = "./assets/check2.gif?v=";
    // console.log( "ready!" );
    $("#submit-button").click(function(){
        let word = $("#poll-input").val()
        // console.log(word)
        word = word.toLowerCase();
        word = word.trim()
        const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        word = word.replace(punctuation,'')
        $("#poll-input").prop('disabled', true);
        $("#submit-button").prop('disabled', true);
        let message = {
            "flag":"poll-ans",
            "payload": word
        }
        var res = $.ajax({
            type:"POST",
            url:"https://c6qsh7k1l1.execute-api.us-east-2.amazonaws.com/default/hiveMind",
            data:JSON.stringify(message)
        })    
        .done(function(){
            // console.log("success")
            $("#check").css('background-image','url(' + gifURL + Math.random() + ')');
            $("#check").show()
            setTimeout(function(){ 
                $("#check").fadeOut();
             }, 5000);
        })
        .fail(function() {
            alert( "error" );
            $("#poll-input").prop('disabled', false);
            $("#submit-button").prop('disabled', false);
            $("#poll-input").val("")
        })
        setTimeout(function(){ 
            $("#poll-input").prop('disabled', false);
            $("#submit-button").prop('disabled', false);
            $("#poll-input").val("")
         }, 30000);
        // console.log("res", res)
    })
    $("#poll-input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        // console.log("KEYCODE",keycode)
        if(keycode == '13'){
            let word = $("#poll-input").val()
            // console.log(word)
            word = word.toLowerCase();
            word = word.trim()
            const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            word = word.replace(punctuation,'')
            $("#poll-input").prop('disabled', true);
            $("#submit-button").prop('disabled', true);
            let message = {
                "flag":"poll-ans",
                "payload": word
            }
            var res = $.ajax({
                type:"POST",
                url:"https://c6qsh7k1l1.execute-api.us-east-2.amazonaws.com/default/hiveMind",
                data:JSON.stringify(message)
            })    
            .done(function(){
                // console.log("success")
                $("#check").css('background-image','url(' + gifURL + Math.random() + ')');
                $("#check").show()
                setTimeout(function(){ 
                    $("#check").fadeOut();
                }, 5000);
            })
            .fail(function() {
                alert( "error" );
                $("#poll-input").prop('disabled', false);
                $("#submit-button").prop('disabled', false);
                $("#poll-input").val("")
            })
            setTimeout(function(){ 
                $("#poll-input").prop('disabled', false);
                $("#submit-button").prop('disabled', false);
                $("#poll-input").val("")
            }, 30000);
            // console.log("res", res)  
        }
    });
});