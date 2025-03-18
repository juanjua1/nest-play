import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module'; 
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
    imports: [TasksModule, ProjectsModule, UsersModule, AuthModule, PaymentsModule],
    controllers: [HelloController],
})
export class AppModule {}
