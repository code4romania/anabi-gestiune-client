import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * Shows an error message using a MatSnackBar
   * @param {string} aMessage
   */
  showError(aMessage: string) {
    this.snackBar.open(aMessage, 'Ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'notification-snackbar',
    } as MatSnackBarConfig);
  }
}
