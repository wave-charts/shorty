import { application } from './application';

async function bootstrap() {
  const app = await application();
  
  app.enableCors({
    origin: process.env.CORS_ALLOW_ORIGIN.split(","),
    methods: process.env.CORS_ALLOW_METHODS.split(","),
  });
  
  app.listen(3002);
}

bootstrap();
