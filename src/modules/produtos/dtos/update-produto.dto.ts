import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateProdutoDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  preco?: number;

  @IsString()
  @IsOptional()
  descricao?: string;
}