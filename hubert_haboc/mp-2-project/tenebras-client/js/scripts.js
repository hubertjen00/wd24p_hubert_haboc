$(function() {

    let loggedInUser;

    $('#signUpBtn').click(function() {
    
        let signUpData = [];
        const formInputs = $('input');
    
        for (let index = 0; index < formInputs.length; index++) {
            signUpData[formInputs[index].name] = formInputs[index].value;
        }
    
        $.ajax({
            "url" : 'http://localhost:8888/tenebras-server/signup.php' ,
            "type" : "POST",
            "data": Object.assign({}, signUpData),
            "success" : function(response) {
                console.log(response);
    
                for (let index = 0; index < formInputs.length; index++) {
                    formInputs[index].value = '';
                }
                alert ('Create Account Success');
                window.location.href = "http://localhost:8888/mp-1-project/index.html";
            }
        })
    });
    
    $('#signInBtn').click(function() {
    
        let signUpData = [];
        const formInputs = $('input');
    
        for (let index = 0; index < formInputs.length; index++) {
            signUpData[formInputs[index].name] = formInputs[index].value;
        }               
        
        $.ajax({
            "url" : 'http://localhost:8888/tenebras-server/signin.php' ,
            "type" : "POST",
            "data": Object.assign({}, signUpData),
            "success" : function(response) {
                console.log(response);
                // console.log(JSON.parse(response));
    
                loggedInUser = JSON.parse(response);
            
                if(response) {
                    localStorage.setItem('userId', loggedInUser.user_id);
                    localStorage.setItem('name', loggedInUser.first_name + ' ' + loggedInUser.last_name);
                    window.location.href = "http://localhost:8888/tenebras-client/dashboard.html";
                } else {
                    alert('User not found');
                }
    
                for (let index = 0; index < formInputs.length; index++) {
                    formInputs[index].value = '';
                }
            }
        })
    });


});









