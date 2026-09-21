"use client";

import { useState } from "react";
import SubmitOrder from "@/components/checkout/submitorder";
import OrderSummary from "@/components/checkout/checkid";
import CheckoutSuccess from "@/components/checkout/checkout-success";


export default function CheckoutContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-lg">
        <CheckoutSuccess />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="order-1 lg:order-1">
        <OrderSummary />
      </div>
      <div className="order-2 lg:order-2 lg:col-span-2">
        <SubmitOrder onSuccess={() => setIsSubmitted(true)} />
      </div>
    </div>
  );
}