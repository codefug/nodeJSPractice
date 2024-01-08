console.log(this); // global? 
console.log(this === module.exports)

function a(){
    console.log(this === global);
}
a();
// node에서는 전역 스코프의 this가 module.exports이다.