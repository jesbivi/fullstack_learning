var a=4
if (a<0){
    console.log("error")
}
else if (a==0){
    console.log("fact is 1")
}
else{
var f=1
for (let i=1;i<=a ;i++){
    f=f*i
}
console.log(f)
}