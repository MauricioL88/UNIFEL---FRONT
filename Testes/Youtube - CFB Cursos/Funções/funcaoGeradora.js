function* contador() {
    let i = 0;
    while(i < 10) {
        yield i += 1;
    }
}
const itc = contador();

for(let i = 0; i < 10; i +=1) {
    console.log(itc.next().value);
}