import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcessionairePage } from './concessionaire.page';

describe('ConcessionairePage', () => {
  let component: ConcessionairePage;
  let fixture: ComponentFixture<ConcessionairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcessionairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcessionairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
