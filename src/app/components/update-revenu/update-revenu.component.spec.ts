import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRevenuComponent } from './update-revenu.component';

describe('UpdateRevenuComponent', () => {
  let component: UpdateRevenuComponent;
  let fixture: ComponentFixture<UpdateRevenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRevenuComponent]
    });
    fixture = TestBed.createComponent(UpdateRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
