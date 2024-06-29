import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineLibComponent } from './game-engine-lib.component';

describe('GameEngineLibComponent', () => {
  let component: GameEngineLibComponent;
  let fixture: ComponentFixture<GameEngineLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEngineLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameEngineLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
