'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

/**
 * LeadConnector chat widget, on every page except /contact.
 *
 * The widget runs its own SMS opt-in, and the carrier compliance review
 * requires that no other form collecting phone numbers or SMS consent exists
 * on a page where the widget is embedded. /contact is the only page with the
 * lead form (it collects a phone number), so the widget is kept off it. Do not
 * add a phone field to any other page without revisiting this.
 *
 * Links into /contact are plain <a> tags (full page load), so a widget that
 * was already loaded on another page can't linger on the contact page.
 */
export default function ChatWidget() {
  const pathname = usePathname();
  if (pathname === '/contact' || pathname?.startsWith('/contact/')) return null;

  return (
    <Script
      id="leadconnector-chat"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6ac4122920b336636f16a7c9"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
