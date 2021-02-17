# [Messenger](https://messenger-1.netlify.app/index.html#login) [![Netlify Status](https://api.netlify.com/api/v1/badges/f8219fec-4561-4017-9c56-946bb0ddbfb1/deploy-status)](https://app.netlify.com/sites/dreamy-noether-285e69/deploys)

[https://messenger-1.netlify.app/index.html#login](https://messenger-1.netlify.app/index.html#login)

# Замечания

```
.vscode - Такие зависимости лучше убирать под .gitignore
```

мне надо переносить между моими рабочими местами

---

```
По проекту раскидана куча .gitignore, вообще он должен быть один. лежать в корне
```

лишние убрал, но часть использована что бы в коммит можно было добавить пустые папки

---

```
Под версией лучше хранить только исходники, собранный проект всегда можно собрать из них. Так что стоит добавить эту папку под .gitignore
```

это данные для тестов

---

```
Дефолтные значения нужны для опциональных полей, так что тут либо tagName: string либо
 tageName?: string = 'component'
```

Так делать нельзя.
Параметр не может содержать ? и инициализатор.ts(1015)  
Подробнее в документации по тс → 3.9.2.2

---

```
Объект можно сразу деструктуризировать:
constructor({title, linkLogin, fieldPhone ...}: PropsSignupPage) { }
```

Не ясно что будет удобнее, так как мне необходим и props целиком, собирать его обратно.
то на то и выйдет.

## Во время самоизоляции нужно больше общения

Встречаем новый Messenger

## Нарисован с щепоткой магии

[Вот что получилось - дизайн в figma](https://www.figma.com/proto/mUP7cfOp31SqrgHVCl4mOi/Untitled?node-id=7%3A321&scaling=min-zoom)

## Помочь проекту можно, но не обязательно

Публикация на Netlify

```
npm run client:build
git add .
git commit -m 'build'
git checkout main
git merge dev
npm version patch
git checkout deploy
git merge main
git push
```

Обновление зависимостей клиента

```
npm run client:update
```

Установка для разработки

```
git clone https://github.com/aengorg/mf.messenger.praktikum.yandex.git

cd mf.messenger.praktikum.yandex/

npm run install:all
```

Запуск

```
npm run client:dev:ts
npm run client:dev:css
npm run server:dev
```

```
open http://localhost:4000/public/#
```

## Сделано

Никита Строганов
