import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RevenuService } from 'src/app/services/revenu/revenu.service';

@Component({
  selector: 'app-update-revenu',
  templateUrl: './update-revenu.component.html',
  styleUrls: ['./update-revenu.component.css']
})
export class UpdateRevenuComponent {

revenuForm!: FormGroup;
listOfCategorie:any[]=[
  "Salaire",
  "FreeLance",
  "Investissements",
  "Bitcoin",
  "Transfert bancaire",
  "Réseax sociaux",
  "autres"
];
revenus:any;
id:number =this.activatedRoute.snapshot.params['id'];
constructor(private fb:FormBuilder,
            private revenuService:RevenuService,
            private message:NzMessageService,
            private router:Router,
            private activatedRoute:ActivatedRoute
          ){}

ngOnInit(){

  this.revenuForm=this.fb.group({
    titre:[null,Validators.required],
    montant:[null,Validators.required],
    date:[null,Validators.required],
    categorie:[null,Validators.required],
    description:[null,Validators.required],
  })
  this.getRevenuById()
}

getRevenuById(){
  this.revenuService.getRevenuById(this.id).subscribe(
    response=>{
      this.revenuForm.patchValue(response);
    },error=>{
      this.message.error("erreur lors de recuperation de revenu", { nzDuration:5000});
    }
  )
}
submitForm(){
  this.revenuService.updateRevenu(this.id,this.revenuForm.value).subscribe(
    response=>{
      this.message.success("revenu mis à jour avec succes",{nzDuration:5000});
      this.router.navigateByUrl("/revenu");
    },error=>{
      this.message.error("erreur lors du mise à jour", { nzDuration:5000});
    }
  )
}
}
