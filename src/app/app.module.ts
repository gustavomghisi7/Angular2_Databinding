import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingReviewComponent } from './data-binding-review/data-binding-review.component';

import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo-de-vida/ciclo.component';
import { CliComponent } from './cli/cli.component';

import { MeuFormModule } from './meu-form/meu-form.module';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingReviewComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    CliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
