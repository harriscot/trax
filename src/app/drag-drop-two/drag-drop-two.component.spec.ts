import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropTwoComponent } from './drag-drop-two.component';

describe('DragDropTwoComponent', () => {
  let component: DragDropTwoComponent;
  let fixture: ComponentFixture<DragDropTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
