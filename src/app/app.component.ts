import { Component } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm !: FormGroup;
  title = 'formulario';
  submitted = false;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      nombre : [null,[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]{3,30}?$')]],
      curp : [null,[Validators.required, Validators.minLength(18), , Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}$')]],
      paterno :   [null,[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]{3,30}?$')]],
      materno :   [null,[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]{3,30}?$')]],
      tel : [null,[Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10}?$')]],
      cel : [null,[Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10}?$')]],
      email :  [null,[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      nivel: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      asunto: ['', [Validators.required]]
    });
  }
  onSubmit(){
      this.submitted = true;
      //stop the process if the form is invalid
      if(this.registerForm.invalid){
        return;
      }else{
        alert("Se registro correctamente");
      }

    };

}//end appComponent
