import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbdDropdownBasic } from './Dropdown/dropdown-basic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableBasic } from './BasicTable/table-basic';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NgbdDropdownBasic,
    NgbdTableBasic
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }


