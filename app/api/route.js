export async function GET() {
    let lol = 'lolkkkkkkkkkk'
    console.log('process.env', JSON.stringify(process.env));
    return new Response(`${lol}`);
}