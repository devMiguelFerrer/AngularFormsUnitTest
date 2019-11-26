import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        BrowserModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear 2 FormControls', () => {
    expect(component.loginForm.contains('userName')).toBeTruthy();
    expect(component.loginForm.contains('userPassword')).toBeTruthy();
  });

  it('Debería ser requerido el nombre del usuario', () => {
    const controlName = component.loginForm.get('userName');

    controlName.setValue('');

    expect(controlName.hasError('required')).toBeTruthy();
    expect(controlName.invalid).toBeTruthy();
  });

  it('Debería tener un minimo de 3 caracteres el nombre del usuario', () => {
    const controlName = component.loginForm.get('userName');

    controlName.setValue('12');

    expect(controlName.hasError('minlength')).toBeTruthy();
    expect(controlName.invalid).toBeTruthy();
  });

  it('Debería tener un maximo de 20 caracteres el nombre del usuario', () => {
    const controlName = component.loginForm.get('userName');

    controlName.setValue('123456789012345678901');

    expect(controlName.hasError('maxlength')).toBeTruthy();
    expect(controlName.invalid).toBeTruthy();
  });

  it('Debería tener un minimo de 6 caracteres el password del usuario', () => {
    const controlPassword = component.loginForm.get('userPassword');

    controlPassword.setValue('12345');

    expect(controlPassword.hasError('minlength')).toBeTruthy();
    expect(controlPassword.invalid).toBeTruthy();
  });

});
