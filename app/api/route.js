export async function GET() {
    console.log('process.env', JSON.stringify(process.env));
    return new Response("Nenananana");
}