# AI Help - Marketing Training Platform

An AI-powered comprehensive training platform for Meta advertising across Facebook, Instagram, WhatsApp, and Messenger. Built with Next.js, React, and Neon Postgres.

## 🚀 Features

### 📚 Comprehensive Training Modules
- **Facebook Ads**: Fundamentals, advanced targeting, campaign optimization
- **Instagram**: Stories ads, Reels advertising, feed optimization
- **WhatsApp**: Business API integration, messaging strategies
- **Messenger**: Ads and chatbot automation

### 📊 Interactive Dashboard
- Real-time progress tracking
- Performance analytics and metrics
- Visual progress charts and reports
- Platform-specific insights

### 🎯 Real Ad Examples
- Based on actual Meta advertising formats
- Performance metrics and case studies
- Platform-specific best practices
- Interactive ad previews

### 📈 Analytics & Reporting
- Comprehensive performance tracking
- Platform comparison metrics
- ROI and conversion analysis
- Export capabilities

### 🏆 Best Practices Library
- Platform-specific guidelines
- Creative best practices
- Targeting strategies
- Budget optimization tips

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon Postgres (Serverless)
- **ORM**: Prisma
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: Radix UI

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Neon Postgres database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-help-marketing-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database URL:
   ```
   DATABASE_URL="your-neon-postgres-connection-string"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── analytics/         # Analytics page
│   ├── best-practices/    # Best practices page
│   ├── modules/           # Individual module pages
│   ├── settings/          # Settings page
│   └── training/          # Training modules page
├── components/            # React components
│   ├── Dashboard.tsx      # Main dashboard
│   ├── Navigation.tsx     # Navigation component
│   ├── TrainingModules.tsx # Training modules list
│   └── Hero.tsx          # Hero section
├── lib/                   # Utility functions
│   └── prisma.ts         # Prisma client
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts          # Database seeding script
└── public/              # Static assets
```

## 🗄️ Database Schema

The platform uses a comprehensive database schema with the following main entities:

- **Users**: User accounts and profiles
- **TrainingModules**: Training content organized by platform
- **Lessons**: Individual lesson content
- **Quizzes**: Assessment questions and answers
- **AdExamples**: Real ad examples with metrics
- **Progress**: User progress tracking
- **CompletedModules**: Completion records
- **QuizAttempts**: Quiz attempt history

## 🔌 API Integration Ready

The platform is prepared for integration with Meta's official APIs:

### Facebook Marketing API
- Campaign management
- Ad creation and optimization
- Audience insights
- Performance metrics

### Facebook Graph API
- Page management
- Content publishing
- User insights
- Engagement metrics

### WhatsApp Business API
- Message templates
- Interactive messages
- Media sharing
- Webhook integration

## 📊 Key Metrics Tracked

- **Impressions**: Ad visibility metrics
- **Clicks**: Click-through rates
- **Conversions**: Goal completions
- **ROAS**: Return on ad spend
- **CPC**: Cost per click
- **CVR**: Conversion rates
- **Frequency**: Ad exposure frequency

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching capability
- **Interactive Charts**: Real-time data visualization
- **Progress Tracking**: Visual progress indicators
- **Modern Components**: Clean, professional interface
- **Accessibility**: WCAG compliant design

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with sample data
```

## 📈 Performance Features

- **Server-Side Rendering**: Fast initial page loads
- **Static Generation**: Optimized static pages
- **Image Optimization**: Next.js image optimization
- **Code Splitting**: Automatic code splitting
- **Caching**: Intelligent caching strategies

## 🔒 Security Features

- **Environment Variables**: Secure configuration
- **Database Security**: Connection encryption
- **Input Validation**: Form validation
- **CSRF Protection**: Cross-site request forgery protection
- **XSS Prevention**: Cross-site scripting prevention

## 🌟 Key Highlights

### Accuracy
- Content based on Meta's official documentation
- Real-world advertising best practices
- Up-to-date platform guidelines

### Real Data Integration
- Sample metrics from actual campaigns
- Performance benchmarks
- Industry-standard KPIs

### Regular Updates
- Meta platform feature updates
- New training modules
- Enhanced analytics capabilities

### Compliance
- Meta advertising policy compliance
- GDPR data protection
- Privacy-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the FAQ section

## 🔮 Future Enhancements

- **AI-Powered Recommendations**: Personalized training paths
- **Live Webinars**: Integrated video training
- **Certification System**: Completion certificates
- **Team Collaboration**: Multi-user workspaces
- **Advanced Analytics**: Predictive analytics
- **Mobile App**: Native mobile application

---

Built with ❤️ for the Meta marketing community