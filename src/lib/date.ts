const monthYear = new Intl.DateTimeFormat('en-CA', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Formats an ISO month ("2025-10") as "October 2025". */
export function formatMonth(isoMonth: string) {
  return monthYear.format(new Date(`${isoMonth}-01T00:00:00Z`));
}
