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