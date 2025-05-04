import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user! : User;
  @Input({required:true}) selected?:boolean;
  @Output() selectUser = new EventEmitter();
  

  get imagePath() {return 'assets/users/'+ this.user.avatar}

  // imagePath = computed(()=>'assets/users/' + this.avatar())
  onSelectUser(){
    this.selectUser.emit(this.user.id);
  
  }

}
