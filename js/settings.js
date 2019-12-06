//抽奖人员名单
var allPerson=" ";
var L_length = 1200
for (var i = 1; i < L_length; i++) {
    console.log(i)
    if(i<10){
        allPerson += "000"+i+";";
    }else if(i<100){
        allPerson += "00"+i+";";
    }else if(i<1000){
        allPerson += "0"+i+";";
    }else{
        allPerson += String(i)+";";
    }
    console.log(allPerson)
}


var leaderArr = []//"曾耀衡","陈观斌","陈军","陈军俊","陈倩雯","陈毓新"];
//领导人员名单
/*注：这个不是黑幕，不会影响中奖率。
只是为了在第一次抽奖时，高亮领导的名字。
（刷新之后会重置）
如果不要高亮直接清空
*/

var setEmptyPerson = new Boolean();
setEmptyPerson = false //是否每次抽取后把人数框清空

var setAutoZoom = new Boolean();
setAutoZoom = true //是否开启自适应缩放