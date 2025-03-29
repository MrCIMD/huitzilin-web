import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Action = {
  __typename?: 'Action';
  action: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  effect: ActionEffect;
  id: Scalars['ID']['output'];
  policyId: Scalars['String']['output'];
  route: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type ActionConnection = {
  __typename?: 'ActionConnection';
  /** Array of nodes. */
  nodes: Array<Action>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ActionDeleteResponse = {
  __typename?: 'ActionDeleteResponse';
  action?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  effect?: Maybe<ActionEffect>;
  id?: Maybe<Scalars['ID']['output']>;
  policyId?: Maybe<Scalars['String']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export enum ActionEffect {
  Allow = 'ALLOW',
  Deny = 'DENY'
}

export type ActionFilter = {
  action?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ActionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ActionFilter>>;
  policyId?: InputMaybe<StringFieldComparison>;
  route?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ActionSort = {
  direction: SortDirection;
  field: ActionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ActionSortFields {
  Action = 'action',
  CreatedAt = 'createdAt',
  Id = 'id',
  PolicyId = 'policyId',
  Route = 'route',
  UpdatedAt = 'updatedAt'
}

export type AddBranchsToStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type Branch = {
  __typename?: 'Branch';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type BranchConnection = {
  __typename?: 'BranchConnection';
  /** Array of nodes. */
  nodes: Array<Branch>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BranchDeleteResponse = {
  __typename?: 'BranchDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type BranchFilter = {
  and?: InputMaybe<Array<BranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BranchSort = {
  direction: SortDirection;
  field: BranchSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BranchSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Classroom = {
  __typename?: 'Classroom';
  branchId: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type ClassroomConnection = {
  __typename?: 'ClassroomConnection';
  /** Array of nodes. */
  nodes: Array<Classroom>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ClassroomDeleteResponse = {
  __typename?: 'ClassroomDeleteResponse';
  branchId?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type ClassroomFilter = {
  and?: InputMaybe<Array<ClassroomFilter>>;
  branchId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ClassroomFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ClassroomSort = {
  direction: SortDirection;
  field: ClassroomSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ClassroomSortFields {
  BranchId = 'branchId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Course = {
  __typename?: 'Course';
  branchId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  /** Array of nodes. */
  nodes: Array<Course>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CourseDeleteResponse = {
  __typename?: 'CourseDeleteResponse';
  branchId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type CourseFilter = {
  and?: InputMaybe<Array<CourseFilter>>;
  branchId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CourseFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CourseSort = {
  direction: SortDirection;
  field: CourseSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CourseSortFields {
  BranchId = 'branchId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CreateAction = {
  action: Scalars['String']['input'];
  effect: ActionEffect;
  policyId: Scalars['String']['input'];
  route: Scalars['String']['input'];
};

export type CreateBranch = {
  name: Scalars['String']['input'];
  picture: Scalars['String']['input'];
};

export type CreateClassroom = {
  branchId: Scalars['String']['input'];
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCourse = {
  branchId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCycle = {
  branchId: Scalars['String']['input'];
  end: Scalars['String']['input'];
  name: Scalars['String']['input'];
  start: Scalars['String']['input'];
};

export type CreateDebit = {
  description: Scalars['String']['input'];
  dueDate: Scalars['DateTime']['input'];
  enrollmentId: Scalars['String']['input'];
  frequency: Frequency;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  state: DebitState;
  value: Scalars['Float']['input'];
};

export type CreateEnrollment = {
  branchId: Scalars['String']['input'];
  classroomId: Scalars['String']['input'];
  courseId: Scalars['String']['input'];
  cycleId: Scalars['String']['input'];
  details: Scalars['String']['input'];
  state: EnrollmentState;
  studentId: Scalars['String']['input'];
};

export type CreateFee = {
  courseId: Scalars['String']['input'];
  frequency: Frequency;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateOneActionInput = {
  /** The record to create */
  action: CreateAction;
};

export type CreateOneBranchInput = {
  /** The record to create */
  branch: CreateBranch;
};

export type CreateOneClassroomInput = {
  /** The record to create */
  classroom: CreateClassroom;
};

export type CreateOneCourseInput = {
  /** The record to create */
  course: CreateCourse;
};

export type CreateOneCycleInput = {
  /** The record to create */
  cycle: CreateCycle;
};

export type CreateOneDebitInput = {
  /** The record to create */
  debit: CreateDebit;
};

export type CreateOneEnrollmentInput = {
  /** The record to create */
  enrollment: CreateEnrollment;
};

export type CreateOneFeeInput = {
  /** The record to create */
  fee: CreateFee;
};

export type CreateOnePolicyInput = {
  /** The record to create */
  policy: CreatePolicy;
};

export type CreateOneStudentInput = {
  /** The record to create */
  student: CreateStudent;
};

export type CreateOneTeacherInput = {
  /** The record to create */
  teacher: CreateTeacher;
};

export type CreateOneTutorInput = {
  /** The record to create */
  tutor: CreateTutor;
};

export type CreatePolicy = {
  branchId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateStudent = {
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTeacher = {
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTutor = {
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Cycle = {
  __typename?: 'Cycle';
  branchId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  end: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  start: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type CycleConnection = {
  __typename?: 'CycleConnection';
  /** Array of nodes. */
  nodes: Array<Cycle>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CycleDeleteResponse = {
  __typename?: 'CycleDeleteResponse';
  branchId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type CycleFilter = {
  and?: InputMaybe<Array<CycleFilter>>;
  branchId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CycleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CycleSort = {
  direction: SortDirection;
  field: CycleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CycleSortFields {
  BranchId = 'branchId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type Debit = {
  __typename?: 'Debit';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  dueDate: Scalars['DateTime']['output'];
  enrollmentId: Scalars['String']['output'];
  frequency: Frequency;
  id: Scalars['ID']['output'];
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  state: DebitState;
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  version: Scalars['Int']['output'];
};

export type DebitConnection = {
  __typename?: 'DebitConnection';
  /** Array of nodes. */
  nodes: Array<Debit>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DebitDeleteResponse = {
  __typename?: 'DebitDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  enrollmentId?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Frequency>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<DebitState>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type DebitFilter = {
  and?: InputMaybe<Array<DebitFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  enrollmentId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DebitFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DebitSort = {
  direction: SortDirection;
  field: DebitSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DebitSortFields {
  CreatedAt = 'createdAt',
  Description = 'description',
  EnrollmentId = 'enrollmentId',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export enum DebitState {
  Canceled = 'CANCELED',
  Condoned = 'CONDONED',
  Debt = 'DEBT',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID'
}

export type DeleteOneActionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneBranchInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneClassroomInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCourseInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCycleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneDebitInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneEnrollmentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneFeeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOnePolicyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneStudentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTeacherInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTutorInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  branch: Branch;
  branchId: Scalars['String']['output'];
  classroom: Classroom;
  classroomId: Scalars['String']['output'];
  course: Course;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cycle: Cycle;
  cycleId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  state: EnrollmentState;
  student: Student;
  studentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type EnrollmentConnection = {
  __typename?: 'EnrollmentConnection';
  /** Array of nodes. */
  nodes: Array<Enrollment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type EnrollmentDeleteResponse = {
  __typename?: 'EnrollmentDeleteResponse';
  branchId?: Maybe<Scalars['String']['output']>;
  classroomId?: Maybe<Scalars['String']['output']>;
  courseId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cycleId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<EnrollmentState>;
  studentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type EnrollmentFilter = {
  and?: InputMaybe<Array<EnrollmentFilter>>;
  branchId?: InputMaybe<StringFieldComparison>;
  classroomId?: InputMaybe<StringFieldComparison>;
  courseId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  cycleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EnrollmentFilter>>;
  studentId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EnrollmentSort = {
  direction: SortDirection;
  field: EnrollmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EnrollmentSortFields {
  BranchId = 'branchId',
  ClassroomId = 'classroomId',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  Id = 'id',
  StudentId = 'studentId',
  UpdatedAt = 'updatedAt'
}

export enum EnrollmentState {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Paused = 'PAUSED'
}

export type Fee = {
  __typename?: 'Fee';
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  frequency: Frequency;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type FeeConnection = {
  __typename?: 'FeeConnection';
  /** Array of nodes. */
  nodes: Array<Fee>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FeeDeleteResponse = {
  __typename?: 'FeeDeleteResponse';
  courseId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  frequency?: Maybe<Frequency>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type FeeFilter = {
  and?: InputMaybe<Array<FeeFilter>>;
  courseId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FeeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FeeSort = {
  direction: SortDirection;
  field: FeeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FeeSortFields {
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export enum Frequency {
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Monthly = 'MONTHLY',
  Single = 'SINGLE',
  Weekly = 'WEEKLY'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBranchsToStudent: Student;
  createOneAction: Action;
  createOneBranch: Branch;
  createOneClassroom: Classroom;
  createOneCourse: Course;
  createOneCycle: Cycle;
  createOneDebit: Debit;
  createOneEnrollment: Enrollment;
  createOneFee: Fee;
  createOnePolicy: Policy;
  createOneStudent: Student;
  createOneTeacher: Teacher;
  createOneTutor: Tutor;
  deleteOneAction: ActionDeleteResponse;
  deleteOneBranch: BranchDeleteResponse;
  deleteOneClassroom: ClassroomDeleteResponse;
  deleteOneCourse: CourseDeleteResponse;
  deleteOneCycle: CycleDeleteResponse;
  deleteOneDebit: DebitDeleteResponse;
  deleteOneEnrollment: EnrollmentDeleteResponse;
  deleteOneFee: FeeDeleteResponse;
  deleteOnePolicy: PolicyDeleteResponse;
  deleteOneStudent: StudentDeleteResponse;
  deleteOneTeacher: TeacherDeleteResponse;
  deleteOneTutor: TutorDeleteResponse;
  removeBranchsFromStudent: Student;
  removeUser: User;
  restoreManyVideos: UpdateManyResponse;
  restoreOneVideo: Tutor;
  setBranchsOnStudent: Student;
  signIn: Session;
  signUp: Session;
  updateOneAction: Action;
  updateOneBranch: Branch;
  updateOneClassroom: Classroom;
  updateOneCourse: Course;
  updateOneCycle: Cycle;
  updateOneDebit: Debit;
  updateOneEnrollment: Enrollment;
  updateOneFee: Fee;
  updateOnePolicy: Policy;
  updateOneStudent: Student;
  updateOneTeacher: Teacher;
  updateOneTutor: Tutor;
  updateUser: User;
};


export type MutationAddBranchsToStudentArgs = {
  input: AddBranchsToStudentInput;
};


export type MutationCreateOneActionArgs = {
  input: CreateOneActionInput;
};


export type MutationCreateOneBranchArgs = {
  input: CreateOneBranchInput;
};


export type MutationCreateOneClassroomArgs = {
  input: CreateOneClassroomInput;
};


export type MutationCreateOneCourseArgs = {
  input: CreateOneCourseInput;
};


export type MutationCreateOneCycleArgs = {
  input: CreateOneCycleInput;
};


export type MutationCreateOneDebitArgs = {
  input: CreateOneDebitInput;
};


export type MutationCreateOneEnrollmentArgs = {
  input: CreateOneEnrollmentInput;
};


export type MutationCreateOneFeeArgs = {
  input: CreateOneFeeInput;
};


export type MutationCreateOnePolicyArgs = {
  input: CreateOnePolicyInput;
};


export type MutationCreateOneStudentArgs = {
  input: CreateOneStudentInput;
};


export type MutationCreateOneTeacherArgs = {
  input: CreateOneTeacherInput;
};


export type MutationCreateOneTutorArgs = {
  input: CreateOneTutorInput;
};


export type MutationDeleteOneActionArgs = {
  input: DeleteOneActionInput;
};


export type MutationDeleteOneBranchArgs = {
  input: DeleteOneBranchInput;
};


export type MutationDeleteOneClassroomArgs = {
  input: DeleteOneClassroomInput;
};


export type MutationDeleteOneCourseArgs = {
  input: DeleteOneCourseInput;
};


export type MutationDeleteOneCycleArgs = {
  input: DeleteOneCycleInput;
};


export type MutationDeleteOneDebitArgs = {
  input: DeleteOneDebitInput;
};


export type MutationDeleteOneEnrollmentArgs = {
  input: DeleteOneEnrollmentInput;
};


export type MutationDeleteOneFeeArgs = {
  input: DeleteOneFeeInput;
};


export type MutationDeleteOnePolicyArgs = {
  input: DeleteOnePolicyInput;
};


export type MutationDeleteOneStudentArgs = {
  input: DeleteOneStudentInput;
};


export type MutationDeleteOneTeacherArgs = {
  input: DeleteOneTeacherInput;
};


export type MutationDeleteOneTutorArgs = {
  input: DeleteOneTutorInput;
};


export type MutationRemoveBranchsFromStudentArgs = {
  input: RemoveBranchsFromStudentInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRestoreManyVideosArgs = {
  input: TutorFilter;
};


export type MutationRestoreOneVideoArgs = {
  input: Scalars['ID']['input'];
};


export type MutationSetBranchsOnStudentArgs = {
  input: SetBranchsOnStudentInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateOneActionArgs = {
  input: UpdateOneActionInput;
};


export type MutationUpdateOneBranchArgs = {
  input: UpdateOneBranchInput;
};


export type MutationUpdateOneClassroomArgs = {
  input: UpdateOneClassroomInput;
};


export type MutationUpdateOneCourseArgs = {
  input: UpdateOneCourseInput;
};


export type MutationUpdateOneCycleArgs = {
  input: UpdateOneCycleInput;
};


export type MutationUpdateOneDebitArgs = {
  input: UpdateOneDebitInput;
};


export type MutationUpdateOneEnrollmentArgs = {
  input: UpdateOneEnrollmentInput;
};


export type MutationUpdateOneFeeArgs = {
  input: UpdateOneFeeInput;
};


export type MutationUpdateOnePolicyArgs = {
  input: UpdateOnePolicyInput;
};


export type MutationUpdateOneStudentArgs = {
  input: UpdateOneStudentInput;
};


export type MutationUpdateOneTeacherArgs = {
  input: UpdateOneTeacherInput;
};


export type MutationUpdateOneTutorArgs = {
  input: UpdateOneTutorInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUser;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Policy = {
  __typename?: 'Policy';
  branchId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Int']['output'];
};

export type PolicyConnection = {
  __typename?: 'PolicyConnection';
  /** Array of nodes. */
  nodes: Array<Policy>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PolicyDeleteResponse = {
  __typename?: 'PolicyDeleteResponse';
  branchId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type PolicyFilter = {
  and?: InputMaybe<Array<PolicyFilter>>;
  branchId?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PolicyFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PolicySort = {
  direction: SortDirection;
  field: PolicySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PolicySortFields {
  BranchId = 'branchId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Query = {
  __typename?: 'Query';
  action: Action;
  actions: ActionConnection;
  branch: Branch;
  branches: BranchConnection;
  classroom: Classroom;
  classrooms: ClassroomConnection;
  course: Course;
  courses: CourseConnection;
  cycle: Cycle;
  cycles: CycleConnection;
  debit: Debit;
  debits: DebitConnection;
  enrollment: Enrollment;
  enrollments: EnrollmentConnection;
  fee: Fee;
  fees: FeeConnection;
  policies: PolicyConnection;
  policy: Policy;
  student: Student;
  students: StudentConnection;
  teacher: Teacher;
  teachers: TeacherConnection;
  tutor: Tutor;
  tutors: TutorConnection;
};


export type QueryActionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryActionsArgs = {
  filter?: ActionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ActionSort>;
};


export type QueryBranchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBranchesArgs = {
  filter?: BranchFilter;
  paging?: OffsetPaging;
  sorting?: Array<BranchSort>;
};


export type QueryClassroomArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClassroomsArgs = {
  filter?: ClassroomFilter;
  paging?: OffsetPaging;
  sorting?: Array<ClassroomSort>;
};


export type QueryCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCoursesArgs = {
  filter?: CourseFilter;
  paging?: OffsetPaging;
  sorting?: Array<CourseSort>;
};


export type QueryCycleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCyclesArgs = {
  filter?: CycleFilter;
  paging?: OffsetPaging;
  sorting?: Array<CycleSort>;
};


export type QueryDebitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDebitsArgs = {
  filter?: DebitFilter;
  paging?: OffsetPaging;
  sorting?: Array<DebitSort>;
};


export type QueryEnrollmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEnrollmentsArgs = {
  filter?: EnrollmentFilter;
  paging?: OffsetPaging;
  sorting?: Array<EnrollmentSort>;
};


export type QueryFeeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeesArgs = {
  filter?: FeeFilter;
  paging?: OffsetPaging;
  sorting?: Array<FeeSort>;
};


export type QueryPoliciesArgs = {
  filter?: PolicyFilter;
  paging?: OffsetPaging;
  sorting?: Array<PolicySort>;
};


export type QueryPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStudentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStudentsArgs = {
  filter?: StudentFilter;
  paging?: OffsetPaging;
  sorting?: Array<StudentSort>;
};


export type QueryTeacherArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeachersArgs = {
  filter?: TeacherFilter;
  paging?: OffsetPaging;
  sorting?: Array<TeacherSort>;
};


export type QueryTutorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTutorsArgs = {
  filter?: TutorFilter;
  paging?: OffsetPaging;
  sorting?: Array<TutorSort>;
};

export type RemoveBranchsFromStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type Session = {
  __typename?: 'Session';
  exp: Scalars['DateTime']['output'];
  iat: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type SetBranchsOnStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SignInInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpInput = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  branchs: Array<Branch>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};


export type StudentBranchsArgs = {
  filter?: BranchFilter;
  sorting?: Array<BranchSort>;
};

export type StudentConnection = {
  __typename?: 'StudentConnection';
  /** Array of nodes. */
  nodes: Array<Student>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type StudentDeleteResponse = {
  __typename?: 'StudentDeleteResponse';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type StudentFilter = {
  and?: InputMaybe<Array<StudentFilter>>;
  branchs?: InputMaybe<StudentFilterBranchFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<StudentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StudentFilterBranchFilter = {
  and?: InputMaybe<Array<StudentFilterBranchFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentFilterBranchFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type StudentSort = {
  direction: SortDirection;
  field: StudentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StudentSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Fullname = 'fullname',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type Teacher = {
  __typename?: 'Teacher';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  version: Scalars['Int']['output'];
};

export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  /** Array of nodes. */
  nodes: Array<Teacher>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TeacherDeleteResponse = {
  __typename?: 'TeacherDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type TeacherFilter = {
  and?: InputMaybe<Array<TeacherFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TeacherFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TeacherSort = {
  direction: SortDirection;
  field: TeacherSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TeacherSortFields {
  CreatedAt = 'createdAt',
  Fullname = 'fullname',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type Tutor = {
  __typename?: 'Tutor';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type TutorConnection = {
  __typename?: 'TutorConnection';
  /** Array of nodes. */
  nodes: Array<Tutor>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TutorDeleteResponse = {
  __typename?: 'TutorDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type TutorFilter = {
  and?: InputMaybe<Array<TutorFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fullname?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TutorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type TutorSort = {
  direction: SortDirection;
  field: TutorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TutorSortFields {
  CreatedAt = 'createdAt',
  Fullname = 'fullname',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type UpdateAction = {
  action?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<ActionEffect>;
  policyId?: InputMaybe<Scalars['String']['input']>;
  route?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBranch = {
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClassroom = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourse = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCycle = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  end?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDebit = {
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  enrollmentId?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Frequency>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<DebitState>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateEnrollment = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  classroomId?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<EnrollmentState>;
  studentId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFee = {
  courseId?: InputMaybe<Scalars['String']['input']>;
  frequency?: InputMaybe<Frequency>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateOneActionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateAction;
};

export type UpdateOneBranchInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateBranch;
};

export type UpdateOneClassroomInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateClassroom;
};

export type UpdateOneCourseInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateCourse;
};

export type UpdateOneCycleInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateCycle;
};

export type UpdateOneDebitInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateDebit;
};

export type UpdateOneEnrollmentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateEnrollment;
};

export type UpdateOneFeeInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateFee;
};

export type UpdateOnePolicyInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdatePolicy;
};

export type UpdateOneStudentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateStudent;
};

export type UpdateOneTeacherInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateTeacher;
};

export type UpdateOneTutorInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateTutor;
};

export type UpdatePolicy = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStudent = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeacher = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTutor = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUser = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  branchId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type SessionPartsFragment = { __typename?: 'Session', token: string, username: string, exp: any, iat: any };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Session', token: string, username: string, exp: any, iat: any } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'Session', token: string, username: string, exp: any, iat: any } };

export type ClassroomPartsFragment = { __typename?: 'Classroom', id: string, name: string, color: string, createdAt: any, updatedAt: any };

export type CreateOneClassroomMutationVariables = Exact<{
  classroom: CreateClassroom;
}>;


export type CreateOneClassroomMutation = { __typename?: 'Mutation', createOneClassroom: { __typename?: 'Classroom', id: string, name: string, color: string, createdAt: any, updatedAt: any } };

export type GetClassroomsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<ClassroomFilter>;
}>;


export type GetClassroomsPageQuery = { __typename?: 'Query', classrooms: { __typename?: 'ClassroomConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Classroom', id: string, name: string, color: string, createdAt: any, updatedAt: any }> } };

export type UpdateOneClassroomMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateClassroom;
}>;


export type UpdateOneClassroomMutation = { __typename?: 'Mutation', updateOneClassroom: { __typename?: 'Classroom', id: string, name: string, color: string, createdAt: any, updatedAt: any } };

export type DeleteOneClassroomMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneClassroomMutation = { __typename?: 'Mutation', deleteOneClassroom: { __typename?: 'ClassroomDeleteResponse', id?: string | null } };

export type BranchPartsFragment = { __typename?: 'Branch', id: string, name: string, picture: string, createdAt: any, updatedAt: any };

export type CreateOneBranchMutationVariables = Exact<{
  branch: CreateBranch;
}>;


export type CreateOneBranchMutation = { __typename?: 'Mutation', createOneBranch: { __typename?: 'Branch', id: string, name: string, picture: string, createdAt: any, updatedAt: any } };

export type GetCompaniesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<BranchFilter>;
}>;


export type GetCompaniesPageQuery = { __typename?: 'Query', branches: { __typename?: 'BranchConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Branch', id: string, name: string, picture: string, createdAt: any, updatedAt: any }> } };

export type UpdateOneBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateBranch;
}>;


export type UpdateOneBranchMutation = { __typename?: 'Mutation', updateOneBranch: { __typename?: 'Branch', id: string, name: string, picture: string, createdAt: any, updatedAt: any } };

export type DeleteOneBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneBranchMutation = { __typename?: 'Mutation', deleteOneBranch: { __typename?: 'BranchDeleteResponse', id?: string | null } };

export type CoursePartsFragment = { __typename?: 'Course', id: string, name: string, createdAt: any, updatedAt: any };

export type CreateOneCourseMutationVariables = Exact<{
  course: CreateCourse;
}>;


export type CreateOneCourseMutation = { __typename?: 'Mutation', createOneCourse: { __typename?: 'Course', id: string, name: string, createdAt: any, updatedAt: any } };

export type GetCoursePageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CourseFilter>;
}>;


export type GetCoursePageQuery = { __typename?: 'Query', courses: { __typename?: 'CourseConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Course', id: string, name: string, createdAt: any, updatedAt: any }> } };

export type UpdateOneCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateCourse;
}>;


export type UpdateOneCourseMutation = { __typename?: 'Mutation', updateOneCourse: { __typename?: 'Course', id: string, name: string, createdAt: any, updatedAt: any } };

export type DeleteOneCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneCourseMutation = { __typename?: 'Mutation', deleteOneCourse: { __typename?: 'CourseDeleteResponse', id?: string | null } };

export type CyclePartsFragment = { __typename?: 'Cycle', id: string, name: string, start: string, end: string, createdAt: any, updatedAt: any };

export type CreateOneCycleMutationVariables = Exact<{
  cycle: CreateCycle;
}>;


export type CreateOneCycleMutation = { __typename?: 'Mutation', createOneCycle: { __typename?: 'Cycle', id: string, name: string, start: string, end: string, createdAt: any, updatedAt: any } };

export type GetCyclesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CycleFilter>;
}>;


export type GetCyclesPageQuery = { __typename?: 'Query', cycles: { __typename?: 'CycleConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Cycle', id: string, name: string, start: string, end: string, createdAt: any, updatedAt: any }> } };

export type UpdateOneCycleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateCycle;
}>;


export type UpdateOneCycleMutation = { __typename?: 'Mutation', updateOneCycle: { __typename?: 'Cycle', id: string, name: string, start: string, end: string, createdAt: any, updatedAt: any } };

export type DeleteOneCycleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneCycleMutation = { __typename?: 'Mutation', deleteOneCycle: { __typename?: 'CycleDeleteResponse', id?: string | null } };

export type DebitPartsFragment = { __typename?: 'Debit', id: string, description: string, value: number, state: DebitState, frequency: Frequency, dueDate: any, paymentDate?: any | null, createdAt: any, updatedAt: any };

export type CreateOneDebitMutationVariables = Exact<{
  debit: CreateDebit;
}>;


export type CreateOneDebitMutation = { __typename?: 'Mutation', createOneDebit: { __typename?: 'Debit', id: string, description: string, value: number, state: DebitState, frequency: Frequency, dueDate: any, paymentDate?: any | null, createdAt: any, updatedAt: any } };

export type GetDebitsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<DebitFilter>;
}>;


export type GetDebitsPageQuery = { __typename?: 'Query', debits: { __typename?: 'DebitConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Debit', id: string, description: string, value: number, state: DebitState, frequency: Frequency, dueDate: any, paymentDate?: any | null, createdAt: any, updatedAt: any }> } };

export type UpdateOneDebitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateDebit;
}>;


export type UpdateOneDebitMutation = { __typename?: 'Mutation', updateOneDebit: { __typename?: 'Debit', id: string, description: string, value: number, state: DebitState, frequency: Frequency, dueDate: any, paymentDate?: any | null, createdAt: any, updatedAt: any } };

export type DeleteOneDebitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneDebitMutation = { __typename?: 'Mutation', deleteOneDebit: { __typename?: 'DebitDeleteResponse', id?: string | null } };

export type EnrollmentPartsFragment = { __typename?: 'Enrollment', id: string, details: string, state: EnrollmentState, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string }, cycle: { __typename?: 'Cycle', id: string, name: string }, student: { __typename?: 'Student', id: string, picture: string, fullname: string, code: string }, classroom: { __typename?: 'Classroom', id: string, name: string, color: string } };

export type CreateOneEnrollmentMutationVariables = Exact<{
  enrollment: CreateEnrollment;
}>;


export type CreateOneEnrollmentMutation = { __typename?: 'Mutation', createOneEnrollment: { __typename?: 'Enrollment', id: string, details: string, state: EnrollmentState, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string }, cycle: { __typename?: 'Cycle', id: string, name: string }, student: { __typename?: 'Student', id: string, picture: string, fullname: string, code: string }, classroom: { __typename?: 'Classroom', id: string, name: string, color: string } } };

export type GetEnrollmentsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<EnrollmentFilter>;
}>;


export type GetEnrollmentsPageQuery = { __typename?: 'Query', enrollments: { __typename?: 'EnrollmentConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Enrollment', id: string, details: string, state: EnrollmentState, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string }, cycle: { __typename?: 'Cycle', id: string, name: string }, student: { __typename?: 'Student', id: string, picture: string, fullname: string, code: string }, classroom: { __typename?: 'Classroom', id: string, name: string, color: string } }> } };

export type UpdateOneEnrollmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateEnrollment;
}>;


export type UpdateOneEnrollmentMutation = { __typename?: 'Mutation', updateOneEnrollment: { __typename?: 'Enrollment', id: string, details: string, state: EnrollmentState, createdAt: any, updatedAt: any, course: { __typename?: 'Course', id: string, name: string }, cycle: { __typename?: 'Cycle', id: string, name: string }, student: { __typename?: 'Student', id: string, picture: string, fullname: string, code: string }, classroom: { __typename?: 'Classroom', id: string, name: string, color: string } } };

export type DeleteOneEnrollmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneEnrollmentMutation = { __typename?: 'Mutation', deleteOneEnrollment: { __typename?: 'EnrollmentDeleteResponse', id?: string | null } };

export type FeePartsFragment = { __typename?: 'Fee', id: string, name: string, price: number, frequency: Frequency, createdAt: any, updatedAt: any };

export type CreateOneFeeMutationVariables = Exact<{
  fee: CreateFee;
}>;


export type CreateOneFeeMutation = { __typename?: 'Mutation', createOneFee: { __typename?: 'Fee', id: string, name: string, price: number, frequency: Frequency, createdAt: any, updatedAt: any } };

export type GetFeePageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<FeeFilter>;
}>;


export type GetFeePageQuery = { __typename?: 'Query', fees: { __typename?: 'FeeConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Fee', id: string, name: string, price: number, frequency: Frequency, createdAt: any, updatedAt: any }> } };

export type UpdateOneFeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateFee;
}>;


export type UpdateOneFeeMutation = { __typename?: 'Mutation', updateOneFee: { __typename?: 'Fee', id: string, name: string, price: number, frequency: Frequency, createdAt: any, updatedAt: any } };

export type DeleteOneFeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneFeeMutation = { __typename?: 'Mutation', deleteOneFee: { __typename?: 'FeeDeleteResponse', id?: string | null } };

export type StudentPartsFragment = { __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any };

export type CreateOneStudentMutationVariables = Exact<{
  student: CreateStudent;
}>;


export type CreateOneStudentMutation = { __typename?: 'Mutation', createOneStudent: { __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any } };

export type GetStudentsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<StudentFilter>;
}>;


export type GetStudentsPageQuery = { __typename?: 'Query', students: { __typename?: 'StudentConnection', totalCount: number, pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any }> } };

export type UpdateOneStudentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateStudent;
}>;


export type UpdateOneStudentMutation = { __typename?: 'Mutation', updateOneStudent: { __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any } };

export type DeleteOneStudentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOneStudentMutation = { __typename?: 'Mutation', deleteOneStudent: { __typename?: 'StudentDeleteResponse', id?: string | null } };

export type AddBranchsToStudentMutationVariables = Exact<{
  studentId: Scalars['ID']['input'];
  branchIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type AddBranchsToStudentMutation = { __typename?: 'Mutation', addBranchsToStudent: { __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any } };

export type RemoveBranchsFromStudentMutationVariables = Exact<{
  studentId: Scalars['ID']['input'];
  branchIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type RemoveBranchsFromStudentMutation = { __typename?: 'Mutation', removeBranchsFromStudent: { __typename?: 'Student', id: string, code: string, picture: string, fullname: string, firstname: string, lastname: string, createdAt: any, updatedAt: any } };

export const SessionPartsFragmentDoc = gql`
    fragment SessionParts on Session {
  token
  username
  exp
  iat
}
    `;
export const ClassroomPartsFragmentDoc = gql`
    fragment ClassroomParts on Classroom {
  id
  name
  color
  createdAt
  updatedAt
}
    `;
export const BranchPartsFragmentDoc = gql`
    fragment BranchParts on Branch {
  id
  name
  picture
  createdAt
  updatedAt
}
    `;
export const CoursePartsFragmentDoc = gql`
    fragment CourseParts on Course {
  id
  name
  createdAt
  updatedAt
}
    `;
export const CyclePartsFragmentDoc = gql`
    fragment CycleParts on Cycle {
  id
  name
  start
  end
  createdAt
  updatedAt
}
    `;
export const DebitPartsFragmentDoc = gql`
    fragment DebitParts on Debit {
  id
  description
  value
  state
  frequency
  dueDate
  paymentDate
  createdAt
  updatedAt
}
    `;
export const EnrollmentPartsFragmentDoc = gql`
    fragment EnrollmentParts on Enrollment {
  id
  details
  state
  course {
    id
    name
  }
  cycle {
    id
    name
  }
  student {
    id
    picture
    fullname
    code
  }
  classroom {
    id
    name
    color
  }
  createdAt
  updatedAt
}
    `;
export const FeePartsFragmentDoc = gql`
    fragment FeeParts on Fee {
  id
  name
  price
  frequency
  createdAt
  updatedAt
}
    `;
export const StudentPartsFragmentDoc = gql`
    fragment StudentParts on Student {
  id
  code
  picture
  fullname
  firstname
  lastname
  createdAt
  updatedAt
}
    `;
export const SignInDocument = gql`
    mutation signIn($input: SignInInput!) {
  signIn(input: $input) {
    ...SessionParts
  }
}
    ${SessionPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SignInGQL extends Apollo.Mutation<SignInMutation, SignInMutationVariables> {
    document = SignInDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = gql`
    mutation signUp($input: SignUpInput!) {
  signUp(input: $input) {
    ...SessionParts
  }
}
    ${SessionPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneClassroomDocument = gql`
    mutation createOneClassroom($classroom: CreateClassroom!) {
  createOneClassroom(input: {classroom: $classroom}) {
    ...ClassroomParts
  }
}
    ${ClassroomPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneClassroomGQL extends Apollo.Mutation<CreateOneClassroomMutation, CreateOneClassroomMutationVariables> {
    document = CreateOneClassroomDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetClassroomsPageDocument = gql`
    query getClassroomsPage($offset: Int = 0, $limit: Int = 10, $filter: ClassroomFilter = {}) {
  classrooms(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...ClassroomParts
    }
  }
}
    ${ClassroomPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetClassroomsPageGQL extends Apollo.Query<GetClassroomsPageQuery, GetClassroomsPageQueryVariables> {
    document = GetClassroomsPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneClassroomDocument = gql`
    mutation updateOneClassroom($id: ID!, $update: UpdateClassroom!) {
  updateOneClassroom(input: {id: $id, update: $update}) {
    ...ClassroomParts
  }
}
    ${ClassroomPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneClassroomGQL extends Apollo.Mutation<UpdateOneClassroomMutation, UpdateOneClassroomMutationVariables> {
    document = UpdateOneClassroomDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneClassroomDocument = gql`
    mutation deleteOneClassroom($id: ID!) {
  deleteOneClassroom(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneClassroomGQL extends Apollo.Mutation<DeleteOneClassroomMutation, DeleteOneClassroomMutationVariables> {
    document = DeleteOneClassroomDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneBranchDocument = gql`
    mutation createOneBranch($branch: CreateBranch!) {
  createOneBranch(input: {branch: $branch}) {
    ...BranchParts
  }
}
    ${BranchPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneBranchGQL extends Apollo.Mutation<CreateOneBranchMutation, CreateOneBranchMutationVariables> {
    document = CreateOneBranchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCompaniesPageDocument = gql`
    query getCompaniesPage($offset: Int = 0, $limit: Int = 10, $filter: BranchFilter = {}) {
  branches(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...BranchParts
    }
  }
}
    ${BranchPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCompaniesPageGQL extends Apollo.Query<GetCompaniesPageQuery, GetCompaniesPageQueryVariables> {
    document = GetCompaniesPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneBranchDocument = gql`
    mutation updateOneBranch($id: ID!, $update: UpdateBranch!) {
  updateOneBranch(input: {id: $id, update: $update}) {
    ...BranchParts
  }
}
    ${BranchPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneBranchGQL extends Apollo.Mutation<UpdateOneBranchMutation, UpdateOneBranchMutationVariables> {
    document = UpdateOneBranchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneBranchDocument = gql`
    mutation deleteOneBranch($id: ID!) {
  deleteOneBranch(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneBranchGQL extends Apollo.Mutation<DeleteOneBranchMutation, DeleteOneBranchMutationVariables> {
    document = DeleteOneBranchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneCourseDocument = gql`
    mutation createOneCourse($course: CreateCourse!) {
  createOneCourse(input: {course: $course}) {
    ...CourseParts
  }
}
    ${CoursePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneCourseGQL extends Apollo.Mutation<CreateOneCourseMutation, CreateOneCourseMutationVariables> {
    document = CreateOneCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCoursePageDocument = gql`
    query getCoursePage($offset: Int = 0, $limit: Int = 10, $filter: CourseFilter = {}) {
  courses(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...CourseParts
    }
  }
}
    ${CoursePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCoursePageGQL extends Apollo.Query<GetCoursePageQuery, GetCoursePageQueryVariables> {
    document = GetCoursePageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneCourseDocument = gql`
    mutation updateOneCourse($id: ID!, $update: UpdateCourse!) {
  updateOneCourse(input: {id: $id, update: $update}) {
    ...CourseParts
  }
}
    ${CoursePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneCourseGQL extends Apollo.Mutation<UpdateOneCourseMutation, UpdateOneCourseMutationVariables> {
    document = UpdateOneCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneCourseDocument = gql`
    mutation deleteOneCourse($id: ID!) {
  deleteOneCourse(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneCourseGQL extends Apollo.Mutation<DeleteOneCourseMutation, DeleteOneCourseMutationVariables> {
    document = DeleteOneCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneCycleDocument = gql`
    mutation createOneCycle($cycle: CreateCycle!) {
  createOneCycle(input: {cycle: $cycle}) {
    ...CycleParts
  }
}
    ${CyclePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneCycleGQL extends Apollo.Mutation<CreateOneCycleMutation, CreateOneCycleMutationVariables> {
    document = CreateOneCycleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCyclesPageDocument = gql`
    query getCyclesPage($offset: Int = 0, $limit: Int = 10, $filter: CycleFilter = {}) {
  cycles(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...CycleParts
    }
  }
}
    ${CyclePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCyclesPageGQL extends Apollo.Query<GetCyclesPageQuery, GetCyclesPageQueryVariables> {
    document = GetCyclesPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneCycleDocument = gql`
    mutation updateOneCycle($id: ID!, $update: UpdateCycle!) {
  updateOneCycle(input: {id: $id, update: $update}) {
    ...CycleParts
  }
}
    ${CyclePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneCycleGQL extends Apollo.Mutation<UpdateOneCycleMutation, UpdateOneCycleMutationVariables> {
    document = UpdateOneCycleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneCycleDocument = gql`
    mutation deleteOneCycle($id: ID!) {
  deleteOneCycle(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneCycleGQL extends Apollo.Mutation<DeleteOneCycleMutation, DeleteOneCycleMutationVariables> {
    document = DeleteOneCycleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneDebitDocument = gql`
    mutation createOneDebit($debit: CreateDebit!) {
  createOneDebit(input: {debit: $debit}) {
    ...DebitParts
  }
}
    ${DebitPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneDebitGQL extends Apollo.Mutation<CreateOneDebitMutation, CreateOneDebitMutationVariables> {
    document = CreateOneDebitDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDebitsPageDocument = gql`
    query getDebitsPage($offset: Int = 0, $limit: Int = 10, $filter: DebitFilter = {}) {
  debits(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...DebitParts
    }
  }
}
    ${DebitPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDebitsPageGQL extends Apollo.Query<GetDebitsPageQuery, GetDebitsPageQueryVariables> {
    document = GetDebitsPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneDebitDocument = gql`
    mutation updateOneDebit($id: ID!, $update: UpdateDebit!) {
  updateOneDebit(input: {id: $id, update: $update}) {
    ...DebitParts
  }
}
    ${DebitPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneDebitGQL extends Apollo.Mutation<UpdateOneDebitMutation, UpdateOneDebitMutationVariables> {
    document = UpdateOneDebitDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneDebitDocument = gql`
    mutation deleteOneDebit($id: ID!) {
  deleteOneDebit(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneDebitGQL extends Apollo.Mutation<DeleteOneDebitMutation, DeleteOneDebitMutationVariables> {
    document = DeleteOneDebitDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneEnrollmentDocument = gql`
    mutation createOneEnrollment($enrollment: CreateEnrollment!) {
  createOneEnrollment(input: {enrollment: $enrollment}) {
    ...EnrollmentParts
  }
}
    ${EnrollmentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneEnrollmentGQL extends Apollo.Mutation<CreateOneEnrollmentMutation, CreateOneEnrollmentMutationVariables> {
    document = CreateOneEnrollmentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEnrollmentsPageDocument = gql`
    query getEnrollmentsPage($offset: Int = 0, $limit: Int = 10, $filter: EnrollmentFilter = {}) {
  enrollments(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...EnrollmentParts
    }
  }
}
    ${EnrollmentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEnrollmentsPageGQL extends Apollo.Query<GetEnrollmentsPageQuery, GetEnrollmentsPageQueryVariables> {
    document = GetEnrollmentsPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneEnrollmentDocument = gql`
    mutation updateOneEnrollment($id: ID!, $update: UpdateEnrollment!) {
  updateOneEnrollment(input: {id: $id, update: $update}) {
    ...EnrollmentParts
  }
}
    ${EnrollmentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneEnrollmentGQL extends Apollo.Mutation<UpdateOneEnrollmentMutation, UpdateOneEnrollmentMutationVariables> {
    document = UpdateOneEnrollmentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneEnrollmentDocument = gql`
    mutation deleteOneEnrollment($id: ID!) {
  deleteOneEnrollment(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneEnrollmentGQL extends Apollo.Mutation<DeleteOneEnrollmentMutation, DeleteOneEnrollmentMutationVariables> {
    document = DeleteOneEnrollmentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneFeeDocument = gql`
    mutation createOneFee($fee: CreateFee!) {
  createOneFee(input: {fee: $fee}) {
    ...FeeParts
  }
}
    ${FeePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneFeeGQL extends Apollo.Mutation<CreateOneFeeMutation, CreateOneFeeMutationVariables> {
    document = CreateOneFeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFeePageDocument = gql`
    query getFeePage($offset: Int = 0, $limit: Int = 10, $filter: FeeFilter = {}) {
  fees(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...FeeParts
    }
  }
}
    ${FeePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFeePageGQL extends Apollo.Query<GetFeePageQuery, GetFeePageQueryVariables> {
    document = GetFeePageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneFeeDocument = gql`
    mutation updateOneFee($id: ID!, $update: UpdateFee!) {
  updateOneFee(input: {id: $id, update: $update}) {
    ...FeeParts
  }
}
    ${FeePartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneFeeGQL extends Apollo.Mutation<UpdateOneFeeMutation, UpdateOneFeeMutationVariables> {
    document = UpdateOneFeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneFeeDocument = gql`
    mutation deleteOneFee($id: ID!) {
  deleteOneFee(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneFeeGQL extends Apollo.Mutation<DeleteOneFeeMutation, DeleteOneFeeMutationVariables> {
    document = DeleteOneFeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneStudentDocument = gql`
    mutation createOneStudent($student: CreateStudent!) {
  createOneStudent(input: {student: $student}) {
    ...StudentParts
  }
}
    ${StudentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneStudentGQL extends Apollo.Mutation<CreateOneStudentMutation, CreateOneStudentMutationVariables> {
    document = CreateOneStudentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetStudentsPageDocument = gql`
    query getStudentsPage($offset: Int = 0, $limit: Int = 10, $filter: StudentFilter = {}) {
  students(paging: {limit: $limit, offset: $offset}, filter: $filter) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      ...StudentParts
    }
  }
}
    ${StudentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStudentsPageGQL extends Apollo.Query<GetStudentsPageQuery, GetStudentsPageQueryVariables> {
    document = GetStudentsPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOneStudentDocument = gql`
    mutation updateOneStudent($id: ID!, $update: UpdateStudent!) {
  updateOneStudent(input: {id: $id, update: $update}) {
    ...StudentParts
  }
}
    ${StudentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneStudentGQL extends Apollo.Mutation<UpdateOneStudentMutation, UpdateOneStudentMutationVariables> {
    document = UpdateOneStudentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneStudentDocument = gql`
    mutation deleteOneStudent($id: ID!) {
  deleteOneStudent(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneStudentGQL extends Apollo.Mutation<DeleteOneStudentMutation, DeleteOneStudentMutationVariables> {
    document = DeleteOneStudentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddBranchsToStudentDocument = gql`
    mutation addBranchsToStudent($studentId: ID!, $branchIds: [ID!]!) {
  addBranchsToStudent(input: {id: $studentId, relationIds: $branchIds}) {
    ...StudentParts
  }
}
    ${StudentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBranchsToStudentGQL extends Apollo.Mutation<AddBranchsToStudentMutation, AddBranchsToStudentMutationVariables> {
    document = AddBranchsToStudentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveBranchsFromStudentDocument = gql`
    mutation removeBranchsFromStudent($studentId: ID!, $branchIds: [ID!]!) {
  removeBranchsFromStudent(input: {id: $studentId, relationIds: $branchIds}) {
    ...StudentParts
  }
}
    ${StudentPartsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveBranchsFromStudentGQL extends Apollo.Mutation<RemoveBranchsFromStudentMutation, RemoveBranchsFromStudentMutationVariables> {
    document = RemoveBranchsFromStudentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }