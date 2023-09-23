import { IsInstance, IsNotEmpty, IsObject, IsOptional } from "class-validator";
import { User } from "../../user/entities/user.entity";

export class CreateCategoryDto {
  @IsNotEmpty()
  title: string

  @IsOptional()
  user?: User;

  // @IsNotEmpty()
  // user: User
}
