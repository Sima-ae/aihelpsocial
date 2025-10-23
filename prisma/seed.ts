import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create training modules
  const modules = [
    {
      title: 'Facebook Ads Fundamentals',
      description: 'Learn the basics of Facebook advertising, including campaign setup, targeting, and optimization strategies.',
      platform: 'FACEBOOK',
      difficulty: 'BEGINNER',
      duration: 45,
      order: 1,
      lessons: [
        {
          title: 'Introduction to Facebook Ads',
          content: `
            <h2>Welcome to Facebook Advertising</h2>
            <p>Facebook Ads is one of the most powerful advertising platforms available today. With over 2.9 billion monthly active users, Facebook provides unparalleled reach and targeting capabilities.</p>
            
            <h3>Key Benefits of Facebook Ads:</h3>
            <ul>
              <li><strong>Massive Reach:</strong> Access to billions of users worldwide</li>
              <li><strong>Precise Targeting:</strong> Target users based on demographics, interests, behaviors, and more</li>
              <li><strong>Multiple Ad Formats:</strong> Images, videos, carousels, collections, and more</li>
              <li><strong>Detailed Analytics:</strong> Comprehensive reporting and optimization tools</li>
              <li><strong>Cost-Effective:</strong> Flexible budgeting options for businesses of all sizes</li>
            </ul>

            <h3>Types of Facebook Ads:</h3>
            <ul>
              <li><strong>Image Ads:</strong> Single static images with text overlay</li>
              <li><strong>Video Ads:</strong> Engaging video content up to 240 minutes</li>
              <li><strong>Carousel Ads:</strong> Multiple images or videos in a single ad</li>
              <li><strong>Collection Ads:</strong> Showcase multiple products with instant experience</li>
              <li><strong>Stories Ads:</strong> Full-screen vertical ads in Stories format</li>
            </ul>
          `,
          order: 1
        },
        {
          title: 'Setting Up Your First Campaign',
          content: `
            <h2>Campaign Setup Process</h2>
            <p>Creating your first Facebook ad campaign is straightforward when you follow the right steps.</p>
            
            <h3>Step 1: Choose Your Objective</h3>
            <p>Facebook offers 11 different campaign objectives:</p>
            <ul>
              <li><strong>Awareness:</strong> Brand awareness, reach</li>
              <li><strong>Traffic:</strong> Traffic, engagement, app installs, video views</li>
              <li><strong>Leads:</strong> Lead generation, messages</li>
              <li><strong>Sales:</strong> Conversions, catalog sales, store traffic</li>
            </ul>

            <h3>Step 2: Define Your Audience</h3>
            <p>Use Facebook's detailed targeting options:</p>
            <ul>
              <li><strong>Demographics:</strong> Age, gender, location, language</li>
              <li><strong>Interests:</strong> Pages liked, activities, interests</li>
              <li><strong>Behaviors:</strong> Purchase behavior, device usage, travel patterns</li>
              <li><strong>Custom Audiences:</strong> Your existing customers or website visitors</li>
              <li><strong>Lookalike Audiences:</strong> People similar to your existing customers</li>
            </ul>

            <h3>Step 3: Choose Ad Placements</h3>
            <p>Select where your ads will appear:</p>
            <ul>
              <li><strong>Facebook Feed:</strong> News feed, right column</li>
              <li><strong>Instagram:</strong> Feed, Stories, Explore</li>
              <li><strong>Audience Network:</strong> Third-party apps and websites</li>
              <li><strong>Messenger:</strong> Inbox, Stories</li>
            </ul>
          `,
          order: 2
        },
        {
          title: 'Budget and Bidding Strategies',
          content: `
            <h2>Budget Management</h2>
            <p>Understanding Facebook's bidding system is crucial for campaign success.</p>
            
            <h3>Budget Types:</h3>
            <ul>
              <li><strong>Daily Budget:</strong> Amount spent per day (recommended for beginners)</li>
              <li><strong>Lifetime Budget:</strong> Total amount for the entire campaign duration</li>
            </ul>

            <h3>Bidding Strategies:</h3>
            <ul>
              <li><strong>Lowest Cost:</strong> Facebook automatically bids to get the lowest cost per result</li>
              <li><strong>Cost Cap:</strong> Set a maximum cost per result while maximizing volume</li>
              <li><strong>Bid Cap:</strong> Set a maximum bid amount for each auction</li>
              <li><strong>Target Cost:</strong> Maintain a specific cost per result</li>
            </ul>

            <h3>Optimization Tips:</h3>
            <ul>
              <li>Start with automatic bidding to learn your audience</li>
              <li>Use cost caps once you have performance data</li>
              <li>Monitor frequency to avoid ad fatigue</li>
              <li>Test different budget amounts to find optimal spend</li>
            </ul>
          `,
          order: 3
        }
      ],
      quizzes: [
        {
          title: 'Facebook Ads Basics Quiz',
          questions: [
            {
              question: 'What is the minimum age requirement for Facebook advertising?',
              options: ['13', '16', '18', '21'],
              correctAnswer: 0,
              explanation: 'Facebook requires users to be at least 13 years old to create an account, which is also the minimum age for advertising.'
            },
            {
              question: 'Which campaign objective is best for driving website traffic?',
              options: ['Brand Awareness', 'Traffic', 'Conversions', 'Reach'],
              correctAnswer: 1,
              explanation: 'The Traffic objective is specifically designed to drive clicks to your website or app.'
            },
            {
              question: 'What is a Lookalike Audience?',
              options: [
                'People who look like your target demographic',
                'People similar to your existing customers',
                'People who have visited your website',
                'People who have engaged with your content'
              ],
              correctAnswer: 1,
              explanation: 'Lookalike Audiences are created by Facebook to find people similar to your existing customers based on shared characteristics.'
            }
          ]
        }
      ],
      examples: [
        {
          title: 'E-commerce Product Ad',
          description: 'High-performing product ad for fashion retailer',
          platform: 'FACEBOOK',
          adType: 'IMAGE',
          metrics: {
            ctr: 2.4,
            cpc: 0.85,
            roas: 4.2,
            impressions: 125000
          }
        },
        {
          title: 'Lead Generation Campaign',
          description: 'Successful lead gen ad for SaaS company',
          platform: 'FACEBOOK',
          adType: 'VIDEO',
          metrics: {
            ctr: 1.8,
            cpl: 12.50,
            conversionRate: 8.5,
            impressions: 89000
          }
        }
      ]
    },
    {
      title: 'Instagram Stories Advertising',
      description: 'Master Instagram Stories ads with creative best practices and performance optimization techniques.',
      platform: 'INSTAGRAM',
      difficulty: 'INTERMEDIATE',
      duration: 30,
      order: 2,
      lessons: [
        {
          title: 'Instagram Stories Ad Format',
          content: `
            <h2>Instagram Stories Ad Specifications</h2>
            <p>Instagram Stories ads appear between organic stories and offer unique creative opportunities.</p>
            
            <h3>Technical Requirements:</h3>
            <ul>
              <li><strong>Image Size:</strong> 1080 x 1920 pixels (9:16 aspect ratio)</li>
              <li><strong>Video Length:</strong> 1-15 seconds for single video, up to 120 seconds for multi-video</li>
              <li><strong>File Size:</strong> Max 30MB for images, 4GB for videos</li>
              <li><strong>Text Overlay:</strong> Keep under 20% of the image area</li>
            </ul>

            <h3>Creative Best Practices:</h3>
            <ul>
              <li>Design for mobile-first viewing</li>
              <li>Use vertical format to fill the screen</li>
              <li>Include clear call-to-action</li>
              <li>Test different creative styles</li>
              <li>Use high-quality visuals</li>
            </ul>
          `,
          order: 1
        },
        {
          title: 'Stories Ad Targeting',
          content: `
            <h2>Targeting Strategies for Stories</h2>
            <p>Instagram Stories ads use the same targeting options as Facebook ads.</p>
            
            <h3>Audience Considerations:</h3>
            <ul>
              <li><strong>Age:</strong> Stories are popular with younger demographics</li>
              <li><strong>Behavior:</strong> Target users who engage with Stories content</li>
              <li><strong>Interests:</strong> Focus on visual and lifestyle interests</li>
              <li><strong>Custom Audiences:</strong> Retarget website visitors and app users</li>
            </ul>

            <h3>Placement Optimization:</h3>
            <ul>
              <li>Test Stories-only vs. automatic placements</li>
              <li>Monitor performance by placement</li>
              <li>Adjust budgets based on performance</li>
              <li>Use placement-specific creative when possible</li>
            </ul>
          `,
          order: 2
        }
      ],
      quizzes: [
        {
          title: 'Instagram Stories Quiz',
          questions: [
            {
              question: 'What is the recommended aspect ratio for Instagram Stories ads?',
              options: ['16:9', '4:3', '9:16', '1:1'],
              correctAnswer: 2,
              explanation: 'Instagram Stories ads should use a 9:16 aspect ratio (1080 x 1920 pixels) to fill the entire screen.'
            }
          ]
        }
      ],
      examples: [
        {
          title: 'Fashion Brand Stories Ad',
          description: 'Successful fashion brand Stories ad campaign',
          platform: 'INSTAGRAM',
          adType: 'STORY',
          metrics: {
            ctr: 3.2,
            cpc: 1.20,
            roas: 3.8,
            impressions: 75000
          }
        }
      ]
    },
    {
      title: 'WhatsApp Business API',
      description: 'Complete guide to WhatsApp Business API integration and messaging strategies for customer engagement.',
      platform: 'WHATSAPP',
      difficulty: 'ADVANCED',
      duration: 60,
      order: 3,
      lessons: [
        {
          title: 'WhatsApp Business API Overview',
          content: `
            <h2>Understanding WhatsApp Business API</h2>
            <p>The WhatsApp Business API allows businesses to send and receive messages at scale.</p>
            
            <h3>Key Features:</h3>
            <ul>
              <li><strong>Message Templates:</strong> Pre-approved message formats</li>
              <li><strong>Rich Media:</strong> Images, videos, documents, and location sharing</li>
              <li><strong>Interactive Messages:</strong> Buttons, lists, and quick replies</li>
              <li><strong>Webhook Integration:</strong> Real-time message delivery and status updates</li>
            </ul>

            <h3>Message Types:</h3>
            <ul>
              <li><strong>Template Messages:</strong> Pre-approved messages for specific use cases</li>
              <li><strong>Session Messages:</strong> Responses within 24-hour window</li>
              <li><strong>Media Messages:</strong> Images, videos, documents, and audio</li>
              <li><strong>Interactive Messages:</strong> Buttons, lists, and quick replies</li>
            </ul>
          `,
          order: 1
        }
      ],
      quizzes: [
        {
          title: 'WhatsApp Business API Quiz',
          questions: [
            {
              question: 'What is the time window for sending session messages?',
              options: ['12 hours', '24 hours', '48 hours', '72 hours'],
              correctAnswer: 1,
              explanation: 'Session messages can only be sent within 24 hours of the last customer message.'
            }
          ]
        }
      ],
      examples: [
        {
          title: 'Customer Support Chat',
          description: 'Automated customer support using WhatsApp Business API',
          platform: 'WHATSAPP',
          adType: 'MESSENGER_AD',
          metrics: {
            responseTime: 2.5,
            satisfaction: 4.8,
            resolutionRate: 85,
            messages: 1250
          }
        }
      ]
    },
    {
      title: 'Messenger Ads & Chatbots',
      description: 'Learn to create engaging Messenger ads and implement chatbot automation for customer engagement.',
      platform: 'MESSENGER',
      difficulty: 'INTERMEDIATE',
      duration: 40,
      order: 4,
      lessons: [
        {
          title: 'Messenger Ad Formats',
          content: `
            <h2>Messenger Ad Types</h2>
            <p>Messenger ads appear in the Messenger app and can drive conversations.</p>
            
            <h3>Ad Formats:</h3>
            <ul>
              <li><strong>Sponsored Messages:</strong> Direct messages to users who have messaged your page</li>
              <li><strong>Click-to-Message:</strong> Ads that open Messenger conversations</li>
              <li><strong>Stories Ads:</strong> Full-screen ads in Messenger Stories</li>
            </ul>

            <h3>Best Practices:</h3>
            <ul>
              <li>Personalize messages when possible</li>
              <li>Provide immediate value in conversations</li>
              <li>Use chatbots for quick responses</li>
              <li>Follow up with human agents when needed</li>
            </ul>
          `,
          order: 1
        }
      ],
      quizzes: [
        {
          title: 'Messenger Ads Quiz',
          questions: [
            {
              question: 'Which Messenger ad format allows direct messaging to users?',
              options: ['Click-to-Message', 'Sponsored Messages', 'Stories Ads', 'All of the above'],
              correctAnswer: 1,
              explanation: 'Sponsored Messages allow you to send direct messages to users who have previously messaged your page.'
            }
          ]
        }
      ],
      examples: [
        {
          title: 'E-commerce Chatbot',
          description: 'Automated shopping assistant for online store',
          platform: 'MESSENGER',
          adType: 'MESSENGER_AD',
          metrics: {
            ctr: 2.8,
            cpc: 0.95,
            conversionRate: 12.5,
            impressions: 95000
          }
        }
      ]
    }
  ]

  for (const moduleData of modules) {
    const { lessons, quizzes, examples, ...moduleInfo } = moduleData
    
    const module = await prisma.trainingModule.create({
      data: {
        ...moduleInfo,
        platform: moduleInfo.platform as any,
        difficulty: moduleInfo.difficulty as any
      }
    })

    // Create lessons
    for (const lessonData of lessons) {
      await prisma.lesson.create({
        data: {
          ...lessonData,
          moduleId: module.id
        }
      })
    }

    // Create quizzes and questions
    for (const quizData of quizzes) {
      const { questions, ...quizInfo } = quizData
      
      const quiz = await prisma.quiz.create({
        data: {
          ...quizInfo,
          moduleId: module.id
        }
      })

      for (const [index, questionData] of questions.entries()) {
        await prisma.quizQuestion.create({
          data: {
            ...questionData,
            quizId: quiz.id,
            order: index + 1
          }
        })
      }
    }

    // Create ad examples
    for (const exampleData of examples) {
      await prisma.adExample.create({
        data: {
          ...exampleData,
          moduleId: module.id,
          platform: exampleData.platform as any,
          adType: exampleData.adType as any
        }
      })
    }

    console.log(`✅ Created module: ${module.title}`)
  }

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
