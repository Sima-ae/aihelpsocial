import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createSuperAdmin() {
  console.log('🔐 Creating Super Admin user...')

  try {
    // Check if super admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'info@000-it.com' }
    })

    if (existingAdmin) {
      console.log('✅ Super Admin already exists')
      return
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('Admin123!', 12)

    // Create super admin user
    const superAdmin = await prisma.user.create({
      data: {
        email: 'info@000-it.com',
        password: hashedPassword,
        name: 'Super Admin',
        role: 'SUPER_ADMIN'
      }
    })

    console.log('✅ Super Admin created successfully!')
    console.log('📧 Email: info@000-it.com')
    console.log('🔑 Password: Admin123!')
    console.log('👤 Role: SUPER_ADMIN')

  } catch (error) {
    console.error('❌ Error creating Super Admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createSuperAdmin()
