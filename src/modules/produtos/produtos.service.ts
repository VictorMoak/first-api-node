import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { CreateProdutoDto } from './dtos/create-produto.dto';

@Injectable()
export class ProdutosService {
  constructor (private produtosRepository: ProdutosRepository) {}

  public findAllProdutos() {
    return this.produtosRepository.findAllProdutos();
  }

  public findOneProduto(id: string) {
    const produto = this.produtosRepository.findOneProduto(id);

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  public createProduto(data: CreateProdutoDto): String {
    this.produtosRepository.createProduto(data);

    return 'Produto criado com sucesso!!'
  }

  public atualizarProduto(id: string, data: UpdateProdutoDto) {
    this.findOneProduto(id);

    this.produtosRepository.atualizarProduto(id, data);

    return 'Produto atualizado com sucesso!';
  }

  deletarProduto(id: string): String {
    this.findOneProduto(id);

    this.produtosRepository.deletarProduto(id);

    return 'Produto deletado com sucesso!';
  }
}
