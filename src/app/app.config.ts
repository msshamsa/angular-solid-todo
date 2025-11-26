// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { TODO_REPOSITORY } from './core/domain/ports/todo.repsitory';
import { HttpTodoRepository } from './core/infrastructure/adapters/http-todo.repository';




export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: TODO_REPOSITORY,            
      useClass: HttpTodoRepository        
    }
  ]
};