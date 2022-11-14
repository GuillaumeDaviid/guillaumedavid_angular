import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArticleComponent } from './article/article.component';
import { SkillsComponent } from './skills/skills.component';
import { WhyComponent } from './why/why.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ArticleComponent,
    SkillsComponent,
    WhyComponent,
    FormComponent,
    FooterComponent,
    PortfolioItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
