import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdTabsModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Third Party
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/components/growl/growl';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';

// Search

// Request
import { RequestComponent } from './requests/request.component';
import { MovieRequestsComponent } from './requests/movierequests.component';
import { TvRequestsComponent } from './requests/tvrequests.component';
//import { RequestGridComponent } from './request-grid/request-grid.component';
import { RequestCardComponent } from './request-grid/request-card.component';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './errors/not-found.component';

// Services 
import { RequestService } from './services/request.service';
import { NotificationService } from './services/notification.service';
import { SettingsService } from './services/settings.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { IdentityService } from './services/identity.service';
import { StatusService } from './services/status.service';


// Modules
import { SettingsModule } from './settings/settings.module';
import { WizardModule } from './wizard/wizard.module';
import { SearchModule } from './search/search.module';
import { UserManagementModule } from './usermanagement/usermanagement.module';

const routes: Routes = [
    { path: '*', component: PageNotFoundComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'requests', component: RequestComponent, canActivate: [AuthGuard] },
    //{ path: 'requests-grid', component: RequestGridComponent },
    { path: 'login', component: LoginComponent },
    { path: 'landingpage', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        GrowlModule,
        ButtonModule,
        FormsModule,
        SettingsModule,
        DataTableModule,
        SharedModule,
        InfiniteScrollModule,
        AuthModule,
        WizardModule,
        SearchModule,
        DialogModule,
        MdButtonModule,
        NgbModule.forRoot(),
        //DragulaModule,
        MdCardModule,
        MdInputModule,
        MdTabsModule,
        ReactiveFormsModule,
        UserManagementModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        RequestComponent,
        LoginComponent,
        LandingPageComponent,
        MovieRequestsComponent,
        TvRequestsComponent,
        //RequestGridComponent,
        RequestCardComponent,
    ],
    providers: [
        RequestService,
        NotificationService,
        AuthService,
        AuthGuard,
        SettingsService,
        IdentityService,
        StatusService,
    //DragulaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
