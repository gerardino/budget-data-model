export enum OperationState {
  Automatic = 'a',
  Disabled = 'd',
  Pending = 'p',
  Estimated = 'e',
  Executed = 'x'
}

export default interface Operation {
  dayOfCycle: number;
  date?: Date;
  state: OperationState;
}
