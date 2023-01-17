import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-linguagens-modal',
    templateUrl: './linguagens-modal.component.html',
    styleUrls: ['./linguagens-modal.component.scss']
})
export class LinguagensModalComponent implements OnInit {

    linguagemSelecionada: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { linguagem: string }
    ) { }

    ngOnInit(): void {
        this.linguagemSelecionada = this.data.linguagem;
    }


}
