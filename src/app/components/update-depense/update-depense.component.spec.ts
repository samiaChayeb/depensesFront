import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepenseComponent } from './update-depense.component';

describe('UpdateDepenseComponent', () => {
  let component: UpdateDepenseComponent;
  let fixture: ComponentFixture<UpdateDepenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDepenseComponent]
    });
    fixture = TestBed.createComponent(UpdateDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
