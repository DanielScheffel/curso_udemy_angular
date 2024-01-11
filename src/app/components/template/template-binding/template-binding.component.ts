import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Daniel Scheffel';
  public age = 19;
  public condition = this.age > 1 ? 'Teste' : 'Teste2';

  // Propertys
  public isDisable = true;
  public srcValue = 
    'https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-a-Angular-1080x675.jpg';

  // Funções
  public isTextDecoration = this.age >= 19 ? 'underline' : 'none'

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: any) {
    return console.log({
      clietX: event.clientX,
      clietY: event.clientY,
    });
  }
}
