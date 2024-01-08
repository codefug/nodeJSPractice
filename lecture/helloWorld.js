function helloNode(){
    console.log('helloNode');
}
function helloWorld(){
    console.log('hello world');
    helloNode();
}

helloWorld();