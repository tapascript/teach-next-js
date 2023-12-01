
export async function GET(request) {
  
  const data = {
    'en': 'Hello',
    'es': 'Hola',
    'bn': 'হ্যালো'
  }
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'en';
  const msg = data[lang] || data['en'];
  return new Response(JSON.stringify({'greeting': msg}))
}