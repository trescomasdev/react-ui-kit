import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import NotificationStore from './NotificationStore';

import './Notifications.css';

const defaultIcons = {
  success: "check",
  error: "times",
  warning: "exclamation-triangle",
  info: "info"
}

export default class Notifications extends Component {
  constructor(props){
    super(props)

    this.state = {
      notifications: []
    }

    this.getNotifications = this.getNotifications.bind(this);
  }

  componentDidMount(){
    NotificationStore.startListening(this.getNotifications)
  }

  componentWillUnMount(){
    NotificationStore.stopListening(this.getNotifications)
  }

  getNotifications(){
    this.setState({notifications: NotificationStore.getNotifications()})
  }

  onClickNotification(id){
    NotificationStore.removeNotification(id)
  }

  setClass(classes = []){

    return classes.join(" ");
  }

  render() {

    let notifications = this.state.notifications.length > 0 ? this.state.notifications.map((notification, key) => {

      if (notification.timeout !== -1)
        setTimeout(function() {
          NotificationStore.removeNotification(notification.id)
        }, notification.timeout ? notification.timeout : 4000)

      return(
        <div key={key} className={this.setClass(["notification", notification.type])} onClick={() => this.onClickNotification(notification.id)}>
          <div>
            <FontAwesome name={notification.icon ? notification.icon : defaultIcons[notification.type]} />
          </div>
          <div>
            <span className="notification-title">{notification.title}</span>
            <span className="notification-desc">{notification.desc}</span>
          </div>
        </div>
      );
    }) : null

    return(
      <div id="notifications">
        {notifications}
      </div>
    );
  }
}
