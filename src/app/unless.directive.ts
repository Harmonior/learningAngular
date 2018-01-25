import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({ selector: '[appUnless]'})  //appUnless 指令
export class UnlessDirective {
	private hasView = false;
    constructor(
    	private templateRef: TemplateRef<any>,
    	private viewContainer: ViewContainerRef){}
    // 我们可以使用TemplateRef取得<ng-template>的内容，
    // 并通过ViewContainerRef来访问这个视图容器。

    @Input() 
    set appUnless(condition: boolean) {
    	if(!condition && !this.hasView) {
    		this.viewContainer.createEmbeddedView(this.templateRef);
    		this.hasView = true;
    	}else if(condition && this.hasView) {
    		this.viewContainer.clear();
    		this.hasView = false;
    	}
    }
}

// 如果条件为假，并且以前尚未创建过该视图，就告诉视图容器（ViewContainer）根据模板创建一个内嵌视图。

// 如果条件为真，并且视图已经显示出来了，就会清除该容器，并销毁该视图。