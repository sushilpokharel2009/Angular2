import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextHighlightDirective } from './text-highlight.directive';
import { CdaStructDirective } from './cda-struct.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { RoutesProvider } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextHighlightDirective,
    CdaStructDirective,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
