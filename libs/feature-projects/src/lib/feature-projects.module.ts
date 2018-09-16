
      import { NgModule } from '@angular/core';
      import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initialState as projectsInitialState, projectsReducer } from './+state/projects.reducer';
import { ProjectsEffects } from './+state/projects.effects';
      @NgModule({
        imports: [
          CommonModule,
          
        RouterModule.forChild([
        /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
       ]),
          
        StoreModule.forFeature('projects', projectsReducer, { initialState: projectsInitialState }),
          
        EffectsModule.forFeature([ProjectsEffects]) 
        ]
      })
      export class FeatureProjectsModule { }
      