var one = document.getElementById('1');
var two = document.getElementById('2');
var tree = document.getElementById('3');

var ecran = document.querySelector('div.start');
var widecr = screen.width;

var statu = false;

function grow() {
    var interi = document.querySelector('div.im');
    interi.classList.toggle('act');

}
function choice(id) {
    statu = false;
    one.classList.toggle('get');
    two.classList.toggle('get');
    tree.classList.toggle('get');
    if(id == 1){
        one.classList.toggle('rev');
        setTimeout(function aut(){
             two.classList.toggle('rev');
            tree.classList.toggle('rev');
        }, 1000);
        
       
    
    }else if(id ==2){
        two.classList.toggle('rev');
        setTimeout(function aut(){
        one.classList.toggle('rev');
        tree.classList.toggle('rev');
    }, 1000);
    }else{
        tree.classList.toggle('rev');
        setTimeout(function aut(){
            one.classList.toggle('rev');
            two.classList.toggle('rev');
        },1000);
    }
    setTimeout(function(){
        ecran.classList.toggle('stop');
    }, 3000);    

    

}

setInterval(()=>{
    widecr = screen.width;
}, 2000)

function getele(ele){
    if(ele == 0){
        return one;
    }else if(ele == 1){
        return two;
    }else if(ele == 2){
        return tree;
    }
}
function rand(){
    var fir = 0;
    var seg = 0;
    while(fir == seg){
        fir = Math.floor(Math.random() * 3);
        seg = Math.floor(Math.random() * 3);
    }
    if(widecr <= 550){
        var pos = getele(seg).offsetTop;
        getele(seg).style.top = getele(fir).offsetTop + "px";
        getele(fir).style.top = pos + "px";
    }else{
        var pos = getele(seg).offsetLeft;
        getele(seg).style.left = getele(fir).offsetLeft + "px";
        getele(fir).style.left = pos + "px";
    }
    

}



function start(){
    ecran.classList.toggle('stop');
    setTimeout(function(){
        one.classList.toggle('rev');
        two.classList.toggle('rev');
        tree.classList.toggle('rev');

        var time = 0;
        var add = 0;
        while(add != 10){
            time = time + 1100;
            setTimeout(function exe(){
                rand();
            }, time);
            add++; 

        }
        setTimeout(function all(){
            one.classList.toggle('get');
            two.classList.toggle('get');
            tree.classList.toggle('get');
            statu = true;
        }, 12300);
    }, 3500)
    

}
one.onclick = function(){
    if(statu){
        choice(1);
    }
}
two.onclick = function(){
    if(statu){
        choice(2);
    }
}
tree.onclick = function(){
    if(statu){
        choice(3);
    }
}


