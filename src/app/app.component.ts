import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housCost';
  total=0;
  amount=0;
  key='';


  prices = [
    {item:'Preisübersicht für das Bauvorhaben',price:1000},
    {item:'Kaufpreis vor Bemusterung',price:1005},
    {item:'Festpreiserhöhung / sonstige Mehrkosten',price:1001},
    {item:'Mehrpreis',price:107},
    {item:'Minderpreis',price:103},
    {item:'Haus gesamt einschließlich gesetylicher MwSt.',price:1004},
    {item:'Mehrpreis keller / Fundamentplatte',price:1014},
    {item:'Minderpreis keller / Fundamentplatte',price:1002},
  ]

  elements = [
    {id:1,element:'Technische Hausdaten',cost:100},
    {id:2,element:'Baustelleneinrichtung',cost:105},
    {id:3,element:'Leistungsübersicht',cost:101},
    {id:4,element:'Bauteile',cost:107},
    {id:5,element:'Wintergarten',cost:103},

    
    
  ]

  updateCheckedOptions(element:any,event:any){
    if(event.target.checked) {
     this.total=this.total+element.cost;
    }
    else if(!event.target.checked)
    this.total=this.total-element.cost;
  }

  calcAmount(){  
  this.amount=0;
  for(let value of this.prices)
  this.amount=this.amount+value.price;
  return  this.amount;
  }


  isMatch(v: any): boolean {
    return v.element.toLocaleLowerCase().includes(this.key);
  }

  onSubmit(){
  this.key=((<HTMLInputElement>document.getElementById("defaultSearch")).value.toLocaleLowerCase());
  }
  
}
