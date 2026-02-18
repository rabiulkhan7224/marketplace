import { User, UserRole, Project, Task, SolverRequest, RoleAccentColor } from './types'

export const mockUser: User = {
  id: 'user-1',
  name: 'Demo User',
  role: UserRole.ADMIN,
  email: 'demo@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo'
}

export const roleAccentColors: Record<UserRole, RoleAccentColor> = {
  [UserRole.ADMIN]: 'purple',
  [UserRole.BUYER]: 'blue',
  [UserRole.SOLVER]: 'green'
}

export const roleColorClasses: Record<UserRole, { bg: string; text: string; badge: string }> = {
  [UserRole.ADMIN]: {
    bg: 'bg-purple-50 dark:bg-purple-950',
    text: 'text-purple-700 dark:text-purple-300',
    badge: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
  },
  [UserRole.BUYER]: {
    bg: 'bg-blue-50 dark:bg-blue-950',
    text: 'text-blue-700 dark:text-blue-300',
    badge: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
  },
  [UserRole.SOLVER]: {
    bg: 'bg-emerald-50 dark:bg-emerald-950',
    text: 'text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300'
  }
}

export const mockUsers: User[] = [
  { id: 'admin-1', name: 'Sarah Admin', role: UserRole.ADMIN, email: 'sarah@example.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 'buyer-1', name: 'John Buyer', role: UserRole.BUYER, email: 'john@example.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
  { id: 'solver-1', name: 'Alex Solver', role: UserRole.SOLVER, email: 'alex@example.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: 'buyer-2', name: 'Emma Buyer', role: UserRole.BUYER, email: 'emma@example.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' },
  { id: 'solver-2', name: 'Mike Solver', role: UserRole.SOLVER, email: 'mike@example.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' }
]

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-commerce Website Redesign',
    description: 'Modern redesign of our e-commerce platform',
    status: 'IN_PROGRESS',
    budget: 5000,
    deadline: '2025-03-15',
    assignedSolver: 'solver-1'
  },
  {
    id: 'proj-2',
    title: 'Mobile App Development',
    description: 'Native iOS and Android app',
    status: 'ASSIGNED',
    budget: 8000,
    deadline: '2025-04-20',
    assignedSolver: 'solver-2'
  },
  {
    id: 'proj-3',
    title: 'API Integration Services',
    description: 'Third-party API integrations',
    status: 'OPEN',
    budget: 3000,
    deadline: '2025-02-28'
  },
  {
    id: 'proj-4',
    title: 'Database Optimization',
    description: 'Performance tuning and optimization',
    status: 'COMPLETED',
    budget: 2500,
    deadline: '2025-01-15',
    assignedSolver: 'solver-1'
  },
  {
    id: 'proj-5',
    title: 'UI/UX Redesign',
    description: 'Complete redesign of user interface and experience',
    status: 'OPEN',
    budget: 4500,
    deadline: '2025-03-30'
  },
  {
    id: 'proj-6',
    title: 'Cloud Infrastructure Setup',
    description: 'AWS cloud infrastructure deployment and configuration',
    status: 'IN_PROGRESS',
    budget: 6000,
    deadline: '2025-03-01',
    assignedSolver: 'solver-2'
  },
  {
    id: 'proj-7',
    title: 'SEO Optimization',
    description: 'Website SEO optimization and performance improvement',
    status: 'OPEN',
    budget: 1800,
    deadline: '2025-02-20'
  }
]

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    projectId: 'proj-1',
    title: 'Homepage Design',
    description: 'Create new homepage design mockups',
    status: 'IN_PROGRESS',
    dueDate: '2025-02-28'
  },
  {
    id: 'task-2',
    projectId: 'proj-1',
    title: 'Product Page Implementation',
    description: 'Implement product page components',
    status: 'SUBMITTED',
    dueDate: '2025-03-07'
  },
  {
    id: 'task-3',
    projectId: 'proj-2',
    title: 'User Authentication',
    description: 'Implement login and registration',
    status: 'IN_PROGRESS',
    dueDate: '2025-03-15'
  },
  {
    id: 'task-4',
    projectId: 'proj-2',
    title: 'Push Notifications',
    description: 'Setup push notification service',
    status: 'COMPLETED',
    dueDate: '2025-02-20'
  },
  {
    id: 'task-5',
    projectId: 'proj-6',
    title: 'VPC Configuration',
    description: 'Setup Virtual Private Cloud',
    status: 'IN_PROGRESS',
    dueDate: '2025-02-25'
  },
  {
    id: 'task-6',
    projectId: 'proj-6',
    title: 'RDS Setup',
    description: 'Configure database instances',
    status: 'COMPLETED',
    dueDate: '2025-02-15'
  }
]

export const mockSolverRequests: SolverRequest[] = [
  {
    id: 'req-1',
    projectId: 'proj-3',
    solverId: 'solver-1',
    solverName: 'Alex Solver',
    proposedBudget: 2800,
    status: 'PENDING',
    createdAt: '2025-02-15'
  },
  {
    id: 'req-2',
    projectId: 'proj-3',
    solverId: 'solver-2',
    solverName: 'Mike Solver',
    proposedBudget: 3200,
    status: 'PENDING',
    createdAt: '2025-02-14'
  }
]

export const adminMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { id: 'users', label: 'Users', icon: 'Users' },
  { id: 'projects', label: 'Projects', icon: 'Briefcase' },
  { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
  { id: 'settings', label: 'Settings', icon: 'Settings' }
]

export const buyerMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { id: 'projects', label: 'My Projects', icon: 'Briefcase' },
  { id: 'solvers', label: 'Solver Requests', icon: 'Users' },
  { id: 'messages', label: 'Messages', icon: 'MessageSquare' },
  { id: 'profile', label: 'Profile', icon: 'User' }
]

export const solverMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { id: 'projects', label: 'Available Projects', icon: 'Briefcase' },
  { id: 'tasks', label: 'My Tasks', icon: 'CheckSquare' },
  { id: 'earnings', label: 'Earnings', icon: 'DollarSign' },
  { id: 'profile', label: 'Profile', icon: 'User' }
]
