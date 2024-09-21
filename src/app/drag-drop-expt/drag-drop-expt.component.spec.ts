import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropExptComponent } from './drag-drop-expt.component';

describe('DragDropExptComponent', () => {
  let component: DragDropExptComponent;
  let fixture: ComponentFixture<DragDropExptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropExptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropExptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
