module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    generatedAt: new Date().toISOString(),
    health: 'ok',
    agentState: 'online',
    deployment: {
      platform: 'vercel',
      env: process.env.VERCEL_ENV || 'unknown',
      region: process.env.VERCEL_REGION || 'unknown'
    },
    notes: 'Deployed test dashboard. Local OpenClaw token/session stats are available only on your local host runtime, not in Vercel serverless.'
  });
};
