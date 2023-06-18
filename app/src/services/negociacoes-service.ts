import { NegocicoesDoDia } from "../interfaces/negociacao-do-dia.js"
import { Negociacao } from "../models/negociacao.js"

export class Negociacoesservice {
    
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegocicoesDoDia[]) => {
                return dados.map(dadoHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoHoje.vezes,
                        dadoHoje.montante
                    )
                })

            })
    }


}