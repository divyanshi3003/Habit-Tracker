export type PriorityLevel = "HIGH" | "MEDIUM" | "LOW";

export interface HabitStreak {
  currentStreak: number;
  longestStreak: number;
  completionRate: number;
}

export interface DayProgress {
  date: string;
  completedTasks: number;
  completedHabits: number;
  focusedMinutes: number;
}
