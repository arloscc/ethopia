$.ajax({

    'url' : 'http://voicebunny.comeze.com/index.php',
    'type' : 'GET',
    'data' : {
        'numberOfWords' : 10
    },
    'success' : function(data) {              
        alert('Data: '+data);
    },
    'error' : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});

toUpperCase()