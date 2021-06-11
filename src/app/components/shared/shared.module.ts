import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

//Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    //material
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatIconTestingModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatDialogModule,
    MatNativeDateModule

  ],
  exports: [
    //material
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatIconTestingModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatNativeDateModule,
    BreadcrumbsComponent,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
