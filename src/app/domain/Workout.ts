import {User} from "./User";
import {Coach} from "./Coach";

export class Workout {
  id?: number;
  userGymId?: User;
  coachId?: Coach;
  status?: string;
  description?: string;
  timeRegistration?: Date;
}
