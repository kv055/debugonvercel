export async function GET() {
    
    console.log('Fuck Vercel');
    return new Response(process.env);
}