import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofaComponent } from './twofa.component';

describe('TwofaComponent', () => {
  let component: TwofaComponent;
  let fixture: ComponentFixture<TwofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwofaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
