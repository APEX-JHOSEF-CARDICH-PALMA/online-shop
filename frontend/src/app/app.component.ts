import { Component } from '@angular/core';


/**
 * - In the component we can configure the selector, wich is the label of the component used to call 
 * this component by the index.html. It associates the view (html) to this component.
 *  templateUrl : Is piece of html view that will be showed in the index.html 
 * styles: the styles of the css
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * These are the propierties of thr class. They can be accesed in the Html usigin '{{tittle}}'
 */
export class AppComponent {
  title = 'frontend';
}

/**
 * After all, we have to look at the app.module.ts, file wich contains 
 * al the configurations to make this component avaible to be used in others parts 
 */
