import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

export interface User{
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks: any[] = [];

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
       const taskFound = this.tasks.find(task => task.id === id)

       if (!taskFound) {
            return new NotFoundException(`Task with id ${id} not found`)
       }
       return taskFound
    }


    createTask(task: createTaskDto)  { 
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
    });
        return task 
    }

    updateTask(task: updateTaskDto) {
        console.log(task)
        return 'Actualizando tareas';
    }

    deleteTask() {
        return 'Eliminando tareas';
    }

    updateTaskStatus() {
        return 'Actualizando el estado de la tarea';
    }
    
}