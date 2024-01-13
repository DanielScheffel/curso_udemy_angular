import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NewComponentComponent, 
    TemplateBindingComponent, 
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
  ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <app-template-control-flow />
    <!-- app-template-binding />  -->
    <!-- <app-template-variables /> -->
    <!-- <app-new-component /> -->
  `,

})
export class AppComponent {}