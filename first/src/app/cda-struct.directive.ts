import { Directive, TemplateRef,  ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCdaStruct]'
})
export class CdaStructDirective {

  constructor( public templateRef:  TemplateRef<any>, public viewContainerRef: ViewContainerRef) {

   }
   @Input() set appCdaStruct (value: boolean){
		if(value){
			this.viewContainerRef.createEmbeddedView (this.templateRef);
		}else{
			this.viewContainerRef.clear();
		}
	}
}
