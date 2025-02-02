import { NextResponse } from "next/server";
import Stripe from "stripe";
import connectMongo from "../../utils/connectMongo";
import Order from "../../models/order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
});

//stripe'da gerceklesen tum olaylarda(odeme success or decline) kendi DB update etmek iicn webhook kurulumu yaptik ve stripe gercekleresen olaylari buraya istek olarak atmasini sagladik.
export async function POST(req: Request) {
  try {
    //1- istegin body kismina eris
    const body = await req.json();
    //console.log("webhookbody=====>>>>", body);
    //2-odemem success ise satin alinan urunun verisine eriselim
    if (body.type === "checkout.session.completed") {
      //odeme otrumu verilerini al
      const session = body.data.object;
      //odeme iturumunda satin lainna urun id'lerini al
      const line_items = await stripe.checkout.sessions.listLineItems(session.id);
      //satin alinna urunlerin id'sini bildigimiz urunlerin stripe kapalog verilerine eris.
      const item = await stripe.products.retrieve(
        line_items.data[0].price?.product as string
      );
      //console.log("satinalinna urunler===>>>>.", item);
      //DB'se kaydedilecek siparis verini olustur
      const orderItem = {
        product: item.metadata.product_id,
        money_spend: session.amount_total / 100,
        currency: session.currency,
        type: line_items.data[0].price?.type,
      };
      //DB'e kaydet
      await connectMongo();
      await Order.create(orderItem);
    }
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "fail" });
  }
}
