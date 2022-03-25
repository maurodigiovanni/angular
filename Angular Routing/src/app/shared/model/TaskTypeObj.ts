export interface TaskTypeObj {
  id: string;
  isDefault?: string;
  creationDate?: string;
  type?: string;
  subtype?: string;
  category?: string;
  description: string;
  estimatedEffort?: string;
  estimatedEffortUom?: string;
  currency?: string;
  internalTaskAssignment: Boolean;
  offerings?: Offerings[];
  inUse: string;
}

export interface Offerings {
  creationDate: string;
  name: string;
}

export interface TaskTypeResolved {
  taskType: TaskTypeObj;
  error?: any;
}
