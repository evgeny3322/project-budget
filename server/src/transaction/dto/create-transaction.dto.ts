import { Category } from "../../category/entities/category.entity";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "../../user/entities/user.entity";


export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  @MinLength(6)
  type: 'expense' | 'income';

  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  user: User

  // @IsOptional()
  // user?: User
}
