import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormsGroup () {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('')
    })

  }
  contactForm: FormGroup;
  constructor(private dbData: DataDbService) { 
    this.contactForm = this.createFormsGroup();
  }

  ngOnInit() {
  }
  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    console.log('Saved', this.contactForm.value);
    const newContact = {
      name: 'Bazael',
      email: 'me@gmail.com',
      message: 'Hola Mundo'
    }
    this.dbData.saveMessage(this.contactForm.value);

  }

}
