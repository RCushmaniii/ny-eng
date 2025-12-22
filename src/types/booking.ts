export interface BookingRequest {
  name: string;
  email: string;
  date: string; // ISO string
  time: string;
  timezone: string;
  lang: "en" | "es";
}

export interface GoogleCalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{
    email: string;
    displayName?: string;
  }>;
  conferenceData?: {
    createRequest: {
      requestId: string;
      conferenceSolutionKey: {
        type: "hangoutsMeet";
      };
    };
  };
}

export interface BookingResponse {
  success: boolean;
  eventId?: string;
  meetLink?: string;
  error?: string;
}
