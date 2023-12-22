var btn = document.getElementById("btn");
 btn.onclick = function(){
    var nums = ["0","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    var codes = '';
    for(var i = 0; i<6; i++){
           var ran_cod = Math.floor(Math.random()*nums.length)
    codes += nums[ran_cod];
    }
 
    document.getElementById("newcode").innerHTML = codes;
    document.getElementsByTagName("body")[0].style.background = "#"+codes;
}

