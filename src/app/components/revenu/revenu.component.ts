import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { RevenuService } from 'src/app/services/revenu/revenu.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent {
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
  constructor(private fb:FormBuilder,
              private revenuService:RevenuService,
              private message:NzMessageService,
              private router:Router
  ){}
  
  ngOnInit(){
    this.getAllRevenus();
    this.revenuForm=this.fb.group({
      titre:[null,Validators.required],
      montant:[null,Validators.required],
      date:[null,Validators.required],
      categorie:[null,Validators.required],
      description:[null,Validators.required],
    })
  }
  submitForm() {
    this.revenuService.postRevenu(this.revenuForm.value).subscribe(
      response => {
        this.message.success("revenu ajoutee avec succes", { nzDuration: 5000 });
        this.getAllRevenus();
      },
      error => {
        this.message.error("Erreur lors de l'ajout de la revenu", { nzDuration: 5000 });
      }
    );
  }
  
  getAllRevenus(){
    this.revenuService.getAllRevenus().subscribe(
        response=>{
        this.revenus=response;
        console.log(this.revenus);
      }
    )
  }
  
  deleteRevenu(id:number){
    this.revenuService.deleteRevenu(id).subscribe(
      response=>{
        this.message.success("Revenu supprimer avec succes",{ nzDuration:5000});
        this.getAllRevenus();
      },error=>{
        this.message.error("Une erreur s'est produit lors de la supprission du revenu",{ nzDuration:5000});
      }
    )
  }
  
  updateRevenu(id:number){
      this.router.navigateByUrl(`/revenu/${id}/edit`);
  }
  }