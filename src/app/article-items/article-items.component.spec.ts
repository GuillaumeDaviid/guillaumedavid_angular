import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemsComponent } from './article-items.component';

describe('ArticleItemsComponent', () => {
  let component: ArticleItemsComponent;
  let fixture: ComponentFixture<ArticleItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
