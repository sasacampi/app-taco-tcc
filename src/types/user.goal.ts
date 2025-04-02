type UserGoal = "loss" | "gain" | "maintenance";

interface UserProfile {
  weight: number; // kg
  height: number; // cm
  goal: UserGoal;
  activityLevel: number; // 1-5
}
