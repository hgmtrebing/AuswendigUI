import { TestBed } from '@angular/core/testing';
import { AngularComponent } from './angular.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AuswendigUi' title`, () => {
    const fixture = TestBed.createComponent(AngularComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AuswendigUi');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AuswendigUi');
  });
});
