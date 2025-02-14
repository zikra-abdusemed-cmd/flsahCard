import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { FlashcardsModule } from './flashcards/flashcards.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    AuthModule, UserModule, FlashcardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
