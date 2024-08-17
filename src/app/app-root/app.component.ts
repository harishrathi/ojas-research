import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { TeamComponent } from '../team/team.component';
import { AchivementsComponent } from '../achivements/achivements.component';
import { ContactComponent } from '../contact/contact.component';
import { StudiesComponent } from '../studies/studies.component';
import { StengthsComponent } from '../stengths/stengths.component';
import { HospitalsComponent } from '../hospitals/hospitals.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    AchivementsComponent,
    ContactComponent,
    StudiesComponent,
    StengthsComponent,
    HospitalsComponent,
    NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ojas-research';
}
