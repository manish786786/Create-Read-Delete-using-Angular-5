import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterfaceComponent } from './interface/interface.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AliasComponent } from './alias/alias.component';
import { CustomComponent } from './custom/custom.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { RoutingComponent } from './routing/routing.component';
import { IndexRouteComponent } from './index-route/index-route.component';
import { RoutingModule } from './routing/routing.component.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InterfaceComponent,
    SettingsComponent,
    UsersComponent,
    FileUploadComponent,
    AliasComponent,
    CustomComponent,
    ProtocolsComponent,
    RoutingComponent,
    IndexRouteComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
