* * * * *

SellSmart 🎯
=====================

*Amazon Ads Management Suite with Spotify Design Sensibilities*

![Platform Overview](https://via.placeholder.com/1920x800.png?text=AdVantage+Platform+Preview)

* * * * *

🌐 Application Structure
------------------------

### 1\. **Landing Page** (Public)

**Spotify-inspired Features:**

-   Dark theme with gradient overlays

-   Animated "Now Playing" style metrics ticker

-   Interactive demo panel with hover-activated previews

**Core Functionality:**

-   Value proposition for Amazon sellers

-   Integration status with Amazon Advertising API

-   Real-time platform metrics (campaigns managed, ROAS avg)

-   Social proof section with API badges

* * * * *

### 2\. **Authentication Flow** (Login/Register)

**Spotify-style Elements:**

-   Dark modal overlays with subtle gradients

-   Animated form transitions

-   Password strength meter with musical visual feedback

**Key Features:**

-   Amazon Seller Central OAuth integration

-   2FA with "Verified" badge animation

-   Progressive profiling for new users

-   Security audit log preview

* * * * *

### 3\. **User Dashboard** (Seller Perspective)

**Amazon Ads Functionality:**

markdown

```

- **Campaign Management**
  - Real-time SP/SD/SB campaign performance
  - Automated rule suggestions (Spotify-style "Daily Mix" recommendations)
  - Bid adjustment calculator with historical data

- **Creative Studio**
  - Ad preview generator with Amazon template validation
  - AI-powered headline variations (Lyrics-style display)
  - Image optimization scoring

- **Analytics Hub**
  - Customizable widgets (ACOS, TACoS, ROAS)
  - Historical performance timelines
  - Competitor benchmark comparisons

**UI Enhancements:**

-   Spotify Wrapped-style annual reports

-   Drag-and-drop dashboard customization

-   "Now Playing" style active campaign card

-   Collaborative playlist-inspired team features

* * * * *

### 4\. **Admin Dashboard** (Enhanced)

**Advanced Amazon Ads Management:**

markdown

```

- **Multi-Client Monitoring**
  - Aggregate performance across all managed accounts
  - Alert system for account health metrics
  - Bulk action capabilities

- **API Management**
  - Amazon Advertising API usage analytics
  - Rate limit monitoring
  - Webhook configuration

- **Financial Reporting**
  - Client billing integration
  - Advertising spend reconciliation
  - Profitability calculators

**Spotify Admin Features:**

-   "Artist Analytics" style client performance views

-   Team member permissions (Collaborator/Admin roles)

-   Audit log with change tracking

* * * * *

🛠 Core Technical Requirements
------------------------------

### Amazon Ads API Integration

typescript

```

// Sample Amazon Ads API Service
class AmazonAdsService {
  async getCampaignPerformance(campaignId: string): Promise<CampaignMetrics> {
    return await amazonAdvertisingClient.getCampaigns({
      campaignId,
      metrics: ['impressions', 'clicks', 'spend', 'sales']
    });
  }

  async generateRecommendations(): Promise<OptimizationTip[]> {
    return await amazonML.generateBidSuggestions();
  }
}
```
### Key Features Matrix
```
| Module | Must-Have Features | Spotify UI Elements |
| --- | --- | --- |
| Campaign Mgmt | Real-time bid adjustments, Automated rules | Wrapped-style annual reports |
| Creative Studio | Ad validation, AI suggestions | Lyrics-style text animation |
| Analytics | Custom widgets, Export capabilities | Artist analytics-inspired visuals |
| Admin | Multi-account control, API monitoring | Album grid-style client overview |

* * * * *
```
🚀 Suggested Tech Stack
-----------------------

**Frontend:**

-   React 18 + TypeScript

-   Spotify UI Kit (Custom)

-   Recharts/Visx for data visualization

-   Amazon Ads UI Components

**Backend:**

-   Node.js + TypeScript

-   Amazon Advertising API SDK

-   Redis for rate limiting

-   PostgreSQL for campaign data

**DevOps:**

-   AWS ECS Fargate

-   Amazon API Gateway

-   CloudWatch for API monitoring

-   CI/CD with CodePipeline

* * * * *

🔐 Security Requirements
------------------------

1.  **Amazon API Security:**

    -   Token rotation implementation

    -   AWS Secrets Manager integration

    -   Scoped API permissions

2.  **Data Protection:**

    -   Campaign data encryption at rest

    -   PCI-DSS compliance for payment processing

    -   SOC 2 audit trail

* * * * *

📈 Key Performance Indicators
-----------------------------

1.  **Ad Platform Metrics:**

    -   API Response Time < 800ms

    -   Real-time Data Refresh < 15s

    -   Bulk Action Processing < 30s/100 campaigns

2.  **UI Performance:**

    -   LCP < 1.2s

    -   INP < 200ms

    -   Dashboard Load Time < 2.5s

* * * * *

🧪 Testing Strategy
-------------------

1.  **Amazon API Simulation:**

    -   Mock Server for Advertising API

    -   Rate Limit Testing Suite

    -   SP/SD/SB Campaign Scenario Tests

2.  **UI Testing:**

    -   Campaign Management Workflow Tests

    -   Dark Theme Contrast Checks

    -   Cross-account Permission Validation


public/
├── assets/
│   ├── fonts/          # Custom fonts (Spotify Circular, Gotham, etc.)
│   ├── images/
│   │   ├── amazon-ads/ # Amazon product/ads related images
│   │   └── spotify-ui/ # Spotify-style UI elements
│   └── svgs/           # SVG icons/components
├── locales/            # i18n files
└── error-pages/        # Custom 404, 500 pages (Spotify-style)

src/
├── app/                # Main app configuration
│   ├── routers/        # React router configuration
│   └── providers/      # Context providers (Theme, Auth, etc.)
│
├── common/
│   ├── api/
│   │   ├── amazon-ads/ # Amazon Advertising API client
│   │   └── supabase/   # Supabase client extensions
│   ├── constants/      # App-wide constants
│   └── types/          # TypeScript types/interfaces
│
├── features/
│   ├── auth/           # Authentication flow
│   │   ├── components/ # Login/Register components
│   │   ├── hooks/      # Auth hooks
│   │   └── utils/      # Auth utilities
│   │
│   ├── dashboard/      # User dashboard
│   │   ├── components/ # Dashboard-specific components
│   │   ├── hooks/      # Dashboard data hooks
│   │   └── widgets/    # Reusable dashboard widgets
│   │
│   ├── admin/          # Admin dashboard
│   │   ├── components/ # Admin-specific components
│   │   └── panels/     # Admin control panels
│   │
│   └── campaigns/      # Amazon Ads campaigns feature
│       ├── api/        # Campaign API calls
│       ├── analysis/   # Performance analysis components
│       └── types/      # Campaign-related types
│
├── layouts/            # Page layouts
│   ├── MainLayout/     # Primary app layout
│   ├── AuthLayout/     # Authentication flow layout
│   └── AdminLayout/    # Admin dashboard layout
│
├── theme/              # Spotify-inspired theme
│   ├── components/     # Styled system components
│   ├── tokens/         # Design tokens (colors, typography)
│   └── utils/          # Theme utilities
│
├── utils/
│   ├── amazon-ads/     # Amazon Ads specific utilities
│   ├── formatting/     # Data formatting helpers
│   └── validation/     # Validation utilities
│
└── __tests__/          # Test directory
    ├── unit/           # Unit tests
    └── integration/    # Integration tests

Key Enhancements and Rationale:

1.  **Amazon Ads Integration**

bash

Copy

src/features/campaigns/
├── api/
│   ├── sponsored-products.ts
│   ├── sponsored-brands.ts
│   └── sponsored-display.ts
└── analysis/
    ├── acos-calculator.tsx
    └── bid-optimizer.tsx

1.  **Spotify-inspired Theme System**

typescript

Copy

// src/theme/tokens/colors.ts
export const spotifyTheme = {
  dark: {
    background: '#121212',
    surface: '#181818',
    primary: '#1DB954',
    secondary: '#535353'
  },
  // ...light theme variations
}

1.  **Supabase Auth Enhancements**

typescript

Copy

// src/features/auth/api/supabase.auth.ts
export const authAPI = {
  loginWithSpotify: async () => {
    return await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: { scopes: 'user-read-email' }
    })
  },
  // Amazon Seller OAuth integration
  loginWithAmazon: async () => {
    /* ... */
  }
}

