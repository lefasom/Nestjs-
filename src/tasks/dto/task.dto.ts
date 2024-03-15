import { TaskStatus } from "../task.entity"
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    status: TaskStatus;

}
export class updateTaskDto{
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus;
}

