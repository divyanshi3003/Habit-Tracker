export const PRIORITY_COLUMNS = {
  DO: 1,
  SCHEDULE: 2,
  DELEGATE: 3,
  DELETE: 4,
} as const;

export const PRIORITY_LABELS: Record<number, { title: string; subtitle: string; color: string }> = {
  1: { title: "Do First", subtitle: "Urgent & Important", color: "text-rose-500" },
  2: { title: "Schedule", subtitle: "Not Urgent, but Important", color: "text-blue-500" },
  3: { title: "Delegate", subtitle: "Urgent, not Important", color: "text-amber-500" },
  4: { title: "Eliminate", subtitle: "Neither Urgent nor Important", color: "text-slate-500" },
};

export const HABIT_FREQUENCIES = ["DAILY", "WEEKLY", "CUSTOM"] as const;
