// page.tsx (Server Component - no "use client")
import AppButton from '../components/app_button'; // This is now a Client Component

export default async function MyPage() {
  // This runs on the server
  const data = await fetch('...'); // Server-side data fetching

  return (
    <div>
      <h1>My Server-Rendered Page</h1>
      {/* This button runs on the client */}
      <AppButton 
        label="Interactive Button" 
        onClick={() => console.log('Clicked!')} 
      />
    </div>
  );
}