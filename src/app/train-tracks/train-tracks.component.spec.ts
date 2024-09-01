import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTracksComponent } from './train-tracks.component';

describe('TrainTracksComponent', () => {
  let component: TrainTracksComponent;
  let fixture: ComponentFixture<TrainTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainTracksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
