import { Component } from '@angular/core';
import { Guest } from './guest/guest';

@Component({
  selector: 'app-root',
  imports: [Guest],
  template: `<app-guest></app-guest>`,
})
export class App {}
