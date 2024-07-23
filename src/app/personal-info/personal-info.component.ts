import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
  providers: [SkillsService]
})
export class PersonalInfoComponent implements OnInit {
    fullName: string = "Ivan Petrovich";
    town: string = "Arkhangelsk";
    phone: string = "89815575771";

    skills: string[] = [];

    constructor(private skillsService: SkillsService){}

    ngOnInit(): void {
      this.skills = this.skillsService.getSkills();
    }
}
