# Spotify

Для начала нужно создатьт App на сайте Spotify по примеру https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app

В настройках приложения нужно добавить **Redirect URIs**:

```bash
http://localhost:9999/my-spotify
```

## Для запуска приложения нужно:
Установиьт зависимости командой
```bash
yarn install 
```

В файле src/api/config.js подставить clientId, который можно посмотреть на странице https://developer.spotify.com/dashboard/ перейдя в добавленое вами приложение

После того как clientId добавлен, можно запускать приложение командой:
 
```bash
yarn start 
```
 

