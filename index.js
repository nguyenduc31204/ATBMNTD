const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const next1 = document.querySelector("#next1");
const next2 = document.querySelector("#next2");
const back1 = document.querySelector("#back1");
const back2 = document.querySelector("#back2");
const random = document.querySelector("#random");
const taoKhoa = document.querySelector("#crekey");
const ktra = document.querySelector("#ktra");
const ky = document.querySelector("#ky");
const hien = document.querySelector(".btnh");
const an = document.querySelector(".btna");



next1.addEventListener("click", function(){
    form1.style.left = "-550px";
    form2.style.left = "80px";
});

next2.addEventListener("click", function(){
    form2.style.left = "-550px";
    form3.style.left = "80px";
});

back1.addEventListener("click", function(){
    form2.style.left = "550px";
    form1.style.left = "80px";
});

back2.addEventListener("click", function(){
    form3.style.left = "550px";
    form2.style.left = "80px";
});

//random


function checkPri(num){
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
};

function checkP(nump){
    if(!checkPri(nump)){
        console.log(alert("Số P phải là SNT !!!"));
    }
};

function oClit (k, p) {
    let ri = p;
    let rin = k;
    let tst = 0, ts = 1;
    let tin;
    let tmp;
    let gtmp;
    while(rin > 1){
        tin = tst - ts*Math.floor(ri / rin);
         tmp = rin;
        rin = ri - rin*Math.floor(ri / rin);
        ri = tmp;
        gtmp = ts;
        ts = tin;
        tst = gtmp;
    }
    if(tin < 0){
        tin = tin + p;
    }
    return tin;
};

console.log(20%11);

    
random.addEventListener("click", function(){
    let alpha = document.querySelector("#numl").value;
    alpha = Math.floor(Math.random() * 10000);
    document.querySelector("#numl").value = alpha;
});

random.addEventListener("click", function(){
    let x = document.querySelector("#numx").value;
    x = Math.floor(Math.random() * 1000000);
    document.querySelector("#numx").value = x;
});

random.addEventListener("click", function(){
    var p = Math.floor(Math.random() * 10000);
    var k = Math.floor(Math.random() * 10000);
    while(!checkPri(p)){
        p = Math.floor(Math.random() * 10000);
    }
    while(gCD(k, (p - 1)) != 1){
        k = Math.floor(Math.random() * p) - 2;
    }
    var a = Math.floor(Math.random() * p) - 2;
    document.querySelector("#numa").value = a;
    document.querySelector("#nump").value = p;
    document.querySelector("#numk").value = k;
});


// random.addEventListener("click", function(){
//     var p = Math.floor(Math.random() * 10000);
//     while(!checkPri(p)){
//         p = Math.floor(Math.random() * 1000000);
//     }
//     document.querySelector("#nump").value = p;
// });
          

// random.addEventListener("click", function(){
//     var a = document.querySelector("#numa").value;
//     a = Math.floor(Math.random() * 10000);
//     document.querySelector("#numa").value = a;
// });

function gCD(p, k) {  
    let du = 1;
    while(du != 0){
        du = p % k;
        p = k;
        k = du;
    }
    return p;
};

function chuyenNhiPhan(decimal){
    if (decimal === 0) {
        return '0';
    }
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
};



function binhPhuongVoiNhan(num, x, y) {
    const tinh = chuyenNhiPhan(num);
    // console.log(tinh[0]);
    let p = 1;
    for(let i = 0; i < tinh.length; i++){
        if(tinh[i] == 1){
            p = p * p;
            p = p % y;
            p = p * x;
            p = p % y;
        }
        else{
            p = p * p;
            p = p % y;
        }
    }
    return p;
};

// console.log(binhPhuongVoiNhan(25, 235, 29));

function testInputtk(){
    const soP = parseInt(document.querySelector("#nump").value);
    const soAlpha = parseInt(document.querySelector("#numl").value);
    const soA = parseInt(document.querySelector("#numa").value);
    if(isNaN(soA) || isNaN(soAlpha) || isNaN(soP)){
        console.log(alert("Vui lòng nhập đủ dữ liệu!!"));
    }
}

function testInputky(){
    const soK = parseInt(document.querySelector("#numk").value);
    const x = parseInt(document.querySelector("#numx").value);
    if(isNaN(soK) || isNaN(x)){
        console.log(alert("Vui lòng nhập đủ dữ liệu!!"));
    }
}
taoKhoa.addEventListener('click', function(){
    var a = document.querySelector("#numa").value;
    var p = document.querySelector("#nump").value;
    var al = document.querySelector("#numl").value;
    checkP(p);
    testInputtk();
    checkP();
    var result = binhPhuongVoiNhan(a, al, p);
    document.querySelector("#Kpub").innerHTML = "Key pulic: {" + a + ";  " + al + ";  " + result + "}";
    document.querySelector("#Kpr").innerHTML = "Key private: **********";
    document.getElementById('betal').innerHTML = "Beta: "+ result;

//     console.log(tinhKtra(112));

// console.log(tinhXicma(112, 463));
});

