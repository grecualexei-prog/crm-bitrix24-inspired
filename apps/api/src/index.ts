import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'crm-api' });
});

app.get('/api/dashboard', (_req, res) => {
  res.json({
    totalCustomers: 1240,
    totalDeals: 328,
    revenue: 128450,
    pipeline: 48200,
  });
});

app.listen(port, () => {
  console.log(`CRM API is running on http://localhost:${port}`);
});
