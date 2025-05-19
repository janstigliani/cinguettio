import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCinguettioComponent } from './form-cinguettio.component';

describe('FormCinguettioComponent', () => {
  let component: FormCinguettioComponent;
  let fixture: ComponentFixture<FormCinguettioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCinguettioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCinguettioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
