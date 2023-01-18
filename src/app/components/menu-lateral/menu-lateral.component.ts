import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DadosModel } from 'src/app/core/models/dados.model';
import { ListService } from 'src/app/services/list.service';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { LinguagensModalComponent } from '../linguagens-modal/linguagens-modal.component';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-menu-lateral',
	templateUrl: './menu-lateral.component.html',
	styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

	dados: DadosModel | any;
	linguagem: string;
	idiomas: string;

	color : ThemePalette = 'primary';
  	modo: ProgressSpinnerMode = 'determinate';
	bufferValue: number = 100;
	velocidade: number = 80;

  	portugues: number;
	ingles: number;
	espanhol: number;

	html: number;
	css: number;
	js: number;
	php: number;
	wordPress: number;

	src: string
	
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
		);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private listService: ListService,
		private dialogRef: MatDialog
	) { }

	ngOnInit(): void {
		this.buscaDados();

		document.body.classList.add(environment.whitelabel);

	}

	buscaDados() {
		this.dados = this.listService.getDados().subscribe((res) => {
			this.dados = res;
			this.linguagem = this.dados.linguagens;

			this.espanhol = this.dados.idiomas.espanhol;
			this.ingles = this.dados.idiomas.ingles;
			this.portugues = this.dados.idiomas.portugues;

			this.html = this.dados.linguagens.html;
			this.css = this.dados.linguagens.css;
			this.js = this.dados.linguagens.js;
			this.php = this.dados.linguagens.php;
			this.wordPress = this.dados.linguagens.wordpress;
		});
	}

	abrirModalLinguagens(tipo:string){
		this.dialogRef.open(LinguagensModalComponent, {
			data : {
				linguagem : tipo
			},
			height: '300px',
  			width: '400px',
		});
		console.log(tipo);
	}

}
