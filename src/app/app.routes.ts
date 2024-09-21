import { Routes } from '@angular/router';
import { TrainTracksComponent } from './train-tracks/train-tracks.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DragDropTwoComponent } from './drag-drop-two/drag-drop-two.component';

export const routes: Routes = [
  {path: 'trax', component: TrainTracksComponent },
  {path: 'sandbox', component: SandboxComponent },
  {path: 'drag-drop-ii', component: DragDropTwoComponent}
];
