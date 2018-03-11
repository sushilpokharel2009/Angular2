import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';  

const routes : Route[]= [
	{path:"", component: HomeComponent},
	{path:"home/:id", component: HomeComponent},
	{path:"about", component: AboutComponent},
	{path:"contact", component: ContactComponent},
	{path:"services", component: ServicesComponent},
	{path:"footer", component: FooterComponent},
	{path:"header", component: HeaderComponent},
]

export const RoutesProvider = RouterModule.forRoot(routes);
