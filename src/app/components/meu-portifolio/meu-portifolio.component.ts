import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-meu-portifolio',
    templateUrl: './meu-portifolio.component.html',
    styleUrls: ['./meu-portifolio.component.scss']
})
export class MeuPortifolioComponent implements OnInit {

    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
             if (matches = window.matchMedia("(max-width: 1250px)").matches ) {
                 return [
                     { 
                         title: 'BS2 - Favorecido Chave Pix',
                         descrition: 'O projeto foi criado para facilitar no processo de transações Pix. '+
                                     'Incluindo a opção de cadastro de chave Pix no cadastro de favorecidos, '+
                                     'após inclusão a chave criada fica vinculada ao cadastro do favorecido selecionado, '+
                                     'no momento do pagamento foi incluida uma opção para realizar a transferência Pix por favorecido, '+
                                     'exibindo assim todas as chaves vinculadas a este favorecido, evitando o retrabalho de ter que informar '+
                                     'a chave Pix novamente.', 
                         cols: 3, 
                         rows: 1 
                     },
                     { 
                         title: 'BS2 - Tela de login com token 2fa', 
                         descrition: 'Projeto de criação da nova identidade da tela de login, com customização "white label" '+ 
                                     'para cada parceiro do banco. Inclusão da nova paleta de cores e fontes com o objetivo de '+
                                     'visualmente trazer mais confiabilidade e inovação para as empresas parceiras. Pensando em uma melhor segurança '+
                                     'foi desenvolvido o método de autenticação através do token 2fa, onde o token é enviado ao cliente por SMS ou '+
                                     'visualizado no app BS2 Empresas disponível, apenas após a confirmação do token o login é permitido.',
                         cols: 3, 
                         rows: 1 
                     },
                     { 
                         title: 'ETEC - "Unifocus" Facilitador de estudos',
                         descrition: 'Este projeto reune todas as informações suficentes para compreender o funcionamento dos principais '+ 
                                     'vestibulares de São Paulo, desde como/onde são realizados as provas, resultados dos ultimos vestibulares, onde realizar inscrição, '+
                                     'até uma playlist de video aulas para facilitar o estudo do pré-vestibular. Caso nosso visitante ainda possuísse dúvidas, '+
                                     'disponibilizamos o "Fale conosco", onde o vistante tem a possíbilidade através de um e-mail, nos enviar sua dúvida.', 
                         cols: 3, 
                         rows: 1  
                     },
                 ];
             }

            return [
                {
                    title: 'BS2 - Favorecido com cadastro de Chave Pix',
                    descrition: 'O projeto foi criado para facilitar no processo de transações Pix. '+
                                'Incluindo a opção de cadastro de chave Pix no cadastro de favorecidos, '+
                                'após inclusão a chave criada fica vinculada ao cadastro do favorecido selecionado, '+
                                'no momento do pagamento foi incluida uma opção para realizar a transferência Pix por favorecido, '+
                                'exibindo assim todas as chaves vinculadas a este favorecido, evitando o retrabalho de ter que informar '+
                                'a chave Pix novamente.',
                    cols: 1,
                    rows: 1
                },
                {
                    title: 'BS2 - Tela de login com token 2fa',
                    descrition: 'Projeto de criação da nova identidade da tela de login, com customização "white label" '+ 
                                'para cada parceiro do banco. Inclusão da nova paleta de cores e fontes com o objetivo de '+
                                'visualmente trazer mais confiabilidade e inovação para as empresas parceiras. Pensando em uma melhor segurança '+
                                'foi desenvolvido o método de autenticação através do token 2fa, onde o token é enviado ao cliente por SMS ou '+
                                'visualizado no app BS2 Empresas disponível, apenas após a confirmação do token o login é permitido.',                    
                    cols: 1,
                    rows: 1
                },
                {
                    title: 'ETEC - Unifocus Facilitador de estudos',
                    descrition: 'Este projeto reune todas as informações suficentes para compreender o funcionamento dos principais '+ 
                                'vestibulares de São Paulo, desde como/onde são realizados as provas, resultados dos ultimos vestibulares, onde realizar inscrição, '+
                                'até uma playlist de video aulas para facilitar o estudo do pré-vestibular. Caso nosso visitante ainda possuísse dúvidas, '+
                                'disponibilizamos o "Fale conosco", onde o vistante tem a possíbilidade através de um e-mail, nos enviar sua dúvida.',        
                    cols: 1,
                    rows: 1
                },
            ];
        })
    );

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit(): void {
    }

}
