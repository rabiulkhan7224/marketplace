export enum UserRole {
  ADMIN = 'ADMIN',
  BUYER = 'BUYER',
  SOLVER = 'SOLVER'
}

export interface User {
  id: string
  name: string
  role: UserRole
  email: string
  avatar?: string
}

export type RoleAccentColor = 'purple' | 'blue' | 'green'

export interface Project {
  id: string
  title: string
  description: string
  status: 'OPEN' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED'
  budget: number
  deadline: string
  assignedSolver?: string
}

export interface Task {
  id: string
  projectId: string
  title: string
  description: string
  status: 'IN_PROGRESS' | 'SUBMITTED' | 'COMPLETED'
  dueDate: string
}

export interface SolverRequest {
  id: string
  projectId: string
  solverId: string
  solverName: string
  proposedBudget: number
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  createdAt: string
}
