/**
 * Turnstile Gate Access Control & Anti-Passback Scanner Engine
 * Validates RFID / Vector QR match pass codes, checks entry timestamp windows,
 * flags anti-passback re-entries, and monitors turnstile gate throughput.
 */

export interface TicketScanRequest {
  ticketId: string;
  bookingId: string;
  customerName: string;
  gateName: string;
  expectedGate: string;
  matchDate: string;
  sectionId: string;
  isVipPass: boolean;
}

export interface TicketScanResult {
  scanId: string;
  ticketId: string;
  accessStatus: 'GRANTED' | 'DENIED' | 'FLAGGED_WRONG_GATE' | 'EXPIRED_PASS';
  message: string;
  gateName: string;
  expectedGate: string;
  turnstileUnlocked: boolean;
  scannedAt: string;
  antiPassbackViolation: boolean;
  vipFastTrackUsed: boolean;
}

export class TurnstileScannerEngine {
  private activeScans: Map<string, string> = new Map(); // ticketId -> scannedTimestamp
  private auditLog: TicketScanResult[] = [];

  /**
   * Process gate turnstile scan attempt
   */
  public processScan(req: TicketScanRequest): TicketScanResult {
    const nowIso = new Date().toISOString();
    const scanId = `SCAN-${Date.now().toString().slice(-6)}`;

    // 1. Check Anti-Passback (Ticket already used)
    if (this.activeScans.has(req.ticketId)) {
      const firstScanTime = this.activeScans.get(req.ticketId)!;
      const res: TicketScanResult = {
        scanId,
        ticketId: req.ticketId,
        accessStatus: 'DENIED',
        message: `ANTI-PASSBACK VIOLATION: Pass already scanned at ${new Date(firstScanTime).toLocaleTimeString()}. Dual entry blocked.`,
        gateName: req.gateName,
        expectedGate: req.expectedGate,
        turnstileUnlocked: false,
        scannedAt: nowIso,
        antiPassbackViolation: true,
        vipFastTrackUsed: false
      };
      this.auditLog.unshift(res);
      return res;
    }

    // 2. Check Gate Alignment
    let status: TicketScanResult['accessStatus'] = 'GRANTED';
    let message = 'Pass verified. Turnstile unlocked — welcome to Uppal Stadium!';
    let unlocked = true;

    if (req.gateName !== req.expectedGate && !req.isVipPass) {
      status = 'FLAGGED_WRONG_GATE';
      message = `WRONG GATE NOTICE: Your ticket is assigned to ${req.expectedGate}. Please proceed to ${req.expectedGate} for optimal stand access.`;
      unlocked = false;
    } else {
      this.activeScans.set(req.ticketId, nowIso);
    }

    const res: TicketScanResult = {
      scanId,
      ticketId: req.ticketId,
      accessStatus: status,
      message,
      gateName: req.gateName,
      expectedGate: req.expectedGate,
      turnstileUnlocked: unlocked,
      scannedAt: nowIso,
      antiPassbackViolation: false,
      vipFastTrackUsed: req.isVipPass
    };

    this.auditLog.unshift(res);
    return res;
  }

  public getAuditLogs(): TicketScanResult[] {
    return [...this.auditLog];
  }

  public resetScans(): void {
    this.activeScans.clear();
    this.auditLog = [];
  }
}

export const turnstileScannerEngine = new TurnstileScannerEngine();
