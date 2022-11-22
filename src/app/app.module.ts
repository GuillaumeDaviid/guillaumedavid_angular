import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArticleComponent } from './article/article.component';
import { SkillsComponent } from './skills/skills.component';
import { WhyComponent } from './why/why.component';
import { FormComponent } from './form/form.component';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';
import { ArticleItemsComponent } from './article-items/article-items.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ArticleComponent,
    SkillsComponent,
    WhyComponent,
    FormComponent,
    PortfolioItemsComponent,
    ArticleItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
