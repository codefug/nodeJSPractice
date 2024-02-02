const http = require("http");
const fs = require("fs").promises;

// 비동기이기 때문에 항상 에러 처리를 해줘야 한다.
const server = http
  .createServer(async (req, res) => {
    // res로 html 코드를 보냄
    try {
      // 사파리 같은 브라우저에서는 HTML을 못 읽는 경우가 있다.
      // res.write('<h1>Hello Node!</h1>');//스트림이다.
      // res.end('<p>Hello codefug</p>');
      const data = await fs.readFile("./http_server/front1.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (error) {
      console.log(error);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(error.message);
    }
  })
  .listen(3000, () => {
    console.log("3000 서버 대기 중입니다.");
  });

server.on("listening", () => {
  console.log("3000번 포트에서 서버 대기 중입니다.");
}); // 잘 되고 있는지 확인
server.on("error", (error) => {
  console.error(error); //에러 처리
});

const server2 = http
  .createServer((req, res) => {
    res.end("hi");
  })
  .listen(3001, () => {
    console.log("나두");
  });
