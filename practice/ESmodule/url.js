const myURL = new URL('https://naver.com?a=b&a=c');

console.log(myURL.searchParams.getAll('a')) 