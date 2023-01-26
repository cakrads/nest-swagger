### Swagger sample

### Installation

`npm install`

### Running

Once the application is running you can visit [http://localhost:3000/api](http://localhost:3000/api) to see the Swagger interface.

See [here](https://docs.nestjs.com/recipes/swagger#bootstrap) for more information.

### Result Deploy in Vercel

See [here](https://nest-swagger.vercel.app/swagger).

The problem in Vercel is, the site can't access swagger assets, 
so to handle that we can put swagger assest manually and
route to the specific folder.

We put the swagger asset same like the swagger url path.
in this project, swagger path using `/swagger`.
So, We will put swagger assest in `public/swagger/`.

And don't forget to import ServeStaticModule in app.module,
so NestJS will make `public/swagger` accessable from url path.
```
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
```