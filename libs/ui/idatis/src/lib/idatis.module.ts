import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdatisMenuComponent } from './menu/menu.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    IdatisMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdatisModule {
  constructor(private injector: Injector){}

  ngDoBootstrap() {
    const element = createCustomElement(IdatisMenuComponent, { injector: this.injector })
    customElements.define("idatis-menu", element);
  }
}
