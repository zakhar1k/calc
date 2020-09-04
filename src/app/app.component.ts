import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>first:</label>
                 <input [(ngModel)]="first">
             
               <p><label>second:</label>
                 <input [(ngModel)]="second"></p>
                 
               <button (click)="sum()">+</button>
               <button (click)="diff()">-</button>
               <button (click)="mult()">×</button>
               <button (click)="div()">÷</button>
               <button (click)="clear()">C</button>


             
               <p>Result:{{res}}</p>`
})
export class AppComponent {

    first: number = null;
    second: number = null;
    res: any = "";

    sum(): void {
        this.res = Number(this.first) + Number(this.second);
    }
    diff(): void {
        this.res = Number(this.first) - Number(this.second);
    }
    mult(): void {
        this.res = Number(this.first) * Number(this.second);
    }
    div(): void {
        if (this.second != 0) {
            this.res = Number(this.first) / Number(this.second);
        }
        else {
            this.res = " Ты ебанутый на нуль делить?";
        }
    }
    clear(): void {
        this.first = null;
        this.second = null;
    }

}