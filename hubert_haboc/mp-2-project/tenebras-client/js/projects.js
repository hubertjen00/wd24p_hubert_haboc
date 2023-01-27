$(function(){

    userId = localStorage.getItem('userId');
    userName = localStorage.getItem('name');

    console.log(userName);
    $('.page-header').prepend('<h1> Hello, '+userName+'!</h1>');

    if(userId !== '1') {
        $('#create_btn').hide();
    }

    $.ajax({
        "url" : 'http://localhost:8888/tenebras-server/owners.php' ,
        "type" : "GET",
        "success" : function(response) {
            console.log(response);
            if(response) {
                let users = JSON.parse(response);
    
                users.forEach(user => {
                    $('#projectOwner').append("<option value=" 
                    + user.user_id + 
                    ">" 
                    + user.first_name + 
                    ' ' 
                    + user.last_name 
                    + "</option>");
                });

            }
            
        }
    })

    $.ajax({
        "url" : 'http://localhost:8888/tenebras-server/projects.php' ,
        "type" : "POST",
        "data": { userId: userId },
        "success" : function(response) {
            let del = '<td></td>';
    
            if(response) {
                let projects = JSON.parse(response);
               
                let tbl = $('#projects-table tbody');
        
                projects.forEach(project => {
                    if(userId === '1') {
                        del = "</td><td><a href='http://localhost:8888/tenebras-server/projects.php?id="+project.project_id+"'>Delete</a>";
                        
                    }

                    tbl.append("<tr><td>" + project.project_id + 
                    "</td><td> " + project.project_name + 
                    "</td><td>" + project.owner + 
                    "</td><td>" + project.project_status + 
                    "</td><td>" + project.payment_status + 
                    "</td><td>" + project.delivery_date +
                    "</td><td>" + project.turnover_date + 
                    del +
                     "</td></tr>");
                });
            }
        }
    })

    
    $('#createProjBtn').click(function() {

        let createProjData = [];
        const formInputs = $('input');
        const formSelects = $('select');

        
        for (let index = 0; index < formInputs.length; index++) {
            createProjData[formInputs[index].name] = formInputs[index].value;
        }
        
        for (let index = 0; index < formSelects.length; index++) {
            createProjData[formSelects[index].name] = formSelects[index].value;
        }
        
        console.log(Object.assign({}, createProjData));
        $.ajax({
            "url" : 'http://localhost:8888/tenebras-server/create_project.php' ,
            "type" : "POST",
            "data": Object.assign({}, createProjData),
            "success" : function(response) {
                if(response) {
                    window.location.href = "http://localhost:8888/tenebras-client/dashboard.html";
                    alert ('Create Project Success');
                } else {
                    alert('Create Project Failed');
                }

                for (let index = 0; index < formInputs.length; index++) {
                    formInputs[index].value = '';
                }
            }
        })
    });

    $('#logout').click(function() {

        if (confirm("Do you want to logout?") == true) {
            localStorage.removeItem('userId');
            window.location.href = "http://localhost:8888/mp-1-project/index.html";
        } 

    })
})
