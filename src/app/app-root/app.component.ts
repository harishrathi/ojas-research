import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../srv-component/services.component';
import { TeamComponent } from '../team/team.component';
import { AchivementsComponent } from '../achivements/achivements.component';
import { ContactComponent } from '../contact/contact.component';
import { StudiesComponent } from '../studies/studies.component';
import { StrengthsComponent } from '../strengths/strengths.component';
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
        StrengthsComponent,
        HospitalsComponent,
        NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'ojas-research';
}
