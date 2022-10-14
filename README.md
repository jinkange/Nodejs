# Nodejs


# React Nginx 연결

1.
$ create-react-app jinkange
$ cd jinkange
$ npm start
리액트 설치와 시동

2.
$ npm run build
nginx는 빌드된 파일을 사용하기 때문에 미리 빌드

3. 
$ sudo apt install nginx
nginx 설치

4.
sudo vim /etc/nginx/sites-available/jinkange.conf
설정파일 만들기

5.
server {
  listen 80;
  location / {
    root   /home/ubuntu/jinkange/build;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }
}

6. 
$ sudo systemctl stop nginx
$ sudo systemctl start nginx
nginx 재시작

이후 localhost:80 으로 접속시 ngixn 정상 작동 확인

7.
$ sudo vim /etc/nginx/sites-available/jinkange.conf
내에 api 경로 프록시서버 작성
server {
  listen 80;
  location / {
    root   /home/ubuntu/jinkange/build;
    index  index.html index.htm;
#    try_files $uri $uri/ /index.html;
     try_files $uri $uri/ =404;


  }
  location /api/ {
        proxy_pass http://localhost:3001;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection 'upgrade';
         proxy_set_header Host $host;
         proxy_cache_bypass $http_upgrade;

}
}

8.
node 폴더 생성후 
$ npm init -y
$ npm install --save express

이후 server.js 작성
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({
        success: true,
        test: true
    });
});
app.get('/api/test', (req, res) => {
    console.log(`test`);
    res.json({
        success: true,
        test: true
    });
});


app.listen(port, () => {
    console.log(`server is listening at asd localhost:${port}`);

});

이후 프론트 서버 도메인 연결후 주소/api/test 시 정상 출력 확인

