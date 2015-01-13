requirejs.config({
   baseUrl: 'scripts/lib',
   paths: {
      app: '../../app',
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
   }
});

requirejs(["app/main"]);
