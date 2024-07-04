import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DepenseService } from 'src/app/services/depense/depense.service';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent {
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
constructor(private fb:FormBuilder,
            private depenseService:DepenseService,
            private message:NzMessageService,
            private router:Router
){}

ngOnInit(){
  this.getAllDepenses();
  this.depenseForm=this.fb.group({
    titre:[null,Validators.required],
    montant:[null,Validators.required],
    date:[null,Validators.required],
    categorie:[null,Validators.required],
    description:[null,Validators.required],
  })
}
submitForm() {
  this.depenseService.postDepense(this.depenseForm.value).subscribe(
    response => {
      this.message.success("Depense ajoutee avec succes", { nzDuration: 5000 });
      this.getAllDepenses();
    },
    error => {
      this.message.error("Erreur lors de l'ajout de la dépense", { nzDuration: 5000 });
    }
  );
}

getAllDepenses(){
  this.depenseService.getAllDepenses().subscribe(
      response=>{
      this.depenses=response;
      console.log(this.depenses);
    }
  )
}

deleteDepense(id:number){
  this.depenseService.deleteDepense(id).subscribe(
    response=>{
      this.message.success("Depense supprimer avec succes",{ nzDuration:5000});
      this.getAllDepenses();
    },error=>{
      this.message.error("Une erreur s'est produit lors de la supprission du depense",{ nzDuration:5000});
    }
  )
}

updateDepense(id:number){
    this.router.navigateByUrl(`/depense/${id}/edit`);
}
}