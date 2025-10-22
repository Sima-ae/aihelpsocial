import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateUserRoles() {
  try {
    // First, let's check what users exist
    const allUsers = await prisma.user.findMany()
    console.log('Current users:', allUsers.map(u => ({ email: u.email, role: u.role })))

    // Since USER role no longer exists, we'll just ensure super admin exists

    // Verify the super admin user exists
    const superAdmin = await prisma.user.findUnique({
      where: {
        email: 'info@000-it.com'
      }
    })

    if (!superAdmin) {
      console.log('Creating super admin user...')
      await prisma.user.create({
        data: {
          email: 'info@000-it.com',
          password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/8QzK.2a', // Admin123!
          name: 'Super Admin',
          role: 'SUPER_ADMIN'
        }
      })
      console.log('Super admin user created')
    } else {
      console.log('Super admin user already exists')
    }

    console.log('User role update completed successfully')
  } catch (error) {
    console.error('Error updating user roles:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateUserRoles()
