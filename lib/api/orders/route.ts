import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { form, cart } = body;

    if (!form || !cart || cart.length === 0) {
      return NextResponse.json(
        { message: "Missing form or cart data" },
        { status: 400 }
      );
    }

    // هنا هتحط الكود الحقيقي بتاعك (حفظ في قاعدة بيانات، إرسال إيميل...إلخ)
    console.log("New order received:", { form, cart });

    return NextResponse.json(
      { message: "Order created successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to process order:", err);
    return NextResponse.json(
      { message: "Failed to process order" },
      { status: 500 }
    );
  }
}