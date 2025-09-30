import Image from "next/image";

export default function Home() {
  return (
    <div className="p-3">
      <p>DATABASE_URL={process.env.DATABASE_URL}</p>
      <p>API_KEY={process.env.NEXTAUTH_SECRET}</p>
      <p>API_KEY={process.env.NEXTAUTH_URL}</p>
      <p>API_KEY={process.env.GOOGLE_CLIENT_ID}</p>
      <p>API_KEY={process.env.GOOGLE_CLIENT_SECRET}</p>
      <p>API_KEY={process.env.OPENAI_API_KEY}</p>
      <p>API_KEY={process.env.STRIPE_SECRET_KEY}</p>
      <p>API_KEY={process.env.NEXT_PUBLIC_API_URL}</p>
      <p>API_KEY={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}</p>

      <div className="p-3">끼얏호우!</div>
    </div>
  );
}
