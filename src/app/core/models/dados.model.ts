import { IdiomasModel } from "./idiomas.model"
import { LinguagensModel } from "./linguagens.model"

export interface DadosModel {

    daniel: {
        nome: string,
        descricao: string,
        estado: string,
        cidade: string,
        idade: string,
        idiomas: IdiomasModel,
        linguagens: LinguagensModel
    }
}