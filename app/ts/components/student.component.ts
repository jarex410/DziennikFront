import {Component, ElementRef} from 'angular2/core';
import {AuthenticationService} from '../services/authentication.service'
import { User } from '../model/dziennik';
import {Router} from "angular2/src/router/router";

@Component({
    selector: 'my-app',
    template: `
<table class="table">
  <tr>
  <td>IMIE</td><td>NAZWISKO</td>
</tr>
      <tr *ngFor="#teacher of teachers">
      <td>{{ teacher.name }}  </td><td>  {{teacher.surname}}</td>
      </tr>
  </table>
  <button (click)="function($event)"> JEDEN</button>
    <button (click)="clicked($event)"> DWA</button>
    <button (click)="postTeacherek()"> 3333</button>
    <button (click)="getTeacher()"> GET TEACHEREK</button>

`,
    providers: [StudentService]

export class LoginComponent {}