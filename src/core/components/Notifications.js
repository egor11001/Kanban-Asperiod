import { Store } from 'react-notifications-component';

export const failAuthNotification = () => {
  Store.addNotification({
    title: 'Error',
    message: 'Invalid data',
    type: 'danger',
    insert: 'right',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
};

export const successCreateNotification = (name) => {
  Store.addNotification({
    title: 'Success',
    message: `${name} created`,
    type: 'success',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const successEditNotification = (name) => {
  Store.addNotification({
    title: 'Success',
    message: `${name} changed`,
    type: 'default',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const successDeleteNotification = (name) => {
  Store.addNotification({
    title: 'Success',
    message: `${name} deleted`,
    type: 'success',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const noChangesNotification = () => {
  Store.addNotification({
    title: 'Warning',
    message: `No changes`,
    type: 'warning',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const unvalidUserEmail = (email) => {
  Store.addNotification({
    title: 'Error',
    message: `User ${email} does not exist`,
    type: 'danger',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};

export const failSignup = (message) => {
  Store.addNotification({
    title: 'Error',
    message: message,
    type: 'danger',
    insert: 'top',
    container: 'bottom-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 6000,
    },
  });
};
