import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputvalueget } from './inputvalueget';

describe('Inputvalueget', () => {
  let component: Inputvalueget;
  let fixture: ComponentFixture<Inputvalueget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputvalueget],
    }).compileComponents();

    fixture = TestBed.createComponent(Inputvalueget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
