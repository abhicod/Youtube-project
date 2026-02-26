# YouTube Clone

A modern YouTube clone built with React, Redux Toolkit, and Tailwind CSS. This application replicates YouTube's core functionality including video browsing, search suggestions, live chat, and comments system.

## 🚀 Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **Vite 7.3.1** - Fast development server and build tool

### State Management
- **Redux Toolkit 2.11.2** - For managing global application state
- **React Redux 9.2.0** - React bindings for Redux

### Routing
- **React Router DOM 7.13.1** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.2.0** - Utility-first CSS framework
- **Lucide React 0.575.0** - Icon library
- **Material UI 7.3.8** - Additional UI components

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AppLayout.jsx   # Main layout wrapper
│   ├── Header.jsx      # Navigation header with search
│   ├── SideBar.jsx     # Collapsible sidebar
│   ├── VideoContainer.jsx # Video grid display
│   ├── VideoCard.jsx   # Individual video card
│   ├── WatchPage.jsx   # Video player page
│   ├── LiveChat.jsx    # Live chat functionality
│   ├── CommentsContainer.jsx # Comments section
│   └── ButtonsList.jsx # Category buttons
├── utils/              # Utility functions and Redux slices
│   ├── reduxStore.jsx  # Redux store configuration
│   ├── appSlice.jsx    # App state management
│   ├── searchSlice.jsx # Search caching
│   ├── chatSlice.jsx   # Chat state management
│   ├── constants.js    # API endpoints and keys
│   ├── helper.js       # Helper functions
│   └── MockData.js     # Mock comments data
└── assets/             # Static assets
```

## 🛠️ Core Functionality

### 1. **Application Layout & Routing**
**File:** `src/App.jsx`, `src/components/AppLayout.jsx`

**Hooks Used:**
- `useLocation()` - Detects current route for conditional rendering

**Logic:**
- Uses React Router for client-side routing
- Implements nested routes with `/` as home and `/watch` for video player
- Conditionally renders sidebar based on route (hidden on watch page)

**State Management:**
- Redux Provider wraps the entire app for global state access

### 2. **Header with Search Functionality**
**File:** `src/components/Header.jsx`

**Hooks Used:**
- `useState()` - Manages search query, suggestions, and suggestion list visibility
- `useEffect()` - Implements debounced search with 200ms delay
- `useDispatch()` - Dispatches Redux actions
- `useSelector()` - Reads search cache from Redux store

**Logic:**
- **Debounced Search:** Prevents excessive API calls by waiting 200ms after user stops typing
- **Search Caching:** Stores search suggestions in Redux to avoid repeated API calls
- **Auto-complete:** Displays search suggestions from Google's suggest API

**State Management:**
- Local state for search input and suggestions
- Redux state for cached search results

### 3. **Sidebar Navigation**
**File:** `src/components/SideBar.jsx`, `src/components/SideBarListItems.jsx`

**Hooks Used:**
- `useSelector()` - Reads menu open/close state from Redux

**Logic:**
- Conditionally renders based on `isMenuOpen` state
- Contains navigation links to Home and Shorts
- Responsive design that hides on smaller screens

**State Management:**
- Redux state controls sidebar visibility

### 4. **Video Container & Cards**
**File:** `src/components/VideoContainer.jsx`, `src/components/VideoCard.jsx`

**Hooks Used:**
- `useState()` - Stores video data array
- `useEffect()` - Fetches videos on component mount

**Logic:**
- Fetches popular videos from YouTube API on initial load
- Maps video data to VideoCard components
- Each card displays thumbnail, title, channel, views, and likes

**State Management:**
- Local state for video data

### 5. **Live Chat System**
**File:** `src/components/LiveChat.jsx`

**Hooks Used:**
- `useState()` - Manages current message input
- `useEffect()` - Sets up interval for auto-generated messages
- `useDispatch()` - Adds messages to Redux store
- `useSelector()` - Reads chat messages from Redux

**Logic:**
- **Auto-generated Messages:** Creates fake chat messages every 5 seconds
- **Message Limit:** Maintains only 20 messages (removes oldest when adding new)
- **Real-time Updates:** Uses Redux for immediate state updates across components

**State Management:**
- Redux chat slice stores message array with automatic size management

### 6. **Comments System**
**File:** `src/components/CommentsContainer.jsx`, `src/utils/MockData.js`

**Logic:**
- Uses mock data for nested comment structure
- Supports recursive comment replies up to 4 levels deep
- Displays comments in a hierarchical tree structure

**State Management:**
- Static mock data (no dynamic state management)

### 7. **Category Buttons with Advanced Scrolling**
**File:** `src/components/ButtonsList.jsx`

**Hooks Used:**
- `useState()` - Controls left/right scroll button visibility
- `useEffect()` - Checks scroll position on mount
- `useRef()` - Reference to scroll container

**Logic:**
- **Multiple Scroll Methods:**
  - Button click scrolling (left/right arrows)
  - Mouse wheel horizontal scrolling
  - Drag-to-scroll functionality
- **Dynamic Button Visibility:** Shows/hides scroll arrows based on scroll position
- **Smooth Animations:** CSS transitions for hover effects

**State Management:**
- Local state for scroll button visibility

## 🔄 Redux State Management

### Store Configuration
**File:** `src/utils/reduxStore.jsx`

Combines three main slices:
- `app` - Application UI state
- `search` - Search caching
- `chat` - Live chat messages

### App Slice
**File:** `src/utils/appSlice.jsx`

**State:**
- `isMenuOpen: boolean` - Controls sidebar visibility

**Actions:**
- `toggleMenu()` - Toggles sidebar open/closed
- `closeMenu()` - Closes sidebar
- `openMenu()` - Opens sidebar

### Search Slice
**File:** `src/utils/searchSlice.jsx`

**State:**
- Dynamic object storing cached search results

**Actions:**
- `cacheResults()` - Stores search suggestions by query

### Chat Slice
**File:** `src/utils/chatSlice.jsx`

**State:**
- `messages: array` - Array of chat messages

**Actions:**
- `addMessage()` - Adds new message, maintains 20-message limit

## 🎯 Key Features & Implementation Details

### 1. **Search with Debouncing**
- 200ms debounce timer prevents excessive API calls
- Caches results in Redux for performance
- Uses Google's suggest API for autocomplete

### 2. **Responsive Design**
- Tailwind CSS for responsive layouts
- Conditional sidebar rendering based on route
- Mobile-friendly navigation

### 3. **Performance Optimizations**
- Search result caching reduces API calls
- Message limit in chat prevents memory issues
- Lazy loading potential for large video lists

### 4. **User Experience**
- Smooth transitions and hover effects
- Real-time chat simulation
- Intuitive navigation matching YouTube's interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd youtube-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### API Keys
Update `src/utils/constants.js` with your YouTube Data API key:
```javascript
const API_KEY = "YOUR_YOUTUBE_API_KEY";
```

### Environment Variables
For production, consider using environment variables for API keys.

## 📊 State Flow Diagram

```
User Input → Local State → Redux Actions → Redux Store → Component Re-render
    ↓              ↓              ↓              ↓              ↓
Search Query → useState → cacheResults → searchSlice → Suggestions Display
Menu Click → useState → toggleMenu → appSlice → Sidebar Toggle
Chat Message → useState → addMessage → chatSlice → Chat Update
```

## 🎨 Styling Approach

- **Tailwind CSS:** Utility-first styling for rapid development
- **Responsive Design:** Mobile-first approach with breakpoints
- **Component-based:** Each component has scoped styling
- **Hover States:** Interactive feedback on all clickable elements

## 🔮 Future Enhancements

- [ ] Video search functionality
- [ ] User authentication
- [ ] Video upload capability
- [ ] Real chat backend integration
- [ ] Video recommendations algorithm
- [ ] Dark mode support
- [ ] Video analytics
- [ ] Playlist management

## 🐛 Known Issues

- Mock data for comments (no backend integration)
- Limited video categories
- No video playback controls (uses YouTube embed)
- Search suggestions limited to Google's API

## 📝 Development Notes

This project demonstrates modern React development patterns including:
- Hooks-based functional components
- Redux Toolkit for state management
- Custom hooks for complex logic
- Performance optimization techniques
- Responsive design principles