an.addEventListener('click', function(){
    an.classList.add('an');
    document.querySelector("#Kpr").innerHTML = "Key private: **********";
});
hien.addEventListener('click', function(){
    var a = document.querySelector("#numa").value;
    an.classList.remove('an');
    document.querySelector("#Kpr").innerHTML = "Key private: " + a;
    
});


function readFile(file, callback) {
    var reader = new FileReader(); 
    reader.onload = function(event) { 
        var content = event.target.result; 
        callback(content); 
    }; 
    reader.readAsText(file); 
}
// ky
ky.addEventListener('click', function () {  
    const soP = parseInt(document.querySelector("#nump").value);

    var kyT = [];
    var fileInput = document.querySelector("#file1");
    var file = fileInput.files[0]; 
    if (file) {
        readFile(file, function(content) {
            console.log(content);

            var x = parseInt(convert(content)) ; 
            console.log("Giá trị của x sau khi đọc file:", x);
            tinhXicma(x, soP);
        });
    }

    else if(document.querySelector("#mess").value == ''){
        var x = parseInt(document.querySelector("#numx").value) ; 
        console.log("Giá trị của x:", x);
        tinhXicma(x, soP);
    }
    else{
        var x = parseInt(convert(document.querySelector("#mess").value)) ; 
        console.log("Giá trị của x:", x);
        tinhXicma(x, soP);
        
    }
});

function tinhXicma(x, soP){
    const soAlpha = parseInt(document.querySelector("#numl").value);
    const soA = parseInt(document.querySelector("#numa").value);
    const soK = parseInt(document.querySelector("#numk").value);
    
    checkP(soP);
    testInputky();
    const res = oClit(soK, (soP - 1));
    const gama = binhPhuongVoiNhan(soK, soAlpha, soP);
    document.querySelector("#gamal1").value = gama;
    const res2 = (x - soA * gama)%(soP - 1);
    let result = (res2*res) % (soP - 1);
    if(result < 0){
        result = result + (soP - 1);
    }
    document.querySelector("#xicmal1").value = result;
    document.querySelector("#gamal").innerHTML = "Gamal: " + gama;
    document.querySelector("#xicmal").innerHTML = "Xicmal: " + result;
    if(!isNaN(result) || !isNaN(gama)){
        console.log(alert("Ký thành công!"));
    }
};

function convert(text) {  
    let st = '';
    for(let i = 0; i < text.length; i++){
        st += text.charCodeAt(i).toString(10);
    }
    return st;
};

ktra.addEventListener('click', function () { 
    var fileInput = document.querySelector("#file2");
    var file = fileInput.files[0]; 
    if (file) {
        readFile(file, function(content) {
            var xmes = parseInt(convert(content)) ; 
            console.log("Giá trị của xmes sau khi đọc file:", xmes);
            tinhKtra(xmes);
        });
    }

    else{
        var xmes = parseInt(convert(document.querySelector("#mess1").value)) ; 
        console.log("Giá trị của xmes:", xmes);
        tinhKtra(xmes);
    }
    
});

function tinhKtra(xmes){
    const soP = parseInt(document.querySelector("#nump").value);
    const x = parseInt(document.querySelector("#numx").value);
    const soAlpha = parseInt(document.querySelector("#numl").value);
    const soA = parseInt(document.querySelector("#numa").value);
    const soK = parseInt(document.querySelector("#numk").value);
    // const res = oClit(soK, (soP - 1));
    const gama = document.querySelector("#gamal1").value;
    // const res2 = (x - soA * gama)%(soP - 1);
    // let result = (res2*res) % (soP - 1);
    // if(result < 0){
    //     result = result + (soP - 1);
    // }
    
    const xicma = document.querySelector("#xicmal1").value;
   console.log(gama);
   console.log(xicma);
    var beta = binhPhuongVoiNhan(soA, soAlpha, soP);
    const kq = binhPhuongVoiNhan(gama, beta, soP);
    const kq2 =  binhPhuongVoiNhan(xicma, gama, soP);
    let endres = (kq * kq2) % soP;
    let endres2 = binhPhuongVoiNhan(xmes, soAlpha, soP);
    console.log(endres);
    console.log(endres2);
    var Result = true;
    if(endres !== endres2){
        Result = false;
    };

    document.querySelector("#betal1").innerHTML ="Beta: " + beta;
    document.querySelector("#gamal1").innerHTML ="Gamal: " + gama;
    document.querySelector("#numal1").innerHTML = "Alpha: " + soAlpha;
    document.querySelector("#xicmal1").innerHTML ="Xicma: " + xicma;
        
    if(Result){
        console.log(alert("Văn bản chưa bị sửa đổi."));
    }
    else{
        console.log(alert("Văn bản đã bị sửa đổi."));
    }
};

function chiaVB(text){
    const x = 5;
    var verc = [];
    for(let i = 0; i < text.length; i += x){
        verc.push(text.substring(i, i + x));
    }
    return verc;
};

for(let c of chiaVB("anh duc dep trai")){
    console.log(c);
}

console.log(chiaVB("anh duc dep trai"));