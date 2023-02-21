import {HeaderComponent} from "./header.component";

describe('Test toggle basket', () => {
  let component = new HeaderComponent();

  beforeEach(() => {
    component = new HeaderComponent();
  })

  it('default value is false', () => {
    expect(component.basketOpen).toBeFalsy();
  })

  it('change value on open', () => {
    component.basketToggle();
    expect(component.basketOpen).toBeTruthy()
  })

  it('change value on close', () => {
    component.basketToggle();
    component.basketToggle();
    expect(component.basketOpen).toBeFalsy()
  })

})
