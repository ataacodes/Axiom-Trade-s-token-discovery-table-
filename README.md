# Axiom Token Discovery Table

A pixel-perfect replica of Axiom Trade's token discovery table built with Next.js 14, TypeScript, and Tailwind CSS. This application features real-time price updates, advanced filtering, sorting, and a comprehensive set of interactive UI components.

## 🎥 Demo Video

> **Note**: Please add your YouTube demo video link here once recorded.
> 
> [![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)
> 
> See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for instructions on creating and uploading the demo video.

## 🚀 Features

### Core Features
- **Token Columns**: New Pairs, Final Stretch, and Migrated tokens
- **Interactive Components**: Popover, Tooltip, Modal, and Sortable headers
- **Real-time Updates**: WebSocket mock for live price updates with smooth color transitions
- **Loading States**: Skeleton loaders, shimmer effects, progressive loading, and error boundaries
- **Responsive Design**: Fully responsive down to 320px width

### Technical Highlights
- **Next.js 14** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **React Query** for data fetching
- **Radix UI** components for accessibility
- **Atomic Architecture** for reusability
- **Performance Optimized** with memoization and <100ms interactions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd eterna_FE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
eterna_FE/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main page component
├── components/
│   ├── atoms/               # Atomic components (Button, Badge, Skeleton, etc.)
│   ├── molecules/           # Molecular components (Table, Tooltip, Modal, etc.)
│   ├── organisms/           # Complex components (TokenTable, TokenRow, etc.)
│   └── providers.tsx        # Redux and React Query providers
├── hooks/                   # Custom React hooks
│   ├── use-tokens.ts        # Token data fetching hook
│   ├── use-websocket.ts     # WebSocket mock hook
│   └── use-sort.ts          # Sorting logic hook
├── lib/
│   ├── store/               # Redux store configuration
│   │   ├── index.ts         # Store setup
│   │   ├── hooks.ts         # Typed Redux hooks
│   │   └── slices/          # Redux slices
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🏗️ Architecture

### Atomic Design Pattern
The project follows atomic design principles:

- **Atoms**: Basic building blocks (Button, Badge, Skeleton, PriceDisplay)
- **Molecules**: Simple component groups (Table, Tooltip, Popover, Modal)
- **Organisms**: Complex UI sections (TokenTable, TokenRow, TokenDiscoveryTable)
- **Templates**: Page layouts (handled by Next.js App Router)

### State Management
- **Redux Toolkit**: Manages token data, UI state, sorting, and filtering
- **React Query**: Handles data fetching, caching, and refetching
- **Local State**: Component-specific state (modals, hover states)

### Performance Optimizations
- **React.memo**: Prevents unnecessary re-renders
- **useMemo/useCallback**: Memoizes expensive computations
- **Code Splitting**: Automatic with Next.js
- **Optimized Animations**: CSS transitions with GPU acceleration
- **Debouncing/Throttling**: For search and scroll events

## 🎨 Components Overview

### Atoms
- `Button`: Reusable button with variants
- `Badge`: Status indicators (New, Final Stretch, Migrated)
- `Skeleton`: Loading placeholder
- `Shimmer`: Animated loading effect
- `PriceDisplay`: Formatted price with change indicator

### Molecules
- `Table`: Accessible table component
- `SortableHeader`: Clickable column headers with sort indicators
- `Tooltip`: Hover information tooltips
- `Popover`: Quick information popovers
- `Modal`: Full-featured modal dialogs
- `ErrorBoundary`: Error handling component

### Organisms
- `TokenDiscoveryTable`: Main table wrapper with error handling
- `TokenTable`: Table with sorting and columns
- `TokenRow`: Individual token row with interactions
- `TokenTableToolbar`: Filter and search controls
- `TokenDetailsModal`: Detailed token information modal
- `TokenPopover`: Quick token info popover

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## 🌐 Deployment

### Vercel Deployment

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to complete deployment.

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### GitHub Repository Setup

1. **Initialize Git** (if not already initialized):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Create initial commit**:
   ```bash
   git commit -m "Initial commit: Axiom Token Discovery Table"
   ```

4. **Create a new repository on GitHub** (via GitHub website)

5. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Future Commits

```bash
git add .
git commit -m "Your commit message"
git push
```

## 📱 Responsive Design

The application is fully responsive and tested at the following breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

### Responsive Features
- Horizontal scrolling table on mobile
- Collapsible filters on small screens
- Touch-friendly interactions
- Optimized font sizes and spacing

## 🧪 Testing

### Manual Testing Checklist
- [ ] Token table loads and displays data
- [ ] Sorting works on all columns
- [ ] Filtering by category works
- [ ] Search functionality works
- [ ] Real-time price updates work
- [ ] Modal opens and closes correctly
- [ ] Popover shows on hover/click
- [ ] Tooltips appear on hover
- [ ] Error boundary catches errors
- [ ] Loading states display correctly
- [ ] Responsive design works on mobile

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **TypeScript errors**:
   ```bash
   npm run type-check
   ```

3. **Build errors**:
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

4. **Dependency issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📊 Performance Metrics

### Lighthouse Scores (Target: ≥90)
- **Performance**: Optimized with code splitting and memoization
- **Accessibility**: WCAG 2.1 AA compliant with Radix UI
- **Best Practices**: Follows Next.js and React best practices
- **SEO**: Optimized meta tags and semantic HTML

### Optimization Techniques
- Component memoization
- Lazy loading
- Image optimization (when applicable)
- CSS optimization
- Bundle size optimization

## 📝 Code Quality

### TypeScript
- Strict mode enabled
- Comprehensive type definitions
- No `any` types
- Proper error handling

### Code Style
- ESLint configuration
- Consistent naming conventions
- DRY principles
- Comprehensive comments for complex logic

## 🔐 Environment Variables

Currently, no environment variables are required. In production, you may want to add:
- `NEXT_PUBLIC_WS_URL`: WebSocket server URL
- `NEXT_PUBLIC_API_URL`: API endpoint URL

Create a `.env.local` file:
```env
NEXT_PUBLIC_WS_URL=wss://your-websocket-server.com
NEXT_PUBLIC_API_URL=https://your-api-server.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development Notes

### Adding New Features
1. Create components following atomic design principles
2. Add types to `lib/types.ts`
3. Update Redux slices if state management is needed
4. Add custom hooks if logic is reusable
5. Update this README with new features

### Best Practices
- Always use TypeScript strict mode
- Memoize expensive components
- Use semantic HTML
- Follow accessibility guidelines
- Write self-documenting code
- Add comments for complex logic

## 📞 Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

**Built with  using Next.js 14, TypeScript, and Tailwind CSS**