1.  **Performance Monitoring**

bash

Copy

src/common/api/performance/
├── realtime-metrics.ts  # Amazon Ads real-time metrics
└── historical-data.ts   # Long-term trend analysis

1.  **Suggested New Dependencies**

json

Copy

{
  "dependencies": {
    "@amazon-ads/amazon-ads-api": "^2.4.0",
    "react-query": "^3.39.3",
    "recharts": "^2.8.0",
    "zod": "^3.22.4",
    "storybook-addon-spotify-theme": "^1.2.0"
  }
}

Critical Implementation Steps:

1.  **Amazon Ads API Integration**

typescript

Copy

// src/common/api/amazon-ads/client.ts
export const amazonAdsClient = createClient({
  baseURL: import.meta.env.VITE_AMAZON_API_URL,
  headers: {
    'Amazon-Advertising-API-ClientId': import.meta.env.VITE_AMAZON_CLIENT_ID,
    'Authorization': `Bearer ${getAccessToken()}`
  }
});

1.  **Spotify UI Components**

tsx

Copy

// src/theme/components/NowPlayingCard.tsx
const NowPlayingCard = ({ metric }: { metric: CampaignMetric }) => (
  <div className="spotify-now-playing">  <WaveformVisualizer />  <MetricDisplay value={metric.value} trend={metric.trend} />  </div>
);

1.  **Feature Flagging for Admin**

typescript

Copy

// src/features/admin/utils/featureFlags.ts
export const ADMIN_FEATURES = {
  BULK_ACTIONS: process.env.NODE_ENV === 'development',
  ADVANCED_REPORTING: false
};

1.  **Performance Optimization**

javascript

Copy

// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          amazon: ['@amazon-ads/amazon-ads-api'],
          spotifyUI: ['storybook-addon-spotify-theme']
        }
      }
    }
  }
});

Recommended File Additions:

1.  `src/theme/spotify.d.ts` - Spotify design token types

2.  `src/common/api/amazon-ads/types.ts` - Amazon Ads API types

3.  `src/features/dashboard/widgets/CampaignHealth.tsx` - Amazon Ads health monitor

4.  `.env.example` - Environment template

5.  `src/utils/spotifyThemeValidator.ts` - Theme validation

This structure improves:

-   **Separation of Concerns**: Clear feature boundaries

-   **Scalability**: Easy addition of new advertising platforms

-   **Maintainability**: Type-safe API interactions

-   **Performance**: Code splitting for Amazon/Spotify features

-   **Consistency**: Centralized design system implementation
