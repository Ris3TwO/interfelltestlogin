import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDatepickerModule, MatCardModule, MatStepperModule, MatOptionModule, MatSelectModule, MatGridListModule, MatCheckboxModule, MatDividerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatTabsModule, MatToolbarModule, MatSidenavModule, MatBadgeModule, MatTableModule, MatExpansionModule, MatMenuModule, MatRadioModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatButtonModule, MatRippleModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
