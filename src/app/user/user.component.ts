import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user! : {
    id:string;
    name:string;
    avatar:string;
  };
  @Output() selectUser = new EventEmitter();
  

  get imagePath() {return 'assets/users/'+ this.user.avatar}

  // imagePath = computed(()=>'assets/users/' + this.avatar())
  onSelectUser(){
    this.selectUser.emit(this.user.id);
  
  }

}
