var s = '';
var i = 0;

for(i=0; i<5; i++){
    console.log('*');
} //boleh tp jawabannya salah 

for(i=0; i<15; i++){
    for(var j = 0; j<5; j++){
        s += '*';
    }
    s += '\n';
} // setiap 5x bintang, keluar dri loop dan buat baris baru \n nya
console.log(s)

for(i=0; i<15; i++){
    for(var j = 0; j<=i; j++){
        s += '*';
    }
    s += '\n';
} //2 bh loop di dlm ini
console.log(s)

for(i=15; i>0; i--){
    for(var j = 0; j<i; j++){
        s += '*';
    }
    s += '\n';
} //2 bh loop di dlm ini
console.log(s)


//latihan gabung 2 segitiga
for(i=0; i<5; i++){
    for(var j = 0; j<=i; j++){
        s += '*'; 
    }
    s += '\n';
} 
for(i=5; i>0; i--){
    for(var j = 0; j<i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s)


//latihan segitiganya siku rata kanan kebalik
for(i=0; i<6; i++){
    for(var j=0; j<i; j++){
        s += ' ';
    }
    for(var k=5; k>=i; k--){
        s += '*';
    }
    s += '\n';
} 
for(i=0; i<7; i++){
    for(var j=6; j>i; j--){
        s += ' ';
    }
    for(var k=1; k<=i; k++){
        s += '*';
    }
    s += '\n';
}  
console.log(s)

//segitiga sama kaki pake rumus deret
for(i=1; i<=5; i++){
    for(var j=5; j>i; j--){
        s += ' ';
    }
    for(var k=1; k<=(2*i-1); k++){
        s += '*';
    }
    s += '\n';
} //2 bh loop di dlm ini, j untuk 
console.log(s)


//segitiga sama kaki kebalik pake rumus deret
for(i=1; i<=5; i++){
    for(var j=1; j<i; j++){
        s += ' ';
    }
    for(var k=5; k>=(i*2 - 5); k--){
        s += '*';
    }
    s += '\n';
}
console.log(s)

//pola ketupat
for(i=1; i<=5; i++){
    for(var j=5; j>i; j--){
        s += ' ';
    }
    for(var k=1; k<=(2*i-1); k++){
        s += '*';
    }
    s += '\n';
} 
for(i=2; i<=5; i++){
    for(var j=1; j<i; j++){
        s += ' ';
    }
    for(var k=5; k>=(i*2 - 5); k--){
        s += '*';
    }
    s += '\n';
}
console.log(s)


//pola catur i=perulangan menurun kebawah, j=perulangan ke kanan
for(var i=1; i<8; i++){
    if(i % 2 == 0){
        for(var j=0; j<8; j++){
            if(j%2 == 0){
                s += '#';
            } else{
                s += 'O';
            }
        }
    } 
    else{
        for(var j=0; j<8; j++){
            if(j%2==0){
                s += 'O';
            } else{
                s += '#';
            }
        }
    }
    s += '\n';
}console.log(s)

