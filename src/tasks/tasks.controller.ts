import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, updateTaskDto } from './dto/task.dto'
@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}
    @Get() 
    getTareas(){
        return this.tasksService.getTasks()
    }
    
    @Post()
    createTarea( @Body() newTask:CreateTaskDto ){
        console.log(newTask)
        return this.tasksService.createTasks(newTask.title, newTask.description)
    }
    @Delete(':id')
    deleteTarea(@Param('id') id: string){
        this.tasksService.deleteTask(id)
    }
    @Patch(":id")
    updateTarea(@Param('id') id: string, @Body() updatedFileds: updateTaskDto){
        return this.tasksService.updateTask(id, updatedFileds)
    }
}
