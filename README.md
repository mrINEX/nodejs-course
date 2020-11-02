# CROSSCHECK Task 5. Authentication and JWT

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
git checkout Authentication-and-JWT_task5

npm install
```

## Running application

```
npm start

Ctrl+Shift+`

npm run test:auth
```

Максимальная оценка - 100 баллов. Минимальная оценка - 0 баллов.

1. Пароли пользователей сохраняются в базу в виде хэша с использованием `bcrypt`. +20 баллов.
2. Добавлен роут `/login`, связанная с ним логика разделена между контроллером (middleware) и соответствующим сервисом. В случае отсутствия юзера в БД, возвращается 403 (Forbidden) HTTP статус. +20 баллов.
3. JWT токен содержит userId и login, секретный ключ хранится в `.env` +20 баллов.
4. Доступ ко всем роутам, за исключением `/login`, `/doc` и `/`, требует аутентификации +20 баллов.
5. Проверка на наличие токена в реквесте реализована в отдельной middleware на уровне приложения. В случае если токен не валидный, или отсутствует, возвращается 401 (Unauthorized) HTTP статус. +20 баллов.
6. Для успешного прохождения тестов обязательно наличие в БД юзера с логином - admin, паролем - admin. Все тесты `npm run test:auth` должны проходить успешно, каждый не пройденный тест минус 10 баллов.
7. каждый коммит после дедлайна минус 10 баллов.
