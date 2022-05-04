import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Alerta', url: '/alert', icon: 'alert-circle' },
    { title: 'Action Sheet', url: '/actionsheet', icon: 'alert' },
    { title: 'Badge', url: '/badge', icon: 'list' },
    { title: 'Card', url: '/card', icon: 'newspaper' },
    { title: 'Checkbox', url: '/checkbox', icon: 'checkbox' },
    { title: 'Cardum', url: '/card', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
