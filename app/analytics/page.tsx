'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign,
  Eye,
  MousePointer,
  Heart,
  Share2,
  MessageCircle,
  Calendar,
  Filter,
  Download
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Mock data for demonstration
const performanceData = [
  { date: '2024-01-01', impressions: 125000, clicks: 3200, conversions: 180, spend: 850 },
  { date: '2024-01-02', impressions: 142000, clicks: 3800, conversions: 210, spend: 920 },
  { date: '2024-01-03', impressions: 138000, clicks: 3600, conversions: 195, spend: 890 },
  { date: '2024-01-04', impressions: 155000, clicks: 4200, conversions: 240, spend: 1050 },
  { date: '2024-01-05', impressions: 168000, clicks: 4500, conversions: 275, spend: 1150 },
  { date: '2024-01-06', impressions: 172000, clicks: 4800, conversions: 290, spend: 1200 },
  { date: '2024-01-07', impressions: 185000, clicks: 5200, conversions: 315, spend: 1300 },
]

const platformData = [
  { platform: 'Facebook', impressions: 450000, clicks: 12000, conversions: 720, spend: 3200 },
  { platform: 'Instagram', impressions: 380000, clicks: 9800, conversions: 580, spend: 2800 },
  { platform: 'WhatsApp', impressions: 120000, clicks: 3200, conversions: 190, spend: 900 },
  { platform: 'Messenger', impressions: 95000, clicks: 2800, conversions: 165, spend: 750 },
]

const adTypeData = [
  { name: 'Image Ads', value: 45, color: '#3B82F6' },
  { name: 'Video Ads', value: 30, color: '#10B981' },
  { name: 'Carousel Ads', value: 15, color: '#F59E0B' },
  { name: 'Stories Ads', value: 10, color: '#EF4444' },
]

const topPerformingAds = [
  {
    id: 1,
    title: 'E-commerce Product Showcase',
    platform: 'Facebook',
    impressions: 125000,
    ctr: 2.4,
    cpc: 0.85,
    roas: 4.2,
    status: 'Active'
  },
  {
    id: 2,
    title: 'Lead Generation Campaign',
    platform: 'Instagram',
    impressions: 98000,
    ctr: 3.1,
    cpc: 1.20,
    roas: 3.8,
    status: 'Active'
  },
  {
    id: 3,
    title: 'Brand Awareness Video',
    platform: 'Facebook',
    impressions: 156000,
    ctr: 1.8,
    cpc: 0.65,
    roas: 2.9,
    status: 'Paused'
  },
  {
    id: 4,
    title: 'WhatsApp Business Message',
    platform: 'WhatsApp',
    impressions: 45000,
    ctr: 4.2,
    cpc: 0.45,
    roas: 5.1,
    status: 'Active'
  }
]

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d')
  const [selectedPlatform, setSelectedPlatform] = useState('all')

  const totalImpressions = performanceData.reduce((sum, day) => sum + day.impressions, 0)
  const totalClicks = performanceData.reduce((sum, day) => sum + day.clicks, 0)
  const totalConversions = performanceData.reduce((sum, day) => sum + day.conversions, 0)
  const totalSpend = performanceData.reduce((sum, day) => sum + day.spend, 0)
  const overallCTR = (totalClicks / totalImpressions) * 100
  const overallCVR = (totalConversions / totalClicks) * 100
  const overallROAS = (totalConversions * 50) / totalSpend // Assuming $50 average order value

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="messenger">Messenger</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Impressions</p>
              <p className="text-2xl font-bold text-gray-900">{totalImpressions.toLocaleString()}</p>
              <p className="text-sm text-green-600">+12.5% vs last period</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <MousePointer className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Clicks</p>
              <p className="text-2xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
              <p className="text-sm text-green-600">+8.3% vs last period</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversions</p>
              <p className="text-2xl font-bold text-gray-900">{totalConversions.toLocaleString()}</p>
              <p className="text-sm text-green-600">+15.2% vs last period</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">ROAS</p>
              <p className="text-2xl font-bold text-gray-900">{overallROAS.toFixed(1)}x</p>
              <p className="text-sm text-green-600">+22.1% vs last period</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="impressions" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="clicks" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="conversions" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ad Type Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Type Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={adTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {adTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{overallCTR.toFixed(2)}%</div>
              <div className="text-sm text-gray-600">Click-Through Rate</div>
              <div className="text-xs text-green-600 mt-1">+0.3% vs last period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{overallCVR.toFixed(2)}%</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
              <div className="text-xs text-green-600 mt-1">+1.2% vs last period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">${(totalSpend / totalClicks).toFixed(2)}</div>
              <div className="text-sm text-gray-600">Cost Per Click</div>
              <div className="text-xs text-red-600 mt-1">+$0.05 vs last period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">${(totalSpend / totalConversions).toFixed(2)}</div>
              <div className="text-sm text-gray-600">Cost Per Conversion</div>
              <div className="text-xs text-green-600 mt-1">-$2.30 vs last period</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Ads */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Ads</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topPerformingAds.map((ad) => (
                <tr key={ad.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{ad.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {ad.platform}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {ad.impressions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {ad.ctr}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${ad.cpc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {ad.roas}x
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      ad.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ad.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
