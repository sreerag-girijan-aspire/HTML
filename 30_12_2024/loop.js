for ( i=10;i>=0;i--){
    console.log(i);
    const output = document.querySelector('.for-output');
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent=i;

}

var i=10;
while (i>=0){
    console.log(i);
    const output = document.querySelector('.while-output');
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent=i;
    i--;
}

var i=10;
do{
    console.log(i);
    const output = document.querySelector('.do-while-output');
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent=i;
    i--;
}while(i>=0)