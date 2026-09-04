/**
 * Executive Report Generator & Financial Reconciliation Engine
 * Exports match day summaries, revenue breakdown CSVs, tax ledgers, and attendance audits.
 */

export interface MatchFinancialReport {
  eventId: string;
  eventName: string;
  venueName: string;
  matchDate: string;
  totalSeats: number;
  ticketsSold: number;
  occupancyPercentage: number;
  grossTicketRevenue: number;
  convenienceFeesCollected: number;
  gstCollected: number;
  concessionRevenue: number;
  parkingRevenue: number;
  totalMatchDayRevenue: number;
}

export class ExecutiveReportGenerator {
  public generateFinancialReport(
    eventId: string,
    eventName: string,
    venueName: string,
    matchDate: string,
    ticketsSold: number,
    averagePrice: number = 2500
  ): MatchFinancialReport {
    const totalSeats = 55000;
    const occupancyPercentage = Math.round((ticketsSold / totalSeats) * 100);
    const grossTicketRevenue = ticketsSold * averagePrice;
    const convenienceFeesCollected = ticketsSold * 125;
    const gstCollected = Math.round((grossTicketRevenue + convenienceFeesCollected) * 0.08);
    const concessionRevenue = Math.round(ticketsSold * 220); // ~₹220 avg spend per fan
    const parkingRevenue = Math.round(ticketsSold * 45); // ~₹45 avg parking spend

    const totalMatchDayRevenue = grossTicketRevenue + convenienceFeesCollected + gstCollected + concessionRevenue + parkingRevenue;

    return {
      eventId,
      eventName,
      venueName,
      matchDate,
      totalSeats,
      ticketsSold,
      occupancyPercentage,
      grossTicketRevenue,
      convenienceFeesCollected,
      gstCollected,
      concessionRevenue,
      parkingRevenue,
      totalMatchDayRevenue
    };
  }

  public exportReportToCSV(report: MatchFinancialReport): string {
    const headers = [
      'Event ID',
      'Event Name',
      'Venue',
      'Date',
      'Tickets Sold',
      'Occupancy %',
      'Gross Ticket Sales (INR)',
      'Convenience Fees (INR)',
      'GST Tax (INR)',
      'Concession Sales (INR)',
      'Parking Sales (INR)',
      'Grand Total Revenue (INR)'
    ];

    const values = [
      report.eventId,
      `"${report.eventName}"`,
      `"${report.venueName}"`,
      report.matchDate,
      report.ticketsSold,
      `${report.occupancyPercentage}%`,
      report.grossTicketRevenue,
      report.convenienceFeesCollected,
      report.gstCollected,
      report.concessionRevenue,
      report.parkingRevenue,
      report.totalMatchDayRevenue
    ];

    return `${headers.join(',')}\n${values.join(',')}`;
  }
}

export const executiveReportGenerator = new ExecutiveReportGenerator();
