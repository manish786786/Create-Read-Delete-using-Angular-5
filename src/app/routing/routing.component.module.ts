import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { AliasComponent }      from '../alias/alias.component';
import { CustomComponent }  from '../custom/custom.component';
import { FileUploadComponent }  from '../file-upload/file-upload.component';
import { InterfaceComponent }  from '../interface/interface.component';
import { ProtocolsComponent }  from '../protocols/protocols.component';
import { SettingsComponent }  from '../settings/settings.component';
import { UsersComponent }  from '../users/users.component';

const routes: Routes = [    
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alias', component: AliasComponent },
  { path: 'file-upload', component: FileUploadComponent } , 
  { path: 'interface', component: InterfaceComponent } ,
  { path: 'protocols', component: ProtocolsComponent } , 
  { path: 'settings', component: SettingsComponent } , 
  { path: 'custom', component: CustomComponent } ,
  { path: 'Users', component: UsersComponent } ,
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}