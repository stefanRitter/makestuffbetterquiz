# MakeStuffBetter Quiz

Runs on [http://nodejs.org/](Node.js) and [http://www.mongodb.org/](MongoDB)
Frameworks used: [http://hapijs.com/](Hapi.js) and [https://angularjs.org/](Angular.js)

## Setup dev environment

    npm install supervisor grunt bower -g
    npm install
    bower install
    grunt build

## Start script (only mac)

    ./start

## Start manually
  
    mongod
    supervisor server/

## Run linters, tests, and watch

    grunt

    grunt karma
    npm test


# create and edit questions
  goto: /questions

# edit a story
  goto /stories/story_name/edit

# create a new story
  goto /stories/new/edit
