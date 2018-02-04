import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlComponent } from './game-control.component';

describe('GameControlComponent', () => {
  let component: GameControlComponent;
  let fixture: ComponentFixture<GameControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should correctly generate events after start', async function() {
    let result = await new Promise((resolve) => {
      let obs = component.timer.asObservable();
      let events: number[] = [];

      obs.subscribe(value0 => {
        events.push(value0);

        if (events.length === 3) {
          resolve(events);
        }
      });

      component.onStart();
    });

    expect(result).toEqual([1, 2, 3]);
  });
});
