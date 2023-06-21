#!/bin/bash
live() {
    echo "I hope you know what you are doing . . ."
    docker-compose up -d
}
kill() {
    echo "NOOOOOOOOOOOOOOOOOOOOO. . . . . ."
    docker-compose down
}
install() {
    CONTAINER_ID=$(docker ps -aqf "name=react-ui")
    echo "Installing gadgets for container" $CONTAINER_ID
    docker exec $CONTAINER_ID /bin/bash -c "cd /front-end-react && npm install"
}

run-front() {
    CONTAINER_ID=$(docker ps -aqf "name=react-ui")
    echo "Starting React Front End in container" $CONTAINER_ID
    docker exec $CONTAINER_ID /bin/bash -c "cd /front-end-react && npm start"
}

stop-front() {
    CONTAINER_ID=$(docker ps -aqf "name=react-ui")
    echo "Stoping React Front End in container" $CONTAINER_ID
    docker stop $CONTAINER_ID
}