import { Component } from '@angular/core';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [],
    templateUrl: './team.component.html',
    styleUrl: './team.component.css'
})
export class TeamComponent {

    public onMoreClick(id: string) {
        const element = document.getElementById(id);
        if (element == null)
            return;
        if (element.style.height == "") {
            element.style.height = 'auto';
            return;
        }
        element.style.height = element.style.height !== '6em'
            ? '6em' : 'auto';
    }
}
