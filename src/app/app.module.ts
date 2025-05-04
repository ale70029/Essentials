import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        CardComponent,
        TasksComponent, TasksComponent, NewTaskComponent], // non-standalone components or directives
    bootstrap: [AppComponent], //root component
    imports: [BrowserModule, FormsModule] //standalone components or other modules
})
export class AppModule { }