import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  activeMsgIndex = 0;
  msgText = "";
  showside = true;

  data = [
    {
      'userName': 'Dasha',
      'isActive': true,
      'newMessage': 0,
      'userImage': 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Tina',
      'isActive': true,
      'newMessage': 2,
      'userImage': 'https://images.unsplash.com/photo-1611682060613-597ef6d1464b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Lala',
      'isActive': false,
      'newMessage': 1,
      'userImage': 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'chats': [
        {
          'msg': 'Hey Lala, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
            'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          ],
          'isYou': false,
          'time': '3:42 PM',
          'msgType': 1
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:42 PM',
          'msgType': 0,
          'media': [],
        },

        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Need to take admission in your class.',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need to know timings and adminssion fees',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Dasha',
      'isActive': true,
      'newMessage': 0,
      'userImage': 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Lina',
      'isActive': true,
      'newMessage': 2,
      'userImage': 'https://images.unsplash.com/photo-1517010268004-d68c5cbfcf69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'How can i help you.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Dasha',
      'isActive': true,
      'newMessage': 0,
      'userImage': 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Tina',
      'isActive': true,
      'newMessage': 2,
      'userImage': 'https://images.unsplash.com/photo-1611682060613-597ef6d1464b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Lala',
      'isActive': true,
      'newMessage': 1,
      'userImage': 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'chats': [
        {
          'msg': 'Hey Lala, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
            'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          ],
          'isYou': false,
          'time': '3:42 PM',
          'msgType': 1
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:42 PM',
          'msgType': 0,
          'media': [],
        },

        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Dasha',
      'isActive': true,
      'newMessage': 0,
      'userImage': 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'Yeah you can ask please tell your issue.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },
    {
      'userName': 'Lina',
      'isActive': true,
      'newMessage': 2,
      'userImage': 'https://images.unsplash.com/photo-1517010268004-d68c5cbfcf69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'chats': [
        {
          'msg': 'Hey Admin, How are you Today ?',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'I need some help',
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': '',
          'media': [
            'https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
            'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
          ],
          'isYou': false,
          'time': '3:40 PM',
          'msgType': 1
        },
        {
          'msg': 'Hey',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
        {
          'msg': 'How can i help you.',
          'isYou': true,
          'time': '3:40 PM',
          'msgType': 0,
          'media': [],
        },
      ]
    },

  ];

  check(i: any) {
    // *ngIf="i === 0; data[0].chats[i - 1].isYou
    if (i == 0) return true;
    if (this.data[0].chats[i - 1].isYou == false) return false;
    if (this.data[0].chats[i - 1].isYou == true) return false;

    return true;

  }
  changeActive(i: any) {
    this.activeMsgIndex = i;

  }

  showchats() {
    this.showside = !this.showside;
  }

}
