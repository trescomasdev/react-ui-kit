import { EventEmitter } from "events";
import uuidv1 from 'uuid/v1';

class NotificationStore extends EventEmitter {
  constructor(props) {
    super(props);

    this.notifications = [];

  }

  getNotifications() {
    return this.notifications;
  }

  addNotification(data){
    data.id = uuidv1();
    this.notifications.push(data)
    this.emit("change");
  }

  addSuccess(title, desc = ""){
    this.addNotification({title: title, desc: desc, type: "success"})
  }

  addError(title, desc = ""){
    this.addNotification({title: title, desc: desc, type: "error"})
  }

  addWarning(title, desc = ""){
    this.addNotification({title: title, desc: desc, type: "warning"})
  }

  addInfo(title, desc = ""){
    this.addNotification({title: title, desc: desc, type: "info"})
  }

  removeNotification(id){
    this.notifications = this.notifications.filter((data) => data.id !== id);
    this.emit("change");
  }

  startListening(cb) {
    this.on('change', cb)
  }

  stopListening(cb) {
    this.removeListener('change', cb)
  }
}

export default new NotificationStore();
