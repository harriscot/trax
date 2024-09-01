import { Routes } from '@angular/router';
import { TrainTracksComponent } from './train-tracks/train-tracks.component';
import { SandboxComponent } from './sandbox/sandbox.component';

export const routes: Routes = [
  {path: 'trax', component: TrainTracksComponent },
  {path: 'sandbox', component: SandboxComponent }
];
