import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsUpdateComponent } from './comments-update.component';

describe('CommentsUpdateComponent', () => {
  let component: CommentsUpdateComponent;
  let fixture: ComponentFixture<CommentsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
