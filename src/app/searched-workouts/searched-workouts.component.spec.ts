import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedWorkoutsComponent } from './searched-workouts.component';

describe('SearchedWorkoutsComponent', () => {
  let component: SearchedWorkoutsComponent;
  let fixture: ComponentFixture<SearchedWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedWorkoutsComponent]
    });
    fixture = TestBed.createComponent(SearchedWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
