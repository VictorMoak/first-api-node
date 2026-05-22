import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProdutoDocument = HydratedDocument<Produto>;

@Schema()
export class Produto {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  preco: number;

  @Prop({ required: false })
  descricao?: string;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);