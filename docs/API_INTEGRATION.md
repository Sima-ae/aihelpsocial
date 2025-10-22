# Meta API Integration Guide

This guide provides step-by-step instructions for integrating the Meta Marketing Training Platform with Meta's official APIs.

## 🔑 Prerequisites

Before integrating with Meta APIs, you'll need:

1. **Facebook Developer Account**: Create at [developers.facebook.com](https://developers.facebook.com)
2. **Meta Business Account**: Set up at [business.facebook.com](https://business.facebook.com)
3. **App Registration**: Register your application with Meta
4. **API Access**: Request access to required APIs

## 📋 Required API Access

### Facebook Marketing API
- **Campaign Management**: Create, read, update, delete campaigns
- **Ad Management**: Manage ad sets and ads
- **Audience Management**: Create and manage custom audiences
- **Insights**: Access performance data and analytics

### Facebook Graph API
- **Page Management**: Manage Facebook pages
- **Content Publishing**: Post content to pages
- **User Insights**: Access user engagement data

### Instagram Basic Display API
- **Media Access**: Retrieve Instagram media
- **User Information**: Access basic user profile data
- **Insights**: Access media performance metrics

### WhatsApp Business API
- **Message Sending**: Send text, media, and interactive messages
- **Template Management**: Manage message templates
- **Webhook Integration**: Receive message status updates

### Messenger Platform API
- **Message Sending**: Send messages to users
- **Webhook Integration**: Receive messages and postbacks
- **User Profile**: Access user profile information

## 🚀 Setup Instructions

### 1. Facebook App Setup

1. **Create Facebook App**
   ```bash
   # Navigate to Facebook Developers
   # Create new app > Business > Next
   # Fill in app details
   ```

2. **Add Products**
   - Facebook Login
   - Marketing API
   - Instagram Basic Display
   - WhatsApp Business API
   - Messenger Platform

3. **Configure App Settings**
   ```javascript
   // App ID and Secret
   const APP_ID = 'your-app-id'
   const APP_SECRET = 'your-app-secret'
   ```

### 2. Environment Configuration

Create `.env.local` with your API credentials:

```bash
# Facebook Marketing API
FACEBOOK_APP_ID=your-app-id
FACEBOOK_APP_SECRET=your-app-secret
FACEBOOK_ACCESS_TOKEN=your-access-token
FACEBOOK_API_VERSION=v18.0

# Instagram Basic Display API
INSTAGRAM_ACCESS_TOKEN=your-instagram-token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your-business-account-id

# WhatsApp Business API
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
WHATSAPP_ACCESS_TOKEN=your-whatsapp-token
WHATSAPP_BUSINESS_ACCOUNT_ID=your-business-account-id

# Messenger Platform API
MESSENGER_APP_ID=your-messenger-app-id
MESSENGER_APP_SECRET=your-messenger-app-secret
MESSENGER_ACCESS_TOKEN=your-messenger-token
MESSENGER_VERIFY_TOKEN=your-verify-token
```

### 3. API Client Implementation

```typescript
// lib/meta-api-client.ts
import { MetaAPIClient, MetaAPIConfig } from './meta-api'

const config: MetaAPIConfig = {
  facebook: {
    appId: process.env.FACEBOOK_APP_ID!,
    appSecret: process.env.FACEBOOK_APP_SECRET!,
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN!,
    apiVersion: process.env.FACEBOOK_API_VERSION!
  },
  instagram: {
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN!,
    businessAccountId: process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID!
  },
  whatsapp: {
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID!,
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN!,
    businessAccountId: process.env.WHATSAPP_BUSINESS_ACCOUNT_ID!
  },
  messenger: {
    appId: process.env.MESSENGER_APP_ID!,
    appSecret: process.env.MESSENGER_APP_SECRET!,
    accessToken: process.env.MESSENGER_ACCESS_TOKEN!,
    verifyToken: process.env.MESSENGER_VERIFY_TOKEN!
  }
}

export const metaAPIClient = new MetaAPIClient(config)
```

## 🔌 API Integration Examples

### Facebook Marketing API

```typescript
// app/api/facebook/campaigns/route.ts
import { metaAPIClient } from '@/lib/meta-api-client'

export async function GET() {
  try {
    const campaigns = await metaAPIClient.getCampaigns()
    return Response.json(campaigns)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch campaigns' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const campaignData = await request.json()
    const campaign = await metaAPIClient.createCampaign(campaignData)
    return Response.json(campaign)
  } catch (error) {
    return Response.json({ error: 'Failed to create campaign' }, { status: 500 })
  }
}
```

### Instagram API

```typescript
// app/api/instagram/media/route.ts
import { metaAPIClient } from '@/lib/meta-api-client'

export async function GET() {
  try {
    const media = await metaAPIClient.getInstagramMedia()
    return Response.json(media)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch Instagram media' }, { status: 500 })
  }
}
```

### WhatsApp Business API

```typescript
// app/api/whatsapp/messages/route.ts
import { metaAPIClient } from '@/lib/meta-api-client'

export async function POST(request: Request) {
  try {
    const messageData = await request.json()
    const message = await metaAPIClient.sendWhatsAppMessage(messageData)
    return Response.json(message)
  } catch (error) {
    return Response.json({ error: 'Failed to send WhatsApp message' }, { status: 500 })
  }
}
```

## 🔗 Webhook Integration

### WhatsApp Webhook

```typescript
// app/api/webhooks/whatsapp/route.ts
import { MetaWebhookHandler } from '@/lib/meta-api'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const messages = MetaWebhookHandler.handleWhatsAppWebhook(payload)
    
    // Process messages
    for (const message of messages) {
      // Handle incoming WhatsApp messages
      console.log('Received WhatsApp message:', message)
    }
    
    return Response.json({ status: 'success' })
  } catch (error) {
    return Response.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
```

### Messenger Webhook

```typescript
// app/api/webhooks/messenger/route.ts
import { MetaWebhookHandler } from '@/lib/meta-api'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const messages = MetaWebhookHandler.handleMessengerWebhook(payload)
    
    // Process messages
    for (const message of messages) {
      // Handle incoming Messenger messages
      console.log('Received Messenger message:', message)
    }
    
    return Response.json({ status: 'success' })
  } catch (error) {
    return Response.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
```

## 🔒 Security Considerations

### 1. Access Token Management

```typescript
// lib/token-manager.ts
export class TokenManager {
  private static tokens: Map<string, { token: string; expires: number }> = new Map()
  
  static setToken(apiKey: string, token: string, expiresIn: number) {
    this.tokens.set(apiKey, {
      token,
      expires: Date.now() + (expiresIn * 1000)
    })
  }
  
  static getToken(apiKey: string): string | null {
    const tokenData = this.tokens.get(apiKey)
    if (!tokenData || Date.now() > tokenData.expires) {
      return null
    }
    return tokenData.token
  }
  
  static refreshToken(apiKey: string): Promise<string> {
    // Implement token refresh logic
    throw new Error('Token refresh not implemented')
  }
}
```

### 2. Rate Limiting

```typescript
// lib/rate-limiter.ts
import { MetaAPIRateLimiter } from './meta-api'

const rateLimiter = new MetaAPIRateLimiter(200, 3600) // 200 requests per hour

export async function makeAPICall<T>(
  apiKey: string,
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  if (!rateLimiter.canMakeRequest(apiKey)) {
    throw new Error('Rate limit exceeded')
  }
  
  rateLimiter.recordRequest(apiKey)
  
  // Make API call
  const response = await fetch(endpoint, options)
  return response.json()
}
```

### 3. Error Handling

```typescript
// lib/error-handler.ts
export class MetaAPIErrorHandler {
  static handleError(error: any): { message: string; code: number } {
    if (error.error) {
      return {
        message: error.error.message,
        code: error.error.code
      }
    }
    
    return {
      message: 'Unknown error occurred',
      code: 500
    }
  }
  
  static isRetryableError(error: any): boolean {
    const retryableCodes = [429, 500, 502, 503, 504]
    return retryableCodes.includes(error.code)
  }
}
```

## 📊 Data Synchronization

### Real-time Data Sync

```typescript
// lib/data-sync.ts
export class DataSyncManager {
  static async syncCampaignData() {
    try {
      const campaigns = await metaAPIClient.getCampaigns()
      
      // Update database with latest campaign data
      for (const campaign of campaigns) {
        await prisma.campaign.upsert({
          where: { facebookId: campaign.id },
          update: {
            name: campaign.name,
            status: campaign.status,
            budgetRemaining: campaign.budget_remaining,
            updatedAt: new Date(campaign.updated_time)
          },
          create: {
            facebookId: campaign.id,
            name: campaign.name,
            status: campaign.status,
            budgetRemaining: campaign.budget_remaining,
            createdAt: new Date(campaign.created_time),
            updatedAt: new Date(campaign.updated_time)
          }
        })
      }
    } catch (error) {
      console.error('Campaign sync failed:', error)
    }
  }
  
  static async syncPerformanceData() {
    // Sync performance metrics
    // Implementation details...
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
// __tests__/meta-api.test.ts
import { MetaAPIClient } from '@/lib/meta-api'

describe('MetaAPIClient', () => {
  let client: MetaAPIClient
  
  beforeEach(() => {
    client = new MetaAPIClient(mockConfig)
  })
  
  test('should create campaign', async () => {
    const campaignData = {
      name: 'Test Campaign',
      objective: 'CONVERSIONS'
    }
    
    const result = await client.createCampaign(campaignData)
    expect(result.name).toBe('Test Campaign')
  })
})
```

### Integration Tests

```typescript
// __tests__/integration/api.test.ts
describe('API Integration', () => {
  test('should fetch campaigns from Facebook API', async () => {
    const response = await fetch('/api/facebook/campaigns')
    const campaigns = await response.json()
    
    expect(Array.isArray(campaigns)).toBe(true)
  })
})
```

## 📈 Monitoring and Analytics

### API Usage Tracking

```typescript
// lib/api-monitor.ts
export class APIMonitor {
  static trackAPICall(endpoint: string, method: string, responseTime: number) {
    // Log API call metrics
    console.log({
      endpoint,
      method,
      responseTime,
      timestamp: new Date().toISOString()
    })
  }
  
  static trackError(endpoint: string, error: any) {
    // Log API errors
    console.error({
      endpoint,
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
}
```

## 🚀 Deployment Considerations

### Production Environment

1. **Environment Variables**: Ensure all API credentials are properly set
2. **Rate Limiting**: Implement proper rate limiting for production
3. **Error Handling**: Set up comprehensive error handling and logging
4. **Monitoring**: Implement API usage monitoring and alerting
5. **Security**: Use secure token storage and transmission

### Scaling Considerations

1. **Database Optimization**: Optimize database queries for large datasets
2. **Caching**: Implement caching for frequently accessed data
3. **Load Balancing**: Set up load balancing for high traffic
4. **CDN**: Use CDN for static assets and API responses

## 📚 Additional Resources

- [Facebook Marketing API Documentation](https://developers.facebook.com/docs/marketing-api/)
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/)
- [Messenger Platform API](https://developers.facebook.com/docs/messenger-platform/)
- [Meta Business Help Center](https://www.facebook.com/business/help)

## 🆘 Troubleshooting

### Common Issues

1. **Invalid Access Token**: Check token expiration and refresh if needed
2. **Rate Limit Exceeded**: Implement proper rate limiting and retry logic
3. **Permission Denied**: Verify app permissions and user consent
4. **Webhook Verification Failed**: Check webhook URL and verify token

### Debug Tools

- Facebook Graph API Explorer
- WhatsApp Business API Testing Tool
- Instagram Basic Display API Testing
- Meta Business Manager Debug Tool

---

This integration guide provides a comprehensive foundation for connecting the Meta Marketing Training Platform with Meta's official APIs. Follow the steps carefully and refer to the official documentation for the most up-to-date information.
