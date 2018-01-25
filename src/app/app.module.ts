import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {HeroesComponent} from './heroes.component';
import { DashboardComponent} from './dashboard.component';

// import { RouterModule } from '@angular/router';

import { AppRoutingModule} from './app-routing.module';

import { UnlessDirective} from './unless.directive';


@NgModule({
  declarations: [  // 包含应用中属于该模块的组件、管道和指令的列表
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,  // 以便angular在appcomponent中可以说认识my-heroes标签
    DashboardComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
