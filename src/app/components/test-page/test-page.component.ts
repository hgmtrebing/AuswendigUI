import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("TEST PAGE AUSWENDIG!")
  }
}
