import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-rockets-new',
  templateUrl: './rockets-new.component.html',
  styleUrls: ['./rockets-new.component.css']
})
export class RocketsNewComponent implements OnInit {
  @Input() public rocket = {
    _id: null,
    name: '',
    startDate: null,
    endDate: null,
    number: ''
  };
  @Output() public save = new EventEmitter<any>();
  public form: FormGroup;

  constructor(protected fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      _id: this.rocket._id,
      name: [this.rocket.name, Validators.required],
      startDate: [this.formatDate(this.rocket.startDate), [this.validDate]],
      endDate: [this.formatDate(this.rocket.endDate), [this.validDate]],
      number: [
        this.rocket.number,
        [Validators.minLength(6), Validators.maxLength(12)]
      ]
    });
  }

  public onSaveClick() {
    const newContact = { ...this.form.value };
    newContact.birthDate = this.parseDate(newContact.birthDate);
    this.save.next(newContact);
    this.form.reset();
  }

  private formatDate(value) {
    const date = new Date(value);
    if (date instanceof Date && !isNaN(date.getDate())) {
      return (
        date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
      );
    } else {
      return '';
    }
  }

  private validDate(control: AbstractControl) {
    const date = Date.parse(control.value);
    if (date && !isNaN(date)) {
      const today = new Date().getTime();
      const age = (today - date) / (1000 * 60 * 60 * 24 * 365);
      if (age >= 18 && age <= 100) {
        return null;
      }
    }
    return {
      date: 'Date of birth invalid'
    };
  }

  private parseDate(birthDate: string) {
    if (birthDate) {
      return Date.parse(birthDate);
    } else {
      return null;
    }
  }

  public showError(controlName: string) {
    const control = this.form.get(controlName);
    return control.invalid && control.touched;
  }
}
