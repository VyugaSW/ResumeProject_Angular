import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonalInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'resume';
}
