import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gym-motivation';
  userName = 'Jeet';
  date = new Date().toDateString();
  reasons: string[] = [
    'You wanna good fucking Gooooooood!',
    'You Wanna improve your Personality.',
    'It\'s part of your Lifestyle Upgrade Goal.',
    'People notice & compiment you.',
    'You refused to be a weak men.',
    'Workouts increased your T-Level.',
    'This will change the face structure.',
    'A man has to do it, No matter what.',
    'You\'re a Software Engineer; All sitting Job; No Mobility.',
    'You can flaunt to world that you work out.',
    'You\'ve to work on your self you promised.',
    'You go malls; see fit people there; You wanna be one of them.',
    'Due to workout, You\'re changing & You\'re seeing the change in you!',
    'Be a Big Boy, Be Jacked!',
    'It\'ll correct your posture.',
    'You\'re fucking 26 & It\'s yet not Late.',
    'You wanna look hot & young even at older age.',
    'You wanna live Healhy.',
    'Compare youself with other guys you know in a positive way.',
    'Even kids do gym now a days. Just Go for it.',
    'Consistancy can do wonders! And you know it.',
    'You\'ve got less time to change your self. Go for it.',
    'You go to Dmart/Zudio & see youself in the mirror, You know how you feel!'
  ];

  getReason() : string {
    return this.reasons[Math.floor(Math.random() * (this.reasons.length - 0) ) + 0]
  }
}
