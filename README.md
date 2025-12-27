Области данных

-   База данных на json-server
-   BFF
-   redux-store

Сущности приложения

-   пользователь
-   роль пользователя
-   статья
-   комментарий

Таблицы БД

-   пользователи users: { id, login, password, registed_at, role_id }
-   роли пользователей roles: { id, name }
-   статьи posts: { id, title, image_url, content, published_at }
-   комментарии comments: { id, author_id, post_id, content }
