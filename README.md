# Mammaia Pizza Frontend

Next.js frontend for the real-time pizza ordering system.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Configure your `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

4. Start development server:
```bash
npm run dev
```

5. Open http://localhost:3000

## Pages

### Customer Pages

**Home (`/`)**
- Hero section
- Menu categories
- Featured info
- Navigation

**Menu (`/menu`)**
- Browse products by category
- Filter by category
- Product modal with customization
- Add to cart functionality

**Cart (`/cart`)**
- View cart items
- Update quantities
- Remove items
- Enter contact information
- Select pickup time (ASAP or scheduled)
- Choose payment method
- Place order

**Orders (`/orders`)**
- Real-time order status tracking
- 5-minute countdown timer
- Order details
- Contact information
- Pickup information
- Live socket connection indicator

**Contact (`/contact`)**
- Restaurant address
- Opening hours
- Contact information
- Payment methods
- Map location

### Admin Pages

**Admin Dashboard (`/admin`)**
- Secure login
- Real-time order notifications
- View orders by status
- Accept/reject orders
- Set estimated preparation time
- Mark orders as completed
- Desktop notifications

## Context Providers

### CartContext
Manages shopping cart state:
- `cart` - Array of cart items
- `addToCart(item)` - Add item to cart
- `removeFromCart(index)` - Remove item
- `updateQuantity(index, quantity)` - Update quantity
- `clearCart()` - Clear all items
- `getCartTotal()` - Get total price
- `getCartCount()` - Get total items

### SocketContext
Manages Socket.io connection:
- `socket` - Socket.io instance
- `isConnected` - Connection status
- `joinRoom(phone, firstName)` - Join customer room
- `joinAdminRoom()` - Join admin room
- `placeOrder(data)` - Emit order event
- `updateOrderStatus(data)` - Update order status

## API Client

Located in `lib/api.js`, provides:

**Products API**
- `productsAPI.getAll(params)` - Get all products
- `productsAPI.getById(id)` - Get single product
- `productsAPI.getByCategory(category)` - Get by category

**Orders API**
- `ordersAPI.create(data)` - Create order
- `ordersAPI.getByPhone(phone)` - Get orders by phone
- `ordersAPI.getById(orderId)` - Get single order

**Admin API**
- `adminAPI.login(credentials)` - Admin login
- `adminAPI.respondToOrder(data)` - Accept/reject order
- `adminAPI.getOrders(params)` - Get orders
- `adminAPI.completeOrder(orderId)` - Complete order

## Styling

Uses Tailwind CSS with custom configuration:

**Color Scheme**
- Primary: Red (#c94848, #dc2626, etc.)
- Secondary: Yellow/Beige
- Gray scale for text and backgrounds

**Custom Components**
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.card` - Card component
- `.input-field` - Form input
- `.category-badge` - Category filter button

## Real-time Features

### Customer Side
1. Place order from cart page
2. Redirected to orders page
3. Join socket room: `${phone}-${firstName}`
4. Listen for `orderStatusUpdate` events
5. UI updates automatically
6. 5-minute countdown timer

### Admin Side
1. Login to admin dashboard
2. Join admin room
3. Listen for `newOrder` events
4. Receive desktop notifications
5. Accept/reject orders
6. Real-time UI updates

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

- next - React framework
- react & react-dom - UI library
- socket.io-client - Real-time client
- axios - HTTP client
- tailwindcss - CSS framework

## Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS config
- `postcss.config.js` - PostCSS config

## Environment Variables

See `.env.local.example` for required variables.

## Deployment

**Vercel (Recommended)**
```bash
vercel
```

**Build for Production**
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features

✅ No authentication required
✅ Real-time order tracking
✅ Responsive design
✅ Cart persistence (localStorage)
✅ Socket.io reconnection handling
✅ Error handling
✅ Loading states
✅ Toast notifications
✅ Desktop notifications (admin)
