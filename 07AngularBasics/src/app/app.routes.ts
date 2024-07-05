import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'product',
      component: ProductComponent,
      children: [
        {
          path: ':id',
          component: ProductComponent
        }
      ]
    }
  ];
  
  
