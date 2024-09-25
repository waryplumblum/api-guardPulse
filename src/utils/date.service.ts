import moment from 'moment-timezone';

export class DateService {
  private timezone: string = 'America/Mexico_City'; // Configura tu zona horaria aquí
  
  // Almacena la fecha en UTC
  toUTC(date: Date): Date {
    return moment.tz(date, this.timezone).utc().toDate();
  }

  // Método para formatear para visualización
  formatDateForDisplay(date: Date): string {
    return moment(date).tz(this.timezone).format(); // Usar el formato que desees
  }
}
