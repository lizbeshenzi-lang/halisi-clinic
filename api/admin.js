// api/admin.js - Basic admin dashboard (optional)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET' && req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Basic password check
  const adminPassword = process.env.ADMIN_PASSWORD || 'demo123';
  const { password } = req.query;

  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Return basic stats
  return res.status(200).json({
    success: true,
    message: 'Admin panel not yet configured',
    note: 'Connect to Vercel KV to see booking/submission stats'
  });
}
