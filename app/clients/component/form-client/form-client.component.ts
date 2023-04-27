import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {

  public form!: FormGroup

  public newObj: Client = new Client();

  public stateClient = Object.values(StateClient);

  constructor(private fb : FormBuilder,  private clientService: ClientService, private router: Router){}

  public onSubmit(){
    console.log(this.form.value);
    // méthode : POST
    // envoyer this.fom.value dans la bdd avec la méthode POST
    this.clientService.add(this.form.value).subscribe((data)=>{
      console.log(data);
      // redirection vers la page liste orders
      this.router.navigate(['']);

    })

  }


  ngOnInit() {
    this.form = this.fb.group({
      state: [this.newObj.state],
      tva:[this.newObj.tva],
      id:[this.newObj.id],
      name:[this.newObj.name],
      totalCaHt:[this.newObj.totalCaHt],
      comment:[this.newObj.comment],
    });
}
}
