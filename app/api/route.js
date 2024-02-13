export async function GET() {
    let processEnvaiamnet = JSON.stringify(process.env)
    
    return new Response(`${processEnvaiamnet}`);
}