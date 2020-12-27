#!/usr/bin/env bash
chmod 755 start.sh

docker stop `docker ps -a| grep vuepage | awk '{print $1}' `
docker rm   `docker ps -a| grep vuepage | awk '{print $1}' `

docker build -t vuepage .


docker run -d -p 8888:80 --name vuepage vuepage