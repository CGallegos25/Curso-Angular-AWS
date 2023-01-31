import { Directive } from '@angular/core';
import { PropertiesComponent } from '../components/properties/properties.component';

@Directive({
  selector: '[ambSharedProperties]'
})
export class SharedPropertiesDirective {

  constructor(
    private readonly propertiesComponent: PropertiesComponent
  ) {
    this.propertiesComponent.valueOne = 10;
    this.propertiesComponent.valueTwo = 20;
    this.propertiesComponent.eventOne.emit('Valor');
    console.log(this.propertiesComponent.eventOne.subscribe(res => {
      console.log(res);
    }));
  }

}
