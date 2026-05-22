import { IsBoolean, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsString()
    nome!: string;

    @IsBoolean()
    ativo!: boolean;
}