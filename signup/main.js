var user = [{name:"clare",password:"123"},{name:"dennis",password:"123"},{name:"josphat",password:"123"}];
function login(){
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("testerpassword").value;
    var success = document.getElementById("success");
    let n = user.length;
    for(let i =0;i<n;i++){
        var username = user[i].name;
        var pwd = user[i].password;
        if(username === uname && password === pwd){
            alert("success");
            success.innerHTML = "<span style='color: green;'>"+
                        "Successfully Logged in.</span>"
        }else{
            // alert("Please enter the correct password/sername")
            success.innerHTML = "<span style='color: red;'>"+
            "Please enter the correct password/username.</span>"
        }
    }
}