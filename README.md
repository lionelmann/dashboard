# dashboard-vue

> A Vue.js project

## Dev Reminder

Set up your local server properly. The WP Install lives at a subdomain.  
Don't forget to use the proper URLs in your wp-config.php. 

```
<VirtualHost *:80>
    ServerName sub.maindomain.dev
    DocumentRoot "/Users/USERNAME/Sites/maindomain/sub"
</VirtualHost>
```

```
127.0.0.1 sub.maindomain.dev
::1 sub.maindomain.dev
```

## Build Reminder

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

