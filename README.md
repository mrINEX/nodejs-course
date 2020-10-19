# CROSSCHECK Task 1. Caesar cipher CLI tool

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
git checkout Logging-and-Error-Handling_task3

npm install
```

## Running application

```
npm start

Ctrl+Shift+`

npm test
```

Максимальная оценка - 100 баллов.

Запись логов и ошибок в папке **common** (./src/common)

1. реализовано логирование (url, query parameters, body) для всех запросов к серверу с использованием middleware +20 баллов
2. добавлена централизованная обработка всех ошибок, которая включает отправку респонса с соответствующим кодом http статуса и их логирование с использованием middleware +20 баллов
3. добавлены обработка и логирование ошибок на событие `uncaughtException` +20 баллов
4. добавлены обработка и логирование ошибок на событие `unhandledRejection` +20 баллов
5. процесс логирования осуществляется единственным модулем +20 баллов
6. каждый коммит после дедлайна минус 10 баллов.

Все тесты `npm run test` должны проходить, если не проходят тесты минус 10 баллов.
