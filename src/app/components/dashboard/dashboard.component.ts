import { Component } from '@angular/core';
import { StatsService } from 'src/app/services/stats/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stats:any;
  depenses:any;
  revenus:any;

  gridStyle={
    width: '25%',
    textAlign:'center'
  };

  constructor(private statsService:StatsService){
    this.getStats();
    this.getChartData();
  }

  getStats(){
    this.statsService.getStats().subscribe(
      response=>{
        console.log(response);
        this.stats=response;
      },error=>{
        console.log("erreur");
      }
      
    )
  }

  getChartData(){
    this.statsService.getChart().subscribe(
      response=>{
          if(response.listeDepenses!=null && response.listeRevenus !=null){
            this.revenus=response.listeRevenus;
            this.depenses=response.listeDepenses;
          }
          console.log(response);
      }
    );
  }
}
