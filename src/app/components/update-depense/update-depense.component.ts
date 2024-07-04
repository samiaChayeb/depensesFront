import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DepenseService } from 'src/app/services/depense/depense.service';

@Component({
  selector: 'app-update-depense',
  templateUrl: './update-depense.component.html',
  styleUrls: ['./update-depense.component.css']
})
export class UpdateDepenseComponent {

  depenseForm!: FormGroup;
listOfCategorie:any[]=[
  "Logement",
  "Education",
  "Nouriture",
  "Transport",
  "Habillement",
  "Soins et santé",
  "autres"
];
depenses:any;
id:number =this.activatedRoute.snapshot.params['id'];
constructor(private fb:FormBuilder,
            private depenseService:DepenseService,
            private message:NzMessageService,
            private router:Router,
            private activatedRoute:ActivatedRoute
          ){}

ngOnInit(){

  this.depenseForm=this.fb.group({
    titre:[null,Validators.required],
    montant:[null,Validators.required],
    date:[null,Validators.required],
    categorie:[null,Validators.required],
    description:[null,Validators.required],
  })
  this.getDepenseById()
}

getDepenseById(){
  this.depenseService.getDepenseById(this.id).subscribe(
    response=>{
      this.depenseForm.patchValue(response);
    },error=>{
      this.message.error("erreur lors de recuperation de depense", { nzDuration:5000});
    }
  )
}
submitForm(){
  this.depenseService.updateDepense(this.id,this.depenseForm.value).subscribe(
    response=>{
      this.message.success("depense mis à jour avec succes",{nzDuration:5000});
      this.router.navigateByUrl("/depense");
    },error=>{
      this.message.error("erreur lors du mise à jour", { nzDuration:5000});
    }
  )
}
}
