import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}