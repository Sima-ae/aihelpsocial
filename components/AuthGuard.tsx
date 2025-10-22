'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: 'CLIENT' | 'ADMIN' | 'SUPER_ADMIN'
  redirectTo?: string
}

export function AuthGuard({ children, requiredRole, redirectTo = '/auth/signin' }: AuthGuardProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading

    if (!session) {
      router.push(redirectTo)
      return
    }

    if (requiredRole) {
      const userRole = session.user.role
      
      // Role hierarchy: SUPER_ADMIN > ADMIN > CLIENT
      const roleHierarchy = {
        'CLIENT': 1,
        'ADMIN': 2,
        'SUPER_ADMIN': 3
      }

      const userRoleLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0
      const requiredRoleLevel = roleHierarchy[requiredRole]

      if (userRoleLevel < requiredRoleLevel) {
        router.push('/unauthorized')
        return
      }
    }
  }, [session, status, router, requiredRole, redirectTo])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect
  }

  if (requiredRole) {
    const userRole = session.user.role
    const roleHierarchy = {
      'CLIENT': 1,
      'ADMIN': 2,
      'SUPER_ADMIN': 3
    }

    const userRoleLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0
    const requiredRoleLevel = roleHierarchy[requiredRole]

    if (userRoleLevel < requiredRoleLevel) {
      return null // Will redirect
    }
  }

  return <>{children}</>
}
