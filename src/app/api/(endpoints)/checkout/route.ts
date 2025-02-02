import { NextResponse } from "next/server";
import Stripe from "stripe";
import { ICar } from "../../models/car";
import { exampleImage } from "@/app/utils/constants";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
});

//katalogdaki activeCarslari alalim
const getActiveProducts = async () => {
  let stripeProducts = await stripe.products.list();
  return stripeProducts.data.filter((i) => i.active);
};

//Odeme oturumu olusturma
export async function POST(req: Request) {
  try {
    //1-istegin body kismi ilen arac bilgilerini al
    const car: ICar = await req.json();
    //2-stripe katalogunda olan urunleri al
    const stripeProducts = await getActiveProducts();
    //3-bizim alacagimiz urun stripe katalogunda varmi diye kntrol et
    let foundProduct = stripeProducts.find((i) => i.metadata.product_id === car._id);
    //4- eger katalogda yoksa ekle
    if (!foundProduct) {
      foundProduct = await stripe.products.create({
        name: car.make + " " + car.model,
        description: car.description,
        images: [exampleImage],
        default_price_data: {
          unit_amount: car.price * 100,
          currency: "usd",
        },
        metadata: {
          product_id: car._id,
        },
      });
    }
    //5- strioein olusturdugu urun id'sini ve urun miktarini nesne haline getir
    const product_info = {
      price: foundProduct.default_price,
      quantity: 1,
    };
    //6- odeme oturumunu olustur(url gelecek)
    // @ts-ignore
    const session = await stripe.checkout.sessions.create({
      line_items: [product_info],
      mode: "payment",
      success_url: "http://localhost:3000" + "/success",
      cancel_url: "http://localhost:3000" + "/decline",
    });
    console.log(session);
    //7- gelen bu odeme url'li cliente gonder ve clienti odeme linkine yonlendir
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error processing payment", error);
    return NextResponse.json(
      { error: "An error occurred while processing your payment." },
      { status: 500 }
    );
  }
}
