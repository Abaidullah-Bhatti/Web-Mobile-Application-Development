let totalAmount = 500000;

document.getElementById('landingContent').style.display ="none";
document.getElementById('operWithoutCard').style.display ="none";
document.getElementById('passContent').style.display ="none";
let loginPwd = document.getElementById('loginPassword');
document.getElementById('selectionContent').style.display ="none";
document.getElementById('cashWithdraw').style.display ="none";
document.getElementById('transfer').style.display ="none";
document.getElementById('billPayment').style.display ="none";
document.getElementById('deposit').style.display ="none";
document.getElementById('checkBalance').style.display ="none";
document.getElementById('exit').style.display ="none";


function withCard() {
    document.getElementById('landingContent').style.display ="none";
    document.getElementById('passContent').style.display = "flex";
}

function withoutCard() {
    document.getElementById('landingContent').style.display = "none";
    document.getElementById('operWithoutCard').style.display = "flex";
}

function erasetxt() {
    console.log(1);
    var strng = document.getElementById("loginPassword").value;
    document.getElementById("loginPassword").value=strng.substring(0,strng.length-1)
}

function cancel() {
    document.getElementById('landingContent').style.display ="flex";
    document.getElementById('operWithoutCard').style.display ="none";
    document.getElementById('passContent').style.display ="none";
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('cashWithdraw').style.display ="none";
    document.getElementById('transfer').style.display ="none";
    document.getElementById('billPayment').style.display ="none";
    document.getElementById('deposit').style.display ="none";
    document.getElementById('checkBalance').style.display ="none";
    document.getElementById('exit').style.display ="none";
}
function check() {
    let pwdInput = document.getElementById("loginPassword").value;
    if ( pwdInput == 1234 ) {
        conti();
    } else {
        document.getElementById("loginPassword").style.marginBottom = '5%'; 
        document.getElementById("failPwd").innerHTML = "Try to enter the right password";
    }
}

function conti() {
    document.getElementById('passContent').style.display ="none";
    document.getElementById('selectionContent').style.display ="flex";
}

function withdraw() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('cashWithdraw').style.display ="flex";
    
}   

function cashWithdraw() {
    function sub(){
        a = document.getElementById('withdrawInput').value;
        return totalAmount - a;
    };
    document.getElementById("withdrawInput").style.marginBottom = '5%';
    document.getElementById("cashWithdrawDiv").style.marginBottom = '7%';
    document.getElementById('transition').innerHTML = "Transition Successful";
    document.getElementById('transition2').innerHTML = "Your remaining amount is :" + sub();
}

function transfer() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('transfer').style.display ="flex";
}

function cashTransfer() {
    function sub(){
        a = document.getElementById('transferInput').value;
        return totalAmount - a;
    };
    document.getElementById("transferInput").style.marginBottom = '5%';
    document.getElementById("transferDiv").style.marginBottom = '7%';
    document.getElementsById('transferPara').innerHTML = "Transition Successful";
    document.getElementsById('transferPara1').innerHTML = "Your remaining amount is :" + sub();
}

function billPayment() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('billPayment').style.display ="flex";
}

function cashBillPayment() {
    function sub(){
        a = document.getElementById('withdrawInput').value;
        return totalAmount - a;
    };
    document.getElementById("withdrawInput").style.marginBottom = '5%';
    document.getElementById("cashWithdrawDiv").style.marginBottom = '7%';
    document.getElementById('transition').innerHTML = "Transition Successful";
    document.getElementById('transition2').innerHTML = "Your remaining amount is :" + sub();
}

function deposit() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('deposit').style.display ="flex";
}

function cashDeposit() {
    function sub(){
        a = document.getElementById('withdrawInput').value;
        return totalAmount - a;
    };
    document.getElementById("withdrawInput").style.marginBottom = '5%';
    document.getElementById("cashWithdrawDiv").style.marginBottom = '7%';
    document.getElementById('transition').innerHTML = "Transition Successful";
    document.getElementById('transition2').innerHTML = "Your remaining amount is :" + sub();
}

function checkBalance() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('checkBalance').style.display ="flex";
}

function cashBalance() {
    function sub(){
        a = document.getElementById('withdrawInput').value;
        return totalAmount - a;
    };
    document.getElementById("withdrawInput").style.marginBottom = '5%';
    document.getElementById("cashWithdrawDiv").style.marginBottom = '7%';
    document.getElementById('transition').innerHTML = "Transition Successful";
    document.getElementById('transition2').innerHTML = "Your remaining amount is :" + sub();
}

function exit() {
    document.getElementById('selectionContent').style.display ="none";
    document.getElementById('exit').style.display ="flex";
}