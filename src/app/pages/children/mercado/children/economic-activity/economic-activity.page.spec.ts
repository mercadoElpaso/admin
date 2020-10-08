import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EconomicActivityPage } from './economic-activity.page';

describe('EconomicActivityPage', () => {
  let component: EconomicActivityPage;
  let fixture: ComponentFixture<EconomicActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
