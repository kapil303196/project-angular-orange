
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { FreeTrainingComponent } from './free-training/free-training.component';
import { ResourcesComponent } from './resources/resources.component';
import { CoursesComponent } from './courses/courses.component';
import { TestingComponent } from './testing/testing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SliderModule } from './slider/slider.module';
import { HomeModule } from "./home/home.module";
import { CardsComponent } from './cards/cards.component';
import { IotComponent } from './iot/iot.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { VideosComponent } from './videos/videos.component';
import { FilterPipe } from './videos/filter.pipe';

// import { YoutubePlayerModule } from 'ngx-youtube-player';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    ConsultingComponent,
    FreeTrainingComponent,
    ResourcesComponent,
    CoursesComponent,
    TestingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    CardsComponent,
    IotComponent,
    MobileAppDevelopmentComponent,
    WebDesignComponent,
    WebDevelopmentComponent,
    DndDirective,
    ProgressComponent,
    TableComponent,
    VideosComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    YouTubePlayerModule,
    FormsModule,
    SliderModule,
    HomeModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatSortModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'consulting', component: ConsultingComponent },
      { path: 'free-training', component: FreeTrainingComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'testing', component: TestingComponent },
      { path: 'web-design', component: WebDesignComponent },
      { path: 'mobile-app-development', component: MobileAppDevelopmentComponent },
      { path: 'web-development', component: WebDevelopmentComponent },
      { path: 'iot', component: IotComponent },
      { path: 'table', component: TableComponent },
      { path: 'videos', component: VideosComponent },
      { path: '', component: SliderComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
