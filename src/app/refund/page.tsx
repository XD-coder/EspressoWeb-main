'use client';
import { motion } from 'framer-motion';

export default function RefundPolicyPage(): JSX.Element { // Renamed component
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 pt-24 max-w-4xl" // Added pt-24 for consistency
    >
      <h1 className="text-4xl font-bold mb-8 text-white">Refund Policy</h1> {/* Added text-white */}
      <p className="text-gray-400 mb-8">Effective Date: April 8, 2025</p>
      
      <p className="mb-8 text-neutral-300"> {/* Adjusted text color */}
        We want you to be happy with our services. Please read the following refund terms carefully
        before making a purchase.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Eligible Refunds</h2> {/* Added text-white */}
        <p className="mb-4 text-neutral-300">Refunds are available only for:</p> {/* Adjusted text color */}
        <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-400"> {/* Adjusted text color */}
          <li>First-time customers</li>
          <li>Shared Hosting or VPS services</li>
          <li>Refund requests made within 7 days of purchase</li>
        </ul>
        <p className="text-neutral-300">If you meet the above conditions, contact us to request a refund.</p> {/* Adjusted text color */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Non-Refundable Services</h2> {/* Added text-white */}
        <p className="mb-4 text-neutral-300">We do not offer refunds for:</p> {/* Adjusted text color */}
        <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-400"> {/* Adjusted text color */}
          <li>Domain registrations or renewals</li>
          <li>Dedicated servers</li>
          <li>Add-ons or custom setups</li>
          <li>Abuse-related terminations or ToS violations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. How to Request a Refund</h2> {/* Added text-white */}
        <p className="mb-4 text-neutral-300">Send an email to contact@devmatei.is-a.dev with:</p> {/* Adjusted text color */}
        <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-400"> {/* Adjusted text color */}
          <li>Your order ID</li>
          <li>The service you want refunded</li>
          <li>The reason for your request</li>
        </ul>
        <p className="text-neutral-300">Refunds are typically processed within 5–7 business days if approved.</p> {/* Adjusted text color */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Disputes and Chargebacks</h2> {/* Added text-white */}
        <p className="text-neutral-300"> {/* Adjusted text color */}
          Filing a chargeback without first contacting us is a violation of our terms and may lead
          to immediate service suspension. Always reach out to our support team first.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">5. Final Notes</h2> {/* Added text-white */}
        <p className="text-neutral-300"> {/* Adjusted text color */}
          All services are provided &quot;as is&quot; with no guaranteed uptime or performance. Our refund
          policy is designed to be fair but firm. Abuse of this policy will result in account
          blacklisting.
        </p>
      </section>

      <p className="text-gray-400 italic">
        Thanks for trusting Espresso Hosting — we&apos;re here to support you, every step of the way.
      </p>
    </motion.div>
  );
}