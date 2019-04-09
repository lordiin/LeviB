  import { Component } from '@angular/core';

  @Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
  })
  export class Tab1Page {

    n = null;
    nArr;
    nArrPlusOne;
    A = [];
    B;
    x = [];
    read;
    finished;

    constructor() {
    }

    ngOnInit() {
    }

    gerarInputs() {
      let temp = [];
      for (let i = 0; i < parseInt(this.n, 10) + parseInt('1', 10); i++) {
        temp.push(undefined);
      }
      for (let i = 0; i < parseInt(this.n, 10); i++) {
        this.A.push([]);
        this.A[i].push(temp);
      }
      
      this.x = [this.n];
      this.nArr = Array(parseInt(this.n, 10)).fill(0).map((x,i)=>i);
      this.nArrPlusOne = Array(parseInt(this.n, 10) + parseInt('1', 10)).fill(0).map((x,i)=>i);
      this.read = true;
      this.finished = false;
    }

    surpriseMe() {
      // this.B = Object.assign({}, this.A);
      // console.log('B: ', this.B);
      let i, j, k, l;
      let termo, m;

    /Implementando Método de Gauss/
    for (k = 0; k < Number(this.n) - Number(1); k++) {
      for (i = Number(k) + Number(1); i < Number(this.n); i++) {
        /Multiplicadores/
        m = -1 * (this.A[i][k] / this.A[k][k]);
        for (j = 0; j < Number(this.n) + Number(1); j++) {
          this.A[i][j] = (Number(this.A[k][j]) * m) + Number(this.A[i][j]);
        }
      }
    }
    /Resolvendo o sistema/
    for (i = 0; i < Number(this.n); i++) {
      termo = 0;
      l = Number(this.n) - Number(i);
      for (j = l; j < Number(this.n); j++) {
        termo = Number(termo) + (Number(this.x[j]) * Number(this.A[Number(l) - Number(1)][j]));
      }
      this.x[Number(l) - Number(1)] = Number((Number(this.A[Number(l) - Number(1)][Number(this.n)] - Number(termo)) 
      / Number(this.A[Number(l) - Number(1)][Number(l) - Number(1)])));
    }
    this.finished = true;
    this.read = false;
    }
  }
