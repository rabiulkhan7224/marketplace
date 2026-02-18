'use client'

import { motion } from 'framer-motion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { containerVariants, itemVariants } from '@/lib/animations'
import { mockUsers } from '@/lib/constants'
import { roleColorClasses } from '@/lib/constants'

export function AdminPanel() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage users, projects, and system analytics</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Users</p>
          <p className="text-3xl font-bold text-foreground">{mockUsers.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Active Projects</p>
          <p className="text-3xl font-bold text-foreground">8</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Completed Tasks</p>
          <p className="text-3xl font-bold text-foreground">24</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Platform Revenue</p>
          <p className="text-3xl font-bold text-foreground">$12.5K</p>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">Recent Users</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => {
                const colors = roleColorClasses[user.role]
                return (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {user.name}
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={colors.badge}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Active</Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      </motion.div>
    </motion.div>
  )
}
