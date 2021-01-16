import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighlighterDirective } from "./highlighter.directive";
import { UsersComponent } from "./users/users.component";

@NgModule({
    imports:[CommonModule],
    declarations: [UsersComponent, HighlighterDirective],
    exports: [UsersComponent]
})
export class ComponentsModule {}