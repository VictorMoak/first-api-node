import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber()
  @IsPositive()
  preco: number;

  @IsString()
  @IsOptional()
  descricao?: string;
}