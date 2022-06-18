import { ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit, Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from './imagem';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})


export class CarrouselComponent implements OnInit  {
  @ViewChild('widgetsContent') conteudo!: ElementRef;


  imagem!: Imagem;
  imagens!: Array<Imagem>;
  
  ngOnInit(){

    for(var i=0; i<= 8 ; i++){
      this.imagens.push(new Imagem(i))
    }
    console.log(this.conteudo.nativeElement.scrollLeft);
  }

  scrollLeft(){
    console.log(this.conteudo.nativeElement.scrollLeft);
    this.conteudo.nativeElement.scrollTo({ left: (this.conteudo.nativeElement.scrollLeft - 550), behavior: 'smooth' });
  }

  scrollRight(){
    console.log(this.conteudo.nativeElement)

    this.conteudo.nativeElement.scrollTo({ left: (this.conteudo.nativeElement.scrollLeft + 550), behavior: 'smooth' });
  }
  
}
