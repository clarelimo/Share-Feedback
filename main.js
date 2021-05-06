var user = [{name:"clare",password:"123"},{name:"dennis",password:"123"},{name:"josphat",password:"123"}];
function login(){
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("testerpassword").value;
    var client = document.getElementById("client");
    var tester = document.getElementById("tester");
    var success = document.getElementById("success");
    let n = user.length;
    for(let i =0;i<n;i++){
        var username = user[i].name;
        var pwd = user[i].password;
        if(username === uname && password === pwd){
            alert("Successfully logged in"); 
        }else{
            success.innerHTML = "<span style='color: red;'>"+
            "Please enter the correct password/username.</span>"
        }
    }
}

           // success.innerHTML = "<span style='color: green;'>"+
            // "Successfully Logged in.</span>"
            // if(client == "Client"){
            //     success.innerHTML = "<span style='color: green;'>"+
            //             "Successfully Logged in.</span>"
            //     document.location.href = "client.html"
            // }else{
            //     alert("Successfully logged in");
            //     success.innerHTML = "<span style='color: green;'>"+
            //             "Successfully Logged in.</span>"
            //     document.location.href = "tester.html"
            // }