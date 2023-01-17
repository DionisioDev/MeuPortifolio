import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensModalComponent } from './linguagens-modal.component';

describe('LinguagensModalComponent', () => {
  let component: LinguagensModalComponent;
  let fixture: ComponentFixture<LinguagensModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinguagensModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagensModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
