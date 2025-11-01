// src/components/buy/index.js

/**
 * File này export tất cả components của trang Buy
 * Giúp việc import ở file khác ngắn gọn hơn
 * 
 * Thay vì:
 *   import { BuyPageHeader } from './components/buy/BuyPageHeader'
 *   import { RegionTabs } from './components/buy/RegionTabs'
 * 
 * Chỉ cần:
 *   import { BuyPageHeader, RegionTabs } from './components/buy'
 */

export { BuyPageHeader } from './BuyPageHeader';
export { RegionTabs } from './RegionTabs';
export { FilterSection } from './FilterSection';
export { TicketCard } from './TicketCard';
export { TicketGrid } from './TicketGrid';
export { FloatingCart } from './FloatingCart';
export { CartModal } from './CartModal';
export * from './utils';