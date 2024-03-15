import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks:Task[] = [
        {
            id: '1',
            title: 'titulo 1',
            description: 'descripcion 1',
            status: TaskStatus.PENDING,
        }
    ]

    getTasks(){
        return this.tasks
    }
    createTasks(title: string, description: string){
        const newTask = {
            id: new Date().toISOString(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(newTask)
        return newTask
    }

    deleteTask(id:string){
        this.tasks = this.tasks.filter( task => task.id != id )
    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id: string, updateFields: updateTaskDto): Task{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updateFields)
        this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task))
        return newTask
    }
}
