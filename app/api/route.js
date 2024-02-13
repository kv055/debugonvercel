export async function GET() {
    console.log('process.env', process.env);
    return new Response("Nenananana");
}