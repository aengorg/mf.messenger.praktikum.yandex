# [Messenger](https://messenger-1.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/f8219fec-4561-4017-9c56-946bb0ddbfb1/deploy-status)](https://app.netlify.com/sites/dreamy-noether-285e69/deploys)

## Во время самоизоляции нужно больше общения

Встречаем новый Messenger

## Нарисован с щепоткой магии

[Вот что получилось - дизайн в figma](https://www.figma.com/proto/mUP7cfOp31SqrgHVCl4mOi/Untitled?node-id=7%3A321&scaling=min-zoom)

## Замечания

1 скрипт в `client/package.json` `postinstall:TODO` нужен что бы вынуть из  
`node_mpdules` шаблонизатор. так как netlify не выполняет баш скрипты  
я удалил из игнора файл, и "закоментил" скрипт

## Помочь проекту можно, но не обязательно

Netlify

```
git clone https://github.com/aengorg/mf.messenger.praktikum.yandex.git

cd mf.messenger.praktikum.yandex/

npm i

npm run client:build
```

Запустить (не актуально)

```
npm i
npm run client:build
npm start
```

Запустить (не актуально)
Для разработки

```
npm i
npm run client:dev
npm run server:dev
```

## Сделано на совесть

Никита Строганов
